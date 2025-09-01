import btn from '../../assets/btn.png'
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const ButtonBootstrap = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Warna Button',
                    konten: [
                    { tipe: 'paragraf', isi: 'Button adalah salah satu komponen paling sering digunakan di sebuah website. Biasanya tombol digunakan untuk aksi tertentu, seperti submit form, login, download file, atau mengarahkan pengguna ke halaman lain. Bootstrap menyediakan class siap pakai untuk membuat tombol dengan berbagai gaya tanpa harus menulis CSS manual. Kamu hanya perlu menambahkan class btn diikuti dengan class warna tertentu.' },
                    { tipe: 'gambar', width:"md:w-1/2", url: btn, caption: 'Membuat tombol menggunakan bootstrap' },
                    { tipe: 'paragraf', isi: 'Button dalam sebuah website memiliki beberapa fungsi penting. Pertama, navigasi, yaitu mengarahkan pengguna ke halaman lain, misalnya tombol Home atau Detail. Kedua, form action, yang berfungsi untuk mengirim data dari form, seperti tombol Login atau Submit. Ketiga, trigger event, yaitu tombol yang memicu aksi tertentu, misalnya memunculkan modal, membuka menu dropdown, atau menjalankan fungsi JavaScript lainnya.' }
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={true}
                showNextButton={true}
                nextPath="/"
                popupFinish={true}
                pesanPopup='Selamat! kamu telah menyelesaikan materi ini! Silahkan selanjutnya pilih simulasi ujian! Semangat!'
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar bootstrap'}
                soalCustom={[
                    {
                    pertanyaan: "Jika ingin menghapus item (darurat), sebaiknya menggunakan jenis button?",
                    pilihanJawaban: ["btn-danger", "btn-primary", "btn-success", "btn-info"],
                    jawabanBenar: "btn-danger",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi soal excel"
                    }
                ]}
                />
        </section>
    )
}

export default ButtonBootstrap