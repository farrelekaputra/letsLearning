import applayerIlustrasi from "../../assets/app layer.png";
import enkripsi from "../../assets/enkripsi.png";
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const ApplicationLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Application Layer',
                    konten: [
                    { tipe: 'paragraf', isi: 'Layer atau lapisan yang menyediakan kebutuhan antarmuka antara pengguna dan jaringan. Semua aplikasi atau software yang sering kalian gunakan untuk mengirim data seperti browser, WhatsApp, dll bekerja di layer ini' },
                    { tipe: 'paragraf', isi: 'FUngsi layer ini adalah menyediakan layanan jaringan untuk aplikasi pengguna seperti HTTP, SMTP, FTP, DNS, selain itu layer ini berfungsi untuk menyiapkan data agar dapat dikirim melalui layer yang berada dibawahnya, dan mengatur sesi komunikasi antar aplikasi.' },
                    { tipe: 'gambar', url:applayerIlustrasi, caption:'Ilustrasi cara kerja proses enkripsi' },
                    { tipe: 'paragraf', isi: 'Contoh nya adalah ketika mengirim pesan lewat WhatsApp, disinilah pesan yang telah diketik berubah jadi format teks digital dan siap dikirimkan ke layer yang berada dibawahnya.' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                popupFinish={true}
                pesanPopup="Selamat! kamu telah menyelesaikan materi ini! gass langsung aja cobain simulasi ujian"
                nextPath="/mainPage/applicationlayer"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar Application Layer'}
                soalCustom={[
                    {
                    pertanyaan: "Ketika kalian megnirim pesan lewat whatsApp layer apa yang pertama menanggapi nya?",
                    pilihanJawaban: ["Physical Layer", "Network Layer", "Session Layer", "Application Layer"],
                    jawabanBenar: "Application Layer",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default ApplicationLayer