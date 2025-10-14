import Contohsoal from "../loopingsoal";
import Navbar from "../navbar";

const SoalPack1 = () => {
  return (
    <div>
        <Navbar menuEnabled={false}/>
        <div className="container pt-20 px-12">
            <Contohsoal
              modeExcel={true}
              singleSoal={true}
              showNextButton
              nextPath="/listSoal"
              popupFinish={true}
              pesanPopup='Selamat! Kamu telah membuktikan kehebatanmu! 98% pengguna telah kamu kalahkan, you deserve it!'
              tampilNama={true}
              JudulSoal={'Coba jawab soal dibawah'}
              soalCustom={[
                {
                  pertanyaan: "1. Dalam konsep OSI Model, apa yang dikirimkan dari satu perangkat atau software ke tujuan?",
                  pilihanJawaban: ["Paket", "Kabel", "Barang", "Data"],
                  jawabanBenar: "Data",
                  clueJawabanBenar: "Betul! yang dikirimkan antara satu perangkat ke perangkat lain dalam konsep OSI Model adalah data.",
                  clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                  pertanyaan: "2. Bagaimana proses server mengirim data?",
                  pilihanJawaban: ["Application Layer -> Physical Layer", "Network Layer -> Data-Link Layer", "Presentation Layer -> Physical Layer","Physical Layer -> Application Layer"],
                  jawabanBenar: "Physical Layer -> Application Layer",
                  clueJawabanBenar: "Betul! proses perjalanan data dari server berjalan dari physical layer menuju application layer",
                  clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "3. Diantara perangkat ini, mana kah yang termasuk dalam physical layer?",
                pilihanJawaban: ["Gmail", "Kabel", "Chrome", "Galon"],
                jawabanBenar: "Kabel",
                clueJawabanBenar: "betul! ciri utama perangkat jaringan di physical layer adalah dapat dipegang dan dikonfigurasi",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "4. Perangkat yang berfungsi untuk menyebarkan sinyal secara wired (kabel) ke berbagai client atau tujuan adalah?",
                pilihanJawaban: ["Access Point", "Router", "Provider", "Switch"],
                jawabanBenar: "Switch",
                clueJawabanBenar: "Yap! switch merupakan perangkat untuk mempercabang perangkat khususnya secara wired",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "5. Proses pencarian data tercepat disebut?",
                pilihanJawaban: ["Subnetting", "Routing", "Addressing", "COding"],
                jawabanBenar: "Routing",
                clueJawabanBenar: "Betul! Routing merupakan proses mencari jalur tercepat ke tujuan",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "6. Apa fungsi utama Trasport Layer?",
                pilihanJawaban: ["Menentukan alamat IP tujuan data", "Menentukan jalur tercepat", "Mengubah data menjadi sinyal listrik", "Memastikan data sampai ke tujuan dengan utuh dan aman"],
                jawabanBenar: "Memastikan data sampai ke tujuan dengan utuh dan aman",
                clueJawabanBenar: "mantap! transport layer itu kaya kurir yang jamin paketmu utuh dan aman ketika sampai di rumah",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "7. Proses mana yang bekerja ketika melakukan komentar pada sebuah video di YouTube?",
                pilihanJawaban: ["Establish Process", "Terminate Process", "Maintain Process", "Searching Proccess"],
                jawabanBenar: "Maintain Process",
                clueJawabanBenar: "mantap! fungsi maintain process itu makesure setiap kegiatan di internet yang berhubungan sama aktivitas login",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "8. Ketika kalian megnirim pesan lewat whatsApp layer apa yang pertama menanggapi nya?",
                pilihanJawaban: ["Physical Layer", "Network Layer", "Session Layer", "Application Layer"],
                jawabanBenar: "Application Layer",
                clueJawabanBenar: "mantap! Session layer berfungsi sebagai pemroses pertama pesan yang kalian kirim",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
              ]}
            />
        </div>
    </div>
  );
};

export default SoalPack1;