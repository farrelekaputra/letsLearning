import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';
import gambar1 from '../../assets/konsep js.png'

const MateriDatabase = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Menjalankan Logika Pada Website',
                    konten: [
                    { tipe: 'paragraf', isi: 'JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif dan dinamis. Jika HTML berfungsi sebagai struktur dan CSS sebagai tampilan, maka JavaScript bertugas mengatur perilaku website. Dengan JavaScript, website tidak hanya menampilkan informasi, tetapi juga bisa merespons tindakan pengguna, seperti saat tombol diklik, data diisi, atau halaman dimuat.' },
                    {tipe:'layout', arah:'col',
                        items:[
                            { tipe: 'gambar', width:'w-full md:w-3/4', url:gambar1, caption:'Ilustrasi Javascript Sebagai Logika Website' },
                            { tipe: 'paragraf', isi: 'Dalam sebuah website, javascript tidak hanya menjalankan logika namun ada beberapa fungsi lain seperti membuat tombol untuk submit form, menampilkan pesan atau notifikasi, mengubah isi halaman tanpa perlu melakukan refresh, dan membuat animasi sederhana. Agar lebih mudah dipahami, pada website javascript berfungsi seperti otot dan otak untuk menggerakkan atau menjalankan logika dan respon.' },
                        ]
                    },
                    { tipe: 'paragraf', isi: 'JavaScript merupakan komponen penting dalam website modern karena berfungsi mengatur interaksi dan logika. Dengan memahami peran JavaScript sebagai otak dan otot website, siswa SMK diharapkan mampu membuat website yang tidak hanya rapi dan menarik, tetapi juga interaktif dan responsif.' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/daftarMateri"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar JavaScript'}
                soalCustom={[
                    {
                    pertanyaan: "Dalam pengembangan website, JavaScript berperan sebagai “otak dan otot” website. Apa fungsi utama JavaScript pada sebuah website?",
                    pilihanJawaban: ["Mengatur struktur dan susunan elemen website", "Mengatur warna, font, dan tampilan visual website", "Membuat website menjadi lebih interaktif", "Menyimpan data website di server"],
                    jawabanBenar: "Membuat website menjadi lebih interaktif",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default MateriDatabase;