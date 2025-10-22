import osiLayer from "../../assets/osi-layer.png";
import enkripsi from "../../assets/enkripsi.png";
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const PresentationLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Session Layer',
                    konten: [
                    { tipe: 'paragraf', isi: 'Presentation Layer berada satu layer diatas Session Layer. Layer ini bertugas untuk mengubah data kedalam format yang bisa dipahami oleh kedua belah perangkat atau software. Layer ini berfungsi utnuk menerjemahkan format data agar bisa saling mengerti, sebagai contoh ASCII (bahasa komputer) ke bentuk Unicode, atau dari JPEG ke bitmap, selain itu layer ini bertugas melakukan kompresi data agar peroses pengirimannya menjadi lebih cepat, dan melakukan enkripsi atau deskripsi data agar data yang dikriim tetap aman dari penyadapan.' },
                    { tipe: 'gambar', url:enkripsi, caption:'Ilustrasi cara kerja proses enkripsi' },
                    { tipe: 'paragraf', isi: 'Contoh nyata nya adalah ketika mengirim gambar di WhatsApp, maka teks atau gambar tersebut di enkripsi oleh layer ini agar pihak server tidak mengetahui gambar aslinya, lalu ketika sampai di penerima di deskripsi lagi menjadi bentuk .JPEG' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/applicationlayer"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar Presentation Layer'}
                soalCustom={[
                    {
                    pertanyaan: "Apa itu enkripsi data?",
                    pilihanJawaban: ["Proses mengamankan data", "Proses penerjemahan data", "Proses menyimpan data", "Proses mencari data"],
                    jawabanBenar: "Proses mengamankan data",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default PresentationLayer