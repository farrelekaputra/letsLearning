import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';
import ilustrasiGrid from '../../assets/grid.png'
import ilustrasiResponsive from '../../assets/responsive.png'

const DataLinkLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Data-Link Layer',
                    konten: [
                    { tipe: 'paragraf', isi: 'Lapisan ini berada tepat di atas Physical Layer. Kalau di Physical Layer datanya masih berupa sinyal mentah, maka di Data Link Layer sinyal-sinyal itu mulai diubah jadi frame agar bisa dikirim dan diterima dengan benar antar perangkat yang terhubung langsung.' },
                    { tipe: 'gambar', width:"md:w-1/2", url: ilustrasiGrid, caption: 'Ilustrasi skala lebar grid' },
                    { tipe: 'paragraf', isi: 'Fungsi utama dari layer ini adalah memastikan pengiriman data bebas dari kesalahan (error-free) antar dua perangkat yang saling terhubung di jaringan yang sama. Selain itu, layer ini juga mengatur alamat fisik (MAC Address) dan mengontrol aliran data supaya tidak terjadi tabrakan data di jaringan. Sebagai contoh nih, layer ini itu sebagai tukang pos (komputer) yang bakal ngirim surat (data) dengan menentukan alamat rumah (mac address) tujuan.' },
                    { tipe: 'paragraf', isi: 'Contoh protokol atau perangkat di layer ini antara lain Ethernet, PPP (Point to Point Protocol), dan Switch. Switch misalnya, bekerja di Data Link Layer untuk meneruskan data ke perangkat tujuan berdasarkan MAC Address.' },
                    { tipe: 'gambar', width:"md:w-1/2", url: ilustrasiResponsive, caption: 'Perbedaan penataan (kiri: desktop), (kanan:hp)' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/newtorklayer"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar grid'}
                soalCustom={[
                    {
                    pertanyaan: "Jika website akan dibuat dengan lebar setengah layar, maka berapakah ukuran grid yang tepat?",
                    pilihanJawaban: ["col-8", "col-12", "col-4", "col-6"],
                    jawabanBenar: "col-6",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi soal excel"
                    }
                ]}
                />
        </section>
    )
}

export default DataLinkLayer