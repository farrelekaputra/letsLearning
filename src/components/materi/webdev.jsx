import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';
import gambar1 from "../../assets/konsep website.png"

const PengembanganWeb = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Apa itu Website?',
                    konten: [
                    { tipe: 'paragraf', isi: 'Website adalah sekumpulan halaman digital yang saling terhubung dan dapat diakses melalui internet menggunakan browser seperti Google Chrome, Mozilla Firefox, atau Microsoft Edge. Setiap halaman website biasanya berisi informasi berupa teks, gambar, video, maupun fitur interaktif lainnya. Secara sederhana, website bisa diibaratkan seperti buku digital. Jika buku memiliki halaman, maka website memiliki web page (halaman web). Semua halaman tersebut disimpan di sebuah server dan dapat diakses kapan saja selama terhubung dengan internet.' },
                    {tipe: 'layout', arah: 'col',
                        items : [
                            { tipe: 'gambar', width:'w-full md:w-3/4', url:gambar1, caption:'Ilustrasi cara kerja proses enkripsi' },
                            { tipe: 'paragraf', isi: 'Jika diibaratkan seperti tubuh manusia, website terdiri dari beberapa struktur. yaitu HTML sebagai kerangka atau tengkorak sebuah website, lalu ada CSS sebagai pengatur tampilan atau outfit pada sebuah website, dan ada javascript sebagai logika pada sebuah website.' },
                        ]
                    },
                    { tipe: 'paragraf', isi: 'Website diakses melalui alamat khusus yang disebut URL (Uniform Resource Locator), contohnya: https://smkmuh2smg.sch.id/' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/webDev/penjelasanHTML"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar Website'}
                soalCustom={[
                    {
                    pertanyaan: "Website sering diibaratkan seperti sebuah buku digital. Dalam analogi tersebut, apa yang dimaksud dengan halaman pada website dan melalui apa website dapat diakses oleh pengguna?",
                    pilihanJawaban: ["Dark Web", "Deep Web", "Web Page", "Web Sharing"],
                    jawabanBenar: "Web Page",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default PengembanganWeb;