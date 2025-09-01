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
                  pertanyaan: "1. Class apa yang digunakan di Bootstrap untuk membuat teks menjadi tebal?",
                  pilihanJawaban: ["fw-bold", "text-italic", "text-underline", "font-light"],
                  jawabanBenar: "fw-bold",
                  clueJawabanBenar: "Betul! 'fw-bold' dipakai untuk teks tebal di Bootstrap.",
                  clueJawabanSalah: "Coba cek lagi, di Bootstrap class untuk teks tebal adalah 'fw-bold'."
                },
                {
                  pertanyaan: "2. Dibawah ini, manakah website yang akan kalian gunakan untuk hiburan?",
                  pilihanJawaban: ["Wikipedia", "Duolingo", "Netflix","E-Samsat"],
                  jawabanBenar: "Netflix",
                  clueJawabanBenar: "Mantap mari lanjut ke materi selanjutnya",
                  clueJawabanSalah: "Hmm kurang tepat.. Coba deh tentang genre di Website"
                },
                {
                pertanyaan: "3. Bootstrap terdiri dari kumpulan apa saja?",
                pilihanJawaban: ["HTML, PHP, dan Python", "CSS, Javascript, dan komponen UI", "MySQL, MongoDB, dan PostgreSQL", "Photoshop dan CorelDraw"],
                jawabanBenar: "CSS, Javascript, dan komponen UI",
                clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                clueJawabanSalah: "coba deh pelajari lagi soal excel"
                },
                {
                pertanyaan: "4. Jika menemukan istilah asing pada sebuah website, mana yang sebaiknya digunakan?",
                pilihanJawaban: ["Italic", "Underline", "Bold", "Heading"],
                jawabanBenar: "Italic",
                clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                clueJawabanSalah: "coba deh pelajari lagi soal excel"
                },
                {
                pertanyaan: "5. Jika website akan dibuat dengan lebar setengah layar, maka berapakah ukuran grid yang tepat?",
                pilihanJawaban: ["col-8", "col-12", "col-4", "col-6"],
                jawabanBenar: "col-6",
                clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                clueJawabanSalah: "coba deh pelajari lagi soal excel"
                },
                {
                pertanyaan: "6. Jika ingin menghapus item (darurat), sebaiknya menggunakan jenis button?",
                pilihanJawaban: ["btn-danger", "btn-primary", "btn-success", "btn-info"],
                jawabanBenar: "btn-danger",
                clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                clueJawabanSalah: "coba deh pelajari lagi soal excel"
                }
              ]}
            />
        </div>
    </div>
  );
};

export default SoalPack1;