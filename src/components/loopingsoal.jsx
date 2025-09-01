import { useState } from "react";
import UseLogicSoal from './logikasoal';
import { useNavigate } from "react-router-dom";
import PopupNama from "./popupnama"

const Contohsoal = ({
  soalCustom,
  showNextButton,
  nextPath,
  JudulSoal,
  singleSoal = false,
  popupFinish = false,
  onPopupClose = () => {},
  tampilNama = false,
  pesanPopup = ""
}) => {
  const { daftarSoal, jawaban, aturJawaban, statusHasil, handleSubmit, handleCheckAll, sudahDikoreksi, skor } 
    = UseLogicSoal(soalCustom || []);

  const semuaSudahDijawab = jawaban.every((j) => j !== "");
  const semuaBenar = statusHasil.every((s) => s === "benar");
  const navigate = useNavigate();

  const [tampilPopup, aturPopup] = useState(false);
  const [namaUser, setNamaUser] = useState("");
  const [showNamaPopup, setShowNamaPopup] = useState(tampilNama);

  const handleNext = () => {
    if (popupFinish) aturPopup(true);
    else navigate(nextPath);
  };

  const handleCloseModal = () => {
    aturPopup(false);
    navigate(nextPath);
  };

  return (
    <div className="p-6 -mt-4">
      {/* Popup Nama Reusable */}
      {showNamaPopup && (
        <PopupNama
          onSubmit={(nama) => {
            setNamaUser(nama);
            setShowNamaPopup(false);
          }}
        />
      )}

      <p className="cobaText text-2xl">{JudulSoal}</p>

      {/* isi soal tetap sama */}
      <section className="soal mt-4 flex flex-col gap-6">
        {daftarSoal.map((soal, index) => (
          <div key={index}>
            <h1>{soal.pertanyaan}</h1>
            <form onSubmit={(e) => handleSubmit(e, index)} className="mt-4 space-y-2">
              {soal.pilihanJawaban.map((pilihan, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <input
                    type="radio"
                    id={`${index}-pilihan-${i}`}
                    name={`pilihan-${index}`}
                    value={pilihan}
                    checked={jawaban[index] === pilihan}
                    onChange={(e) => {
                      const newJawaban = [...jawaban];
                      newJawaban[index] = e.target.value;
                      aturJawaban(newJawaban);
                    }}
                  />
                  <label htmlFor={`${index}-pilihan-${i}`}>{pilihan}</label>
                </div>
              ))}
            </form>
          </div>
        ))}

        {singleSoal && skor !== null && sudahDikoreksi && (
          <div className="text-md">
            {skor <= 60 
              ? (<p className="text-red-600">Duh skor kamu {skor} masih kurang nih</p>) 
              : (<p className="text-green-600 font-semibold">Skor kamu {skor}, lanjut {namaUser && `${namaUser}`}!</p>)}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <button
            onClick={handleCheckAll}
            disabled={!semuaSudahDijawab}
            className="p-2 w-full md:w-1/3 rounded bg-blue-500 text-white hover:bg-blue-400"
          >
            Cek Jawaban
          </button>

        {showNextButton && (
          <button
            disabled={skor < 60} // ⬅️ sekarang tergantung skor
            onClick={handleNext}
            className={`tombolNext p-2 w-full md:w-1/3 rounded transition ${
              skor >= 60
                ? "bg-green-500 text-white hover:bg-green-400"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Selanjutnya
          </button>
        )}
        </div>
      </section>

      {/* Popup Finish */}
      {tampilPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-bold mb-2">🎉 Mantap!</h2>
            <p className="mb-4">{namaUser ? `${namaUser},` : ""} {pesanPopup}</p>
            <button 
              onClick={handleCloseModal} 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
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