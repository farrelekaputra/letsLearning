import './App.css';
import Landing from './components/dashboard';
import { useRef } from 'react';
import HalamanUtama from './components/mainPage';
import Jaringan from './components/materi/jaringanKomputer';
import LayerOSI from './components/materi/layerOSI';
import DataLinkLayer from './components/materi/datalinkLayer';
import NetworkLayer from './components/materi/networkLayer';
import TransportLayer from './components/materi/transportLayer';
import SessionLayer from './components/materi/sessionlayer';
import PresentationLayer from './components/materi/presentationlayer';
import ApplicationLayer from './components/materi/applicationlayer';
import ListSoal from './components/soal/soal-bootstrap';
import SoalPack1 from './components/soal/bootstrap1';
import landingImage from './assets/thumbnail.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Swal from 'sweetalert2'
import HalamanMateri from './components/listMateri';
import PhysicalLayer from './components/materi/bootstrap2';

function App() {
  const landingRef = useRef(null);

  const scrollToLanding = () => {
    landingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Router>
      <Routes>
        {/* Halaman landing */}
        <Route
          path="/"
          element={
            <section>
              <div className="kontenAtas h-screen flex flex-col justify-evenly">
                <div className="nonWave-section md:h-3/4 gap-12 md:gap-0 p-8 md:p-20 flex flex-col-reverse md:flex-row mx-auto md:pt-0 pt-24 items-center">
                  <div className="text text-gray-800 flex flex-col gap-4 md:gap-6">
                    <h1 className='text-5xl text-orange-500 font-semibold'>Let's Learning</h1>
                    <p className='md:w-3/4 text-justify'>Belajar Informatika lebih menyenangkan bersama kami, mari mengeksplore lebih jauh tentang dunia informatika bersama! Bukan hanya sekedar koding, namun juga tentang jaringan dan desain!</p>
                    <button onClick={scrollToLanding} className='p-2 md:p-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-400 w-2/5'>Ayo Mulai!</button>
                  </div>
                  <img src={landingImage} className='w-4/5 md:w-1/3' alt="gambat thumbnail" />
                </div>
                <div className="wave-section md:h-1/4 md:-mt-40 hidden md:block">
                  <svg xmlns="http://www.w3.org/2000/svg" className='scale-y-50' viewBox="0 0 1440 320">
                    <path fill="#3B82F6" fill-opacity="1" d="M0,288L0,160L36.9,160L36.9,160L73.8,160L73.8,128L110.8,128L110.8,224L147.7,224L147.7,64L184.6,64L184.6,64L221.5,64L221.5,96L258.5,96L258.5,128L295.4,128L295.4,224L332.3,224L332.3,64L369.2,64L369.2,32L406.2,32L406.2,64L443.1,64L443.1,32L480,32L480,32L516.9,32L516.9,128L553.8,128L553.8,96L590.8,96L590.8,96L627.7,96L627.7,96L664.6,96L664.6,256L701.5,256L701.5,0L738.5,0L738.5,64L775.4,64L775.4,128L812.3,128L812.3,64L849.2,64L849.2,32L886.2,32L886.2,128L923.1,128L923.1,256L960,256L960,32L996.9,32L996.9,96L1033.8,96L1033.8,64L1070.8,64L1070.8,128L1107.7,128L1107.7,64L1144.6,64L1144.6,256L1181.5,256L1181.5,192L1218.5,192L1218.5,288L1255.4,288L1255.4,256L1292.3,256L1292.3,128L1329.2,128L1329.2,160L1366.2,160L1366.2,64L1403.1,64L1403.1,224L1440,224L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path>
                  </svg>
                </div>
              </div>
              <div ref={landingRef}>
                <Landing
                  listActivity={[
                    {
                      link: "/daftarMateri",
                      gambar: "https://api.iconify.design/fluent-color:planet-16.svg",
                      keterangan: "Lanjutkan Belajar",
                    },
                    {
                      link: "/listSoal",
                      gambar: "https://api.iconify.design/fluent-color:ribbon-star-20.svg",
                      keterangan: "Simulasi Ujian",
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
        <Route>
          <Route path="/daftarMateri" element={<HalamanMateri/>}/>
        </Route>
        <Route path="/mainPage" element={<HalamanUtama />}>
          <Route path="osiLayer" element={<Jaringan />} />
          <Route path="pengertianLayer" element={<LayerOSI />} />
          <Route path="physicalLayer" element={<PhysicalLayer />} />
          <Route path="DataLink" element={<DataLinkLayer />} />
          <Route path="networklayer" element={<NetworkLayer />} />
          <Route path="transportlayer" element={<TransportLayer />} />
          <Route path="sessionlayer" element={<SessionLayer />} />
          <Route path="presentationlayer" element={<PresentationLayer />} />
          <Route path="applicationlayer" element={<ApplicationLayer />} />
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