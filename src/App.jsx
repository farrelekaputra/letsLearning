import './App.css';
import Landing from './components/dashboard';
import Cover from './assets/thumbnail.png';
import HalamanUtama from './components/mainPage';
import Excel1 from './components/materi/excel1';
import MulaiWord from './components/materi/word1';
import HeadingBoostrap from './components/materi/bootstrap2';
import GridBootstrap from './components/materi/bootstrap3';
import ButtonBootstrap from './components/materi/bootstrap4';
import ListSoal from './components/soal/soal-bootstrap';
import SoalPack1 from './components/soal/bootstrap1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Swal from 'sweetalert2'

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman landing */}
        <Route
          path="/"
          element={
            <section className='overflow-x-hidden'>
              <div className="mt-8 md:mt-0 mb-8 md:mb-0 text-gray-800 text-xl content flex flex-col md:gap-0 gap-8 px-12 h-auto md:h-screen mx-auto items-center justify-center w-screen">
                <div className="noWave md:-mt-24 md:gap-0 gap-10 flex flex-col-reverse md:flex-row mx-auto md:items-center md:justify-center">
                  <div className="text-section gap-4 md:gap-8 flex flex-col md:w-1/2">
                    <h1 className="text-4xl font-semibold">Lets Learning</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae, necessitatibus adipisci est accusantium officia, perspiciatis nihil excepturi sint eligendi impedit modi ipsam! Iusto possimus quo vero libero quas quae.</p>
                    <button className="p-3 w-full md:w-1/3 rounded-md text-white bg-orange-600 duration-100 transition-transform hover:bg-orange-400 hover:cursor-pointer">Ayo Mulai!</button>
                  </div>
                  <div className="flex md:justify-center md:mx-auto img-section md:w-1/2 w-3/4">
                    <img className='md:w-3/4 h-3/4' src={Cover} alt="" />
                  </div>
                </div>
                <svg
                  className="absolute bottom-0 left-0 w-full scale-y-50 origin-bottom"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path fill="#60A5FA" fill-opacity="1" d="M0,192L21.8,176C43.6,160,87,128,131,122.7C174.5,117,218,139,262,138.7C305.5,139,349,117,393,90.7C436.4,64,480,32,524,32C567.3,32,611,64,655,69.3C698.2,75,742,53,785,69.3C829.1,85,873,139,916,176C960,213,1004,235,1047,208C1090.9,181,1135,107,1178,101.3C1221.8,96,1265,160,1309,165.3C1352.7,171,1396,117,1418,90.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
                </svg>
              </div>
              <div className="landing-section bg-gray-200 w-screen" id="landingSection">
                <Landing
                  listActivity={[
                    {
                      link: "/mainPage/excel1",
                      gambar: "https://api.iconify.design/fluent-color:planet-16.svg",
                      keterangan: "Melanjutkan Belajar",
                    },
                    {
                      link: "/listSoal",
                      gambar: "https://api.iconify.design/fluent-color:ribbon-star-20.svg",
                      keterangan: "Mulai Simulasi Ujian",
                    },
                    {
                      link: "/tentang",
                      gambar: "https://api.iconify.design/fluent-color:people-community-16.svg",
                      keterangan: "Tentang Pengembang",
                    },
                  ]}
                />
              </div>
            </section>
          }
        />

        {/* Semua materi lewat HalamanUtama */}
        <Route path="/mainPage" element={<HalamanUtama />}>
          <Route path="excel1" element={<Excel1 />} />
          <Route path="word1" element={<MulaiWord />} />
          <Route path="headingBootstrap" element={<HeadingBoostrap />} />
          <Route path="gridBootstrap" element={<GridBootstrap />} />
          <Route path="buttonBootstrap" element={<ButtonBootstrap />} />
        </Route>


        {/* Daftar soal */}
        <Route path="/listSoal" element={<ListSoal />} />

        {/* Halaman soal absolute path */}
        <Route path="/soal/soal1" element={<SoalPack1 />} />
      </Routes>
    </Router>
  );
}

export default App;