import btn from '../../assets/btn.png'
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';
import routing from '../../assets/routing.png'

const NetworkLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Warna Button',
                    konten: [
                    { tipe: 'paragraf', isi: 'Lapisan ini berada di atas Data Link Layer. Kalau Data Link ngatur komunikasi antar perangkat yang langsung terhubung (misalnya laptop ke router), maka Network Layer bertugas untuk menentukan jalur perjalanan data dari pengirim ke penerima yang berbeda jaringan.' },
                    { tipe: 'paragraf', isi: 'Fungsi utama dari layer ini adalah mengatur alamat logis (IP Address) dan menentukan rute terbaik (routing) agar data bisa sampai ke tujuan walaupun harus melewati banyak perangkat jaringan seperti router. Layer ini juga memastikan setiap potongan data punya alamat pengirim dan penerima yang benar.' },
                    { tipe: 'gambar', width:"md:w-full", url: routing, caption: 'Router merupakan contoh perangkat yang berada di Network Layer' },
                    { tipe: 'paragraf', isi: 'Kalau pakai contoh e-commerce tadi, Network Layer ini seperti kantor pos pusat atau jasa ekspedisi antar kota. Setelah paket dibungkus dan alamat rumah dicek oleh Data Link Layer (tukang pos lokal), sekarang giliran ekspedisi menentukan rute pengiriman antar kota atau antar negara. Mereka pilih jalur paling efisien supaya paket sampai ke penerima tanpa nyasar.' }
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/transportlayer"
                pesanPopup='Selamat! kamu telah menyelesaikan materi ini! Silahkan selanjutnya pilih simulasi ujian! Semangat!'
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar bootstrap'}
                soalCustom={[
                    {
                    pertanyaan: "Proses perjalanan data mencari rute tercepat disebut?",
                    pilihanJawaban: ["routing", "subnetting", "addressing", "coding"],
                    jawabanBenar: "routing",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari tentang routing"
                    }
                ]}
                />
        </section>
    )
}

export default NetworkLayer