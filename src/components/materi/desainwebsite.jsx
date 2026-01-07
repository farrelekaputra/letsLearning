import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';
import gambar1 from '../../assets/pengantar desain.jpg'

const DesainWebsite = () => {
    return (
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Pengantar Desain Website',
                    konten: [
                    { tipe: 'paragraf', isi: 'Desain website adalah proses merancang tampilan dan pengalaman pengguna pada sebuah website agar informasi yang disampaikan dapat diterima dengan mudah, nyaman, dan menarik. Desain bukan hanya soal membuat website terlihat bagus, tetapi juga memastikan pengguna tidak bingung saat menggunakannya. Dalam praktiknya, sebuah website dengan fungsi yang baik belum tentu efektif jika desainnya kurang tepat. Pengguna cenderung meninggalkan website yang terlihat berantakan, sulit dibaca, atau membingungkan, meskipun isi informasinya sebenarnya penting. Oleh karena itu, desain website memiliki peran krusial sebagai penghubung antara informasi dan pengguna.' },
                    { tipe: 'gambar', width:'md:w-3/4', url:gambar1, caption:'Contoh desain yang interaktif' },
                    { tipe: 'paragraf', isi: 'Bagi siswa SMK atau bahkan bagi penggiat dunia kreatif, memahami desain website sejak awal akan membantu dalam membangun website yang tidak hanya bisa berjalan secara teknis, tetapi juga memiliki nilai guna, estetika, dan kenyamanan bagi penggunanya.' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/desainWebsite/kegunaanDesainWeb"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar desain website'}
                soalCustom={[
                    {
                    pertanyaan: "Bagaimana cara agar informasi pada sebuah website dapat tersampaikan dengan baik?",
                    pilihanJawaban: ["Isi seluruh website agar visual menarik", "Dominasi teks agar audiens paham", "Menggunakan komposisi teks dan gambar agar informasi seimbang", "Semua jawaban benar"],
                    jawabanBenar: "Menggunakan komposisi teks dan gambar agar informasi seimbang",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default DesainWebsite;