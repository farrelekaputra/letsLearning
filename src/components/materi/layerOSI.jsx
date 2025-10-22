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
                    { tipe: 'paragraf', isi: 'Jika sebelumnya kita sudah mengetahui apa itu OSI Model dan permisalannya, sekarang kita mencoba mengetahui cara kerja osi layer itu membagi urutan pengiriman data menjadi beberapa tahapan, supaya prosesnya teratur. ' },
                    { tipe: 'gambar', url:osiLayer, caption:'Penjelasan cara kerja OSI Layer' },
                    { tipe: 'paragraf', isi: 'Dari yang sudah dijelaskan sebelumnya, beberapa layer di OSI Layer itu dapat di misalkan seperti berbagai pihak yang terlibat di kegiatan belanja online seperti e Commerce, ekspedisi, kurir, dan penerima. Jadi untuk memudahkan identifikasi di layer mana kah data yang dikirim atau diterima bermasalah. Untuk cara kerja nya saat mengirimkan data dimulai dari Physical layer menuju Application Layer, sebaliknya untuk proses penerimaan data dimulai dari layer paling Application layer dan diteruskan hingga ke physical layer.' },
                    { tipe: 'gambar', url:pindahData, caption:'Penjelasan cara kerja OSI Layer' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/physicalLayer"
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