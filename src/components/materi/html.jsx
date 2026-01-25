import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';
import gambar1 from '../../assets/konsep html.png'

const PenjelasanHTML = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Struktur Utama Website',
                    konten: [
                    { tipe: 'paragraf', isi: 'HTML adalah singkatan dari HyperText Markup Language. HTML merupakan bahasa dasar yang digunakan untuk membuat struktur sebuah website. Hampir semua website di internet dibangun menggunakan HTML sebagai fondasinya. Jika website diibaratkan sebagai tubuh manusia, maka HTML adalah kerangka atau tengkoraknya. HTML menentukan bagian-bagian utama website seperti judul, paragraf, gambar, tombol, dan link. Tanpa HTML, sebuah website tidak akan memiliki bentuk atau susunan yang jelas.' },
                    {tipe:'layout', arah:'col',
                        items:[
                            { tipe: 'gambar', width:"w-full md:w-3/4", url:gambar1, caption:'Ilustrasi HTML Sebagai pondasi website' },
                            { tipe: 'paragraf', isi: 'HTML memiliki peran penting dalam pembangunan website, antara lain: Menentukan struktur halaman website, Mengatur letak teks, gambar, dan elemen lainnya, dan Menjadi dasar bagi teknologi web lain seperti CSS dan JavaScript. HTML tidak berfungsi untuk mempercantik tampilan atau membuat animasi, tetapi fokus pada kerangka dan isi dasar website.' },
                        ]
                    },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/webDev/penjelasanCSS"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar Website'}
                soalCustom={[
                    {
                    pertanyaan: "Jika diibaratkan, apa fungsi HTML pada sebuah website?",
                    pilihanJawaban: ["Logika", "Kerangka", "Outfit", "Make up"],
                    jawabanBenar: "Kerangka",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default PenjelasanHTML;