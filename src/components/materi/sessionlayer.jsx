import osiLayer from "../../assets/osi-layer.png";
import session from "../../assets/session.png";
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const SessionLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Session Layer',
                    konten: [
                    { tipe: 'paragraf', isi: 'Jika pada transport layer sebelumnya bertugas memastikan data dikirim sesuai dengan urutan dan lengkap, maka pada session layer bertugas untuk mengatur, menjaga, dan mengakhiri sesi komunikasi antar dua perangkat atau aplikasi' },
                    { tipe: 'gambar', url:session, caption:'Contoh proses Session Layer' },
                    { tipe: 'paragraf', isi: 'Fungsi Session Layer ini adalah membuka koneksi untuk komunikasi, menjaga koneksi selama proses pengiriman data, dan menutup koneksi setelah proses selesai. Untuk contoh lebih mudahnya membuka (establish) sesi adalah seperti proses login atau sign up website YouTUbe misalkan, lalu proses menjaga (maintain) koneksi adalah ketika melakukan like, komen, atau subscribe channel, lalu menutup (terminate) sesi adalah ketika logout pada website atau aplikasi.' },
                    { tipe: 'paragraf', isi: 'Beberapa protocol di layer ini antara lain adalah NetBIOs, PPTP, SIP dan RPC. Sebagai contoh salah satu protocol, SIP digunakan dalam panggilan suara/vido (VoIP)' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/presentationlayer"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar Session Layer'}
                soalCustom={[
                    {
                    pertanyaan: "Proses mana yang bekerja ketika melakukan komentar pada sebuah video di YouTube?",
                    pilihanJawaban: ["Establish process", "Terminate process", "Maintain Process", "Searching Process"],
                    jawabanBenar: "Maintain Process",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default SessionLayer