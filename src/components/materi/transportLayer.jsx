import osiLayer from "../../assets/osi-layer.png";
import Segment from "../../assets/segment.png";
import kurir from "../../assets/kurir.jpg";
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const TransportLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Transport Layer',
                    konten: [
                    { tipe: 'paragraf', isi: 'Lapisan ini berada diatas Network Layer. Nah, kalau Network Layer sudah memastikan data bisa melewati berbagai jaringan dan sampai ke IP Address tujuan, maka Transport Layer bertugas untuk mengatur bagaimana data itu dikirim dan diterima dengan aman, utuh, dan berurutan.' },
                    { tipe: 'paragraf', isi: 'Fungsi utama dari Layer ini adalah untuk ememcah data menjadi berbagai segmen kecil agar bisa dikirim bertahap untuk menjaga keandalan saat pengiriman data, dan mengatur aliran data. Disini tugas network layer itu sama persis seperti kurir yang memastikan paket sampai di tujuan dengan aman' },
                    { tipe: 'gambar', url:Segment, caption:'Proses pengolahan data menjadi segment' },
                    { tipe: 'paragraf', isi: 'Dari yang sudah dijelaskan sebelumnya, beberapa layer di OSI Layer itu dapat di misalkan seperti berbagai pihak yang terlibat di kegiatan belanja online seperti e Commerce, ekspedisi, kurir, dan penerima. Jadi untuk memudahkan identifikasi di layer mana kah data yang dikirim atau diterima bermasalah. Untuk cara kerja nya saat mengirimkan data dimulai dari Physical layer menuju Application Layer, sebaliknya untuk proses penerimaan data dimulai dari layer paling Application layer dan diteruskan hingga ke physical layer.' },
                    { tipe: 'gambar', url:kurir, caption:'Contoh kurir sebagai pengirim data' },
                    { tipe: 'paragraf', isi: 'Di Transport Layer juga terdapat dua protocol penting untuk proses pengiriman data, yaitu TCP dan UDP. TCP merupakan protocol yang berfungsi untuk memastikan setiap data dikirim secara berurutan dan lengkap, sedangkan UDP merupakan protocol pengiriman data dengan lebih cepat tanpa jaminan data sampai dengan utuh.' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/sessionlayer"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar Transport Layer'}
                soalCustom={[
                    {
                    pertanyaan: "Apa fungsi utama Transport Layer?",
                    pilihanJawaban: ["Menentukan alamat IP tujuan data", "Menentukan jalur tercepat", "Mengubah data menjadi sinyal listrik", "Memastikan data sampai ke tujuan dengan utuh dan aman"],
                    jawabanBenar: "Memastikan data sampai ke tujuan dengan utuh dan aman",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi fungsi transport layer"
                    }
                ]}
                />
        </section>
    )
}

export default TransportLayer