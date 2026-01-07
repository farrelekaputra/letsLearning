import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';
import gambar1 from '../../assets/konsep css.png'

const MateriCss = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Menghias Tampilan website',
                    konten: [
                    { tipe: 'paragraf', isi: 'CSS adalah singkatan dari Cascading Style Sheets. CSS digunakan untuk mengatur tampilan dan gaya dari sebuah website yang sudah memiliki struktur HTML. Jika HTML diibaratkan sebagai kerangka atau tengkorak, maka CSS adalah kulit, pakaian, dan riasannya. CSS membuat website terlihat lebih menarik, rapi, dan nyaman dilihat oleh pengguna. Tanpa CSS, website tetap bisa ditampilkan, tetapi tampilannya akan sangat sederhana, polos, dan kurang menarik.' },
                    { tipe: 'gambar', width:'md:w-3/4', url:gambar1, caption:'Ilustrasi Perbandingan Penggunaan CSS' },
                    { tipe: 'paragraf', isi: 'Beberapa fungsi utama CSS dalam sebuah website adalah mengatur teks (warna dan ukuran teks), mengatur jarak baik itu jarak vertikal atau horizontal, mengatur komposisi, dan mengatur tampilan website secara keseluruhan.' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/webDev/penjelasanDatabase"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar CSS'}
                soalCustom={[
                    {
                    pertanyaan: "Dibawah ini mana yang termasuk kedalam fungsi CSS?",
                    pilihanJawaban: ["Mengatur Ukuran Teks", "Rancangan Awal Website", "Menyimpan Data", "Menjalankan Logika"],
                    jawabanBenar: "Mengatur Ukuran Teks",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default MateriCss;