import bootstrapGambar from "../../assets/bootstrap.png"
import layer1 from "../../assets/physical-layer.png"
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const PhysicalLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Physical Layer',
                    konten: [
                    { tipe: 'paragraf', isi: 'Sesuai dengan namanya, layer ini merupakan lapisan yang terdiri dari perangkat keras yang dapat langsung berinteraksi dengan user secara fisik, lapisan ini berada di paling dasar. Lapisan ini berfungsi buat mengubah data jadi sinyal listrik, cahaya, atau gelombang radio. Untuk contoh perangkat atau protocol di layer ini terdapat perangkat yang menghubungkan antara device baik itu secara kabel atau nirkabel, untuk kabel contohnya terdapat LAN, Coaxial, dan Fiber Optik' },
                    { tipe: 'gambar', url: layer1, caption: 'Contoh perangkat yang terdapat di Physical Layer' },
                    { tipe: 'paragraf', isi: 'Nah, kalau pakai permisalan sebelumnya physical layer ini seperti pihak e commerce yang menyiapkan setiap pesanan yang di request oleh pembeli dan siap dikirimkan ke ekspedisi (layer selanjutnya).' }
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/DataLink"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar tipografi'}
                soalCustom={[
                    {
                    pertanyaan: "Diantara perangkat ini, mana kah yang termasuk dalam physical layer?",
                    pilihanJawaban: ["Kabel", "Software", "Email", "Chrome"],
                    jawabanBenar: "Kabel",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi soal perangkat physical layer"
                    }
                ]}
                />
        </section>
    )
}

export default PhysicalLayer