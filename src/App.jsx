import './App.css';
import Landing from './components/dashboard';
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