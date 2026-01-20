import osiLayer from "../../assets/osi-layer.png";
import pindahData from "../../assets/data-moving.png";
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const LayerOSI = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Lapisan OSI Model',
                    konten: [
                    { tipe: 'paragraf', isi: 'Untuk memudahkan pemahaman, OSI Model dapat dianalogikan dengan proses belanja online. Ketika seseorang membeli barang melalui aplikasi e-commerce, barang tersebut tidak langsung sampai ke rumah pembeli. Ada beberapa tahapan yang harus dilalui, mulai dari aplikasi memproses pesanan, barang disiapkan dan dikemas, disortir berdasarkan kota tujuan, dikirim melalui ekspedisi, hingga akhirnya diantarkan oleh kurir ke alamat penerima. Jika terjadi masalah, misalnya barang terlambat atau rusak, maka kita dapat menelusuri di tahap mana masalah tersebut terjadi. Prinsip inilah yang juga diterapkan dalam OSI Model.' },
                    { tipe: 'gambar', url:pindahData, caption:'Penjelasan cara kerja OSI Layer' },
                    { tipe: 'paragraf', isi: 'Dalam proses pengiriman data, alur komunikasi dimulai dari Physical Layer menuju Application Layer di sisi pengirim. Sebaliknya, pada sisi penerima, data diproses dari Application Layer hingga kembali ke Physical Layer. Dengan demikian, setiap layer bekerja secara berurutan dan saling mendukung.' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/osi/physical"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar lapisan OSI Model'}
                soalCustom={[
                    {
                    pertanyaan: "Bagaimana proses server mengirim data?",
                    pilihanJawaban: ["Network Layer -> Data-Link Layer", "Application Layer -> Physical Layer", "Physical Layer -> Application Layer", "Presentation Layer -> Physical Layer"],
                    jawabanBenar: "Physical Layer -> Application Layer",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi perpindahan data server"
                    }
                ]}
                />
        </section>
    )
}

export default LayerOSI