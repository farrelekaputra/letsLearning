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
                  clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                  pertanyaan: "2. Dibawah ini, manakah website yang akan kalian gunakan untuk hiburan?",
                  pilihanJawaban: ["Wikipedia", "Duolingo", "Netflix","E-Samsat"],
                  jawabanBenar: "Netflix",
                  clueJawabanBenar: "Betul! netflix menjadi salah satu website platform hiburan",
                  clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "3. Bootstrap terdiri dari kumpulan apa saja?",
                pilihanJawaban: ["HTML, PHP, dan Python", "CSS, Javascript, dan komponen UI", "MySQL, MongoDB, dan PostgreSQL", "Photoshop dan CorelDraw"],
                jawabanBenar: "CSS, Javascript, dan komponen UI",
                clueJawabanBenar: "betul! bootstrap disusun dari CSS, javascript dan beberapak komponen UI",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "4. Jika menemukan istilah asing pada sebuah website, mana yang sebaiknya digunakan?",
                pilihanJawaban: ["Italic", "Underline", "Bold", "Heading"],
                jawabanBenar: "Italic",
                clueJawabanBenar: "Yap! Italic digunakan untuk istilah asing",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "5. Jika website akan dibuat dengan lebar setengah layar, maka berapakah ukuran grid yang tepat?",
                pilihanJawaban: ["col-8", "col-12", "col-4", "col-6"],
                jawabanBenar: "col-6",
                clueJawabanBenar: "Betul! col-6 digunakan untuk 1/2 layar yang berasal dari col-12",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                },
                {
                pertanyaan: "6. Jika ingin menghapus item (darurat), sebaiknya menggunakan jenis button?",
                pilihanJawaban: ["btn-danger", "btn-primary", "btn-success", "btn-info"],
                jawabanBenar: "btn-danger",
                clueJawabanBenar: "mantap! sesuai dengan namanya btn-danger tepat digunakan untuk beberapa keadaan yang urgensi",
                clueJawabanSalah: "Tet tot jawabanmu salah"
                }
              ]}
            />
        </div>
    </div>
  );
};

export default SoalPack1;