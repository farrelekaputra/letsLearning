import { useEffect, useState } from "react";
import UseLogicSoal from "./logikasoal";
import { useNavigate } from "react-router-dom";
import PopupNama from "./popupnama";
import Draggable from "react-draggable";

const Contohsoal = ({
  soalCustom,
  showNextButton,
  nextPath,
  JudulSoal,
  singleSoal = false,
  popupFinish = false,
  tampilNama = false,
  pesanPopup = ""
}) => {
  const {
    daftarSoal,
    jawaban,
    aturJawaban,
    hasil,
    statusHasil,
    handleSubmit,
    handleCheckAll,
    sudahDikoreksi,
    skor
  } = UseLogicSoal(soalCustom || []);

  const navigate = useNavigate();
  const formatTime = (second) => {
    const menit = Math.floor(second / 60);
    const detik = second % 60;

    return `${menit} : ${detik.toString().padStart(2, "0")}`;
  }

  /* ================= STATE ================= */
  const [tampilPopup, aturPopup] = useState(false);
  const [namaUser, setNamaUser] = useState("");
  const [showNamaPopup, setShowNamaPopup] = useState(tampilNama);

  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(600); // 10 menit

  /* ================= HANDLER ================= */
  const handleNext = () => {
    setShowCountdown(false);

    if (popupFinish && !tampilPopup) {
      aturPopup(true);
    } else {
      navigate(nextPath);
    }
  };

  const handleCloseModal = () => {
    aturPopup(false);
    navigate(nextPath);
  };

  /* ================= COUNTDOWN EFFECT ================= */
  useEffect(() => {
    if (!showCountdown) return;

    if (countdown <= 0) {
      setShowCountdown(false);
      aturPopup(true);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, showCountdown]);

  /* ================= COUNTDOWN COMPONENT ================= */
  const Countdown = ({
    value,
    as = "p",
    className = "",
    color = "text-red-600",
    size = "text-4xl"
  }) => {
    const Tag = as;
    return (
      <Tag className={`${size} ${color} font-bold text-center ${className}`}>
        {value}
      </Tag>
    );
  };

  const semuaSudahDijawab = jawaban.every((j) => j !== "");

  const actionWrapperClass = singleSoal
  ? "w-full md:w-1/4 md:fixed md:right-20 md:top-24 flex flex-col gap-3 p-4 border rounded-xl"
  : "w-3/4 flex flex-col gap-3 p-4 mt-6";

  const bolehNext = semuaSudahDijawab && (singleSoal || sudahDikoreksi);
  const warnaNextButton = !bolehNext ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-green-500 text-white'

  return (
    <div className="md:p-6 md:-mt-4 w-full">

      {/* ================= POPUP NAMA ================= */}
      {showNamaPopup && (
        <PopupNama
          onSubmit={(nama) => {
            setNamaUser(nama);
            setShowNamaPopup(false);
            setCountdown(600);
            setShowCountdown(true);
          }}
        />
      )}

      <p className="text-2xl font-semibold">{JudulSoal}</p>

      {/* ================= KONTEN ================= */}
      <section className="mt-4 w-full flex flex-col gap-6">
        
        {/* ===== SOAL ===== */}
        <div className="w-full md:w-3/4 flex flex-col gap-4">
        {showCountdown && (
            <div className="showCOuntDownMobile md:hidden bg-white p-2 rounded block fixed right-5 top-16">
              <p>Siswa waktu :</p>
            <Countdown
              value={formatTime(countdown)}
              as="div"
              size="text-xl"
              color="text-gray-700"
              />
            </div>
          )}
          {daftarSoal.map((soal, index) => (
            <div key={index} className="flex flex-col p-4 gap-2">
              <h1>{soal.pertanyaan}</h1>

              <form className="space-y-2 ">
                {soal.pilihanJawaban.map((pilihan, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <input
                      type="radio"
                      name={`pilihan-${index}`}
                      value={pilihan}
                      checked={jawaban[index] === pilihan}
                      onChange={(e) => {
                        const newJawaban = [...jawaban];
                        newJawaban[index] = e.target.value;
                        aturJawaban(newJawaban);
                      }}
                    />
                    <label>{pilihan}</label>
                  </div>
                ))}
              </form>

              {hasil[index] && (
                <p
                  className={`mt-2 text-sm ${
                    statusHasil[index] === "benar"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {hasil[index]}
                </p>
              )}
            </div>
          ))}

          {singleSoal && skor !== null && sudahDikoreksi && (
            <p className={skor < 60 ? "text-red-600" : "text-green-600"}>
              Skor kamu {skor}
            </p>
          )}
        </div>

        <div className={actionWrapperClass}>
        {showCountdown && singleSoal && (
          <div className="hidden md:flex md:flex-col">
            <p>Sisa waktu mengerjakan :</p>
            <Countdown
              value={formatTime(countdown)}
              as="div"
              size="text-5xl"
              color="text-gray-700"
            />
          </div>
        )}

        <button
          onClick={handleCheckAll}
          disabled={!semuaSudahDijawab}
          className="p-2 rounded bg-blue-500 text-white"
        >
          Cek Jawaban
        </button>

        {showNextButton && (
          <button
            onClick={handleNext}
            disabled={!bolehNext}
            className={`p-2 rounded transition-colors duration-200 ${warnaNextButton}`}
          >
            Selanjutnya
          </button>
        )}
      </div>

      </section>

      {/* ================= POPUP HASIL ================= */}
      {tampilPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center w-80">
            <h2 className="text-xl font-bold mb-2">🎉 Mantap!</h2>
            <p className="mb-4">
              {namaUser && `${namaUser}, `}skor kamu {skor}
            </p>
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Lanjut Materi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contohsoal;