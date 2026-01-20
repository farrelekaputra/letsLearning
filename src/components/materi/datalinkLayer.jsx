import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';
import dataLink from '../../assets/data-link.png'
import dataLink2 from '../../assets/data-link2.png'

const DataLinkLayer = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Data-Link Layer',
                    konten: [
                    { tipe: 'paragraf', isi: 'Data Link Layer berada satu tingkat di atas Physical Layer. Pada lapisan ini, sinyal mentah yang dikirimkan oleh Physical Layer mulai diorganisir menjadi frame, sehingga data dapat dikirim dan diterima dengan lebih andal antar perangkat yang terhubung langsung dalam satu jaringan lokal (LAN).' },
                    { tipe: 'gambar', width:"md:w-3/4", url: dataLink, caption: 'Ilustrasi pengubahan data ke bentuk frame' },
                    {
                        tipe: 'layout',
                        arah: 'col',
                        items:[

                            { tipe: 'gambar', width:"md:w-full", url: dataLink2, caption: 'ilustrasi penyebaran data menggunakan switch' },
                            { tipe: 'paragraf', isi: 'Fungsi utama Data Link Layer meliputi pengalamatan fisik menggunakan MAC Address, pengendalian aliran data, serta pendeteksian kesalahan (error detection) menggunakan metode seperti CRC atau FCS. Layer ini juga mengatur kapan suatu perangkat boleh mengirimkan data agar tidak terjadi tabrakan data (collision).' },
                        ]
                    },
                    { tipe: 'paragraf', isi: 'Contoh protokol dan perangkat yang bekerja pada Data Link Layer antara lain Ethernet, PPP, dan Switch. Dalam analogi belanja online, Data Link Layer berperan seperti petugas pos lokal yang memastikan alamat rumah penerima sudah benar sebelum paket dikirim lebih jauh.' },
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