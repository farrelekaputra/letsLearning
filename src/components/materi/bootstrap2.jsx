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
                    { tipe: 'paragraf', isi: 'Physical Layer merupakan lapisan paling dasar dalam OSI Model. Lapisan ini berhubungan langsung dengan perangkat keras dan media fisik yang digunakan untuk mengirimkan data. Fungsi utama Physical Layer adalah mengubah data digital menjadi sinyal fisik berupa sinyal listrik, cahaya, atau gelombang radio agar dapat ditransmisikan melalui media jaringan.' },
                    {
                        tipe: 'layout',
                        arah: 'col',
                        items: [
                            { tipe: 'gambar', width: 'w-full md:w-3/4', url: layer1, caption: 'Contoh perangkat yang terdapat di Physical Layer' },
                            { tipe: 'paragraf', isi: 'Contoh media dan perangkat pada Physical Layer antara lain kabel LAN (UTP), kabel coaxial, fiber optik, serta media nirkabel seperti sinyal WiFi. Selain itu, Physical Layer juga mengatur spesifikasi teknis seperti bentuk konektor, pin, tegangan listrik, serta metode encoding sinyal. Dalam analogi belanja online, Physical Layer dapat diibaratkan sebagai pihak gudang atau e-commerce yang menyiapkan barang secara fisik agar siap dikirim ke tahap selanjutnya.' }
                        ]
                    },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/osi/dataLink"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar Physical Layer'}
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