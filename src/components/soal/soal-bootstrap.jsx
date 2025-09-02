import Navbar from "../navbar";
import { Link } from "react-router-dom";

const LayoutSoal = ({ komponenSoal }) => {
  return (
    <section className="container md:h-screen h-auto w-full justify-center">
      <Navbar menuEnabled={false} />
      <div className="content px-12 pt-24 flex flex-col md:flex-row gap-4 max-w-6xl mx-auto">
        {komponenSoal.map(
          ({ tujuanSoal, judulSoal, detailSoal, deskripsiSoal, gambarSoal }, index) => {
            return (
              <Link
                to={tujuanSoal}
                key={index}
                className="flex mx-auto bg-white hover:bg-gray-100 transition-transform duration-75 justify-center p-4 border-2 rounded-xl"
              >
                <img src={gambarSoal} className="w-16" alt="" />
                <div className="soalContent flex flex-col">
                  <h1 className="text-xl">{judulSoal}</h1>
                  <ul className="flex gap-2">
                    <li>{deskripsiSoal}</li>
                    <li className="text-xl">•</li>
                    <li>{detailSoal}</li>
                  </ul>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
};

const ListSoal = () => {
  return (
    <LayoutSoal
      komponenSoal={[
        {
          tujuanSoal: "/soal/soal1",   // ⬅️ absolute path
          judulSoal: "Pengenalan Bootstrap",
          gambarSoal: "https://icons.getbootstrap.com/assets/img/icons-hero.png",
          detailSoal: "6 soal",
          deskripsiSoal: "pilihan ganda",
        },
        {
          tujuanSoal: "/soal/soal2",   // ⬅️ nanti bikin sendiri
          judulSoal: "Bootstrap Lanjutan",
          gambarSoal: "https://icons.getbootstrap.com/assets/img/icons-hero.png",
          detailSoal: "15 soal",
          deskripsiSoal: "pilihan ganda",
        },
        {
          tujuanSoal: "/soal/soal3",   // ⬅️ nanti bikin sendiri
          judulSoal: "Bootstrap Expert",
          gambarSoal: "https://icons.getbootstrap.com/assets/img/icons-hero.png",
          detailSoal: "20 soal",
          deskripsiSoal: "pilihan ganda",
        },
      ]}
    />
  );
};

export default ListSoal;