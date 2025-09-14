import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Landing = ({ listActivity }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.link === "/tentang") {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "info",
        title: "Maaf!",
        text: "Saat ini pengembang masih malu menunjukkan diri",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true
      });
    } else {
      navigate(item.link);
    }
  };

  return (
    <div className="konten text-xl p-8 flex flex-col w-full text-white bg-blue-400 justify-center mx-auto items-center md:h-screen gap-8">
      {/* Content */}
      <section className="content w-full flex flex-col justify-center items-center gap-4">
        <p>Apa yang ingin anda lakukan hari ini?</p>
        <div className="array flex gap-4 flex-col md:flex-row">
          {Array.isArray(listActivity) &&
            listActivity.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className="card flex flex-wrap justify-center h-auto transition-transoform duration-75 md:px-0 md:h-48 gap-4 md:gap-2 items-center bg-blue-50 border-blue-400 hover:bg-white hover:border-4 border-2 w-full md:w-1/3 flex-row md:flex-col p-4 rounded-lg"
              >
                <img src={item.gambar} alt="gambar" className="w-16" />
                <p className="caption text-center text-gray-800">{item.keterangan}</p>
              </button>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;