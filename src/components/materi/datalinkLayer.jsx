import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';
import dataLink from '../../assets/data-link.png'
import dataLink2 from '../../assets/data-link2.png'
import dataLinkMobile from '../../assets/data-link3.png'
import dataLink3 from '../../assets/datalink.png'

const DataLinkLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Data-Link Layer',
                    konten: [
                    { tipe: 'paragraf', isi: 'Data Link Layer berada satu tingkat di atas Physical Layer. Pada lapisan ini, sinyal mentah yang dikirimkan oleh Physical Layer mulai diorganisir menjadi frame, sehingga data dapat dikirim dan diterima dengan lebih andal antar perangkat yang terhubung langsung dalam satu jaringan lokal (LAN).' },
                    { tipe: 'gambar', width:"md:w-3/4", display:"hidden md:block", url: dataLink},
                    { tipe: 'gambar', width:"md:w-full", display:"block md:hidden", url: dataLinkMobile, caption: 'Ilustrasi pengubahan data ke bentuk frame' },
                    {
                        tipe: 'layout',
                        arah: 'col',
                        items:[
                            { tipe: 'gambar', width:"md:w-1/2 w-full", url: dataLink2, caption: 'ilustrasi penyebaran data menggunakan switch' },
                            { tipe: 'paragraf', width:"md:w-1/2 w-full", isi: 'Fungsi utama Data Link Layer meliputi pengalamatan fisik menggunakan MAC Address, pengendalian aliran data, serta pendeteksian kesalahan (error detection) menggunakan metode seperti CRC atau FCS. Layer ini juga mengatur kapan suatu perangkat boleh mengirimkan data agar tidak terjadi tabrakan data (collision).' },
                        ]
                    },
                    { tipe: 'paragraf', isi: 'Contoh protokol dan perangkat yang bekerja pada Data Link Layer antara lain Ethernet, PPP, dan Switch. Dalam analogi belanja online, Data Link Layer berperan seperti petugas pos lokal yang memastikan alamat rumah penerima sudah benar sebelum paket dikirim lebih jauh.' },
                    {
                        tipe: 'layout',
                        arah: 'col',
                        items:[
                            { tipe: 'gambar', width:"md:w-1/2 w-full", url: dataLink3, caption: 'ilustrasi framing data ke setiap perangkat dengan mac address berbeda' },
                            { tipe: 'paragraf', width:"md:w-1/2 w-full", isi: 'Data Link Layer berfungsi untuk mengatur pengiriman data antar perangkat yang berada dalam satu jaringan lokal (LAN). Pada lapisan ini, data dibungkus menjadi frame dan diberi alamat fisik berupa MAC Address yang bersifat unik pada setiap perangkat jaringan. Alamat MAC berbeda dengan IP Address karena bersifat tetap dan tertanam pada perangkat keras.' },
                        ]
                    },
                ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/osi/network"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar Data-Link Layer'}
                soalCustom={[
                    {
                    pertanyaan: "Perangkat yang berfungsi untuk menyebarkan sinyal secara wired ke berbagai client atau tujuan adalah?",
                    pilihanJawaban: ["router", "switch", "provider", "access point"],
                    jawabanBenar: "switch",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari perangkat di data-link layer"
                    }
                ]}
                />
        </section>
    )
}

export default DataLinkLayer