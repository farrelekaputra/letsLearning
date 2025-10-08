import Navbar from "../navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LayoutSoal = ({ komponenSoal }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.tujuanSoal !== "/soal/soal1") {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "info",
        title: "Maaf!",
        text: "Saat ini soal masih dikembangkan",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        didOpen: (popup) => {
          popup.style.marginTop = "80px"
        }
      });
    } else {
      navigate(item.tujuanSoal);
    }
  };

  return (
    <section className="text-gray-800 isikonten md:h-screen h-auto w-full justify-center">
      <Navbar menuEnabled={false} />
      <div className="konten px-8 pt-24 flex flex-col gap-4 max-w-6xl mx-auto">
        <h1 className="heading text-2xl font-semibold">Mau ngerjain latihan apa hari ini?</h1>
        <div className="isikonten flex flex-col md:flex-row gap-4 max-w-6xl justify-center">
        {Array.isArray(komponenSoal) &&
          komponenSoal.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className="flex mx-auto w-full bg-white hover:bg-gray-100 transition-transform duration-75 justify-start p-4 border-2 gap-4 md:gap-6 rounded-xl cursor-pointer"
            >
              <img src={item.gambarSoal} className="w-16 h-12" alt="" />
              <div className="soalContent flex flex-col">
                <h1 className="text-xl">{item.judulSoal}</h1>
                <ul className="flex gap-2">
                  <li>{item.deskripsiSoal}</li>
                  <li className="text-xl">•</li>
                  <li>{item.detailSoal}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ListSoal = () => {
  return (
    <LayoutSoal
      komponenSoal={[
        {
          tujuanSoal: "/soal/soal1",
          judulSoal: "Pengenalan OSI Model",
          gambarSoal: "https://www.shutterstock.com/image-vector/7-layer-osi-network-model-260nw-2435570561.jpg",
          detailSoal: "8 soal",
          deskripsiSoal: "pilihan ganda",
        },
        {
          tujuanSoal: "",
          judulSoal: "OSI Model Lanjutan",
          gambarSoal: "https://www.shutterstock.com/image-vector/concept-osi-model-open-system-260nw-2341606833.jpg",
          detailSoal: "15 soal",
          deskripsiSoal: "pilihan ganda",
        },
        {
          tujuanSoal: "",
          judulSoal: "Pengenalan TCP/IP",
          gambarSoal: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXR8Y1CkwWs6-pU-QjgNcDbHryPaZ2krrgg&s",
          detailSoal: "20 soal",
          deskripsiSoal: "pilihan ganda",
        },
      ]}
    />
  );
};

export default ListSoal;
