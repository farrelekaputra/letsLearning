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
        showCloseButton: true,
      });
    } else {
      navigate(item.link);
    }
  };

  return (
    <div className="isiKonten p-8 py-12 flex flex-col w-full bg-blue-500 text-white justify-center items-center md:h-screen gap-8">
      <section className="content w-full flex flex-col justify-center items-center gap-4">
        <p className="text-xl">Apa yang ingin anda pelajari hari ini?</p>
        <div className="array flex gap-4 flex-col md:flex-row">
          {Array.isArray(listActivity) &&
            listActivity.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(item)}
                className="card cursor-pointer flex flex-col text-gray-800 hover:text-blue-500 justify-center h-auto transition-transform duration-75 md:px-0 md:h-48 gap-4 md:gap-2 items-center bg-blue-50 border-blue-400 hover:bg-white hover:border-4 border-2 w-full md:w-1/3 p-4 rounded-lg"
              >
                <img src={item.gambar} alt="gambar" className="w-16" />
                <p className="caption text-center text-xl">{item.keterangan}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;