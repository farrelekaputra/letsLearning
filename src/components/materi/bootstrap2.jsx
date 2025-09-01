import bootstrapGambar from "../../assets/bootstrap.png"
import htmlGambar from "../../assets/native.png"
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const HeadingBoostrap = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Tipografi',
                    konten: [
                    { tipe: 'paragraf', isi: 'Tipografi adalah cara menampilkan teks pada website agar terlihat rapi dan mudah dibaca. Bayangkan saat kamu membuat website, tentu kamu ingin judulnya terlihat menonjol, isi teksnya jelas, dan keterangan tambahannya tidak mengganggu tampilan utama. Bootstrap sudah menyediakan berbagai class bawaan untuk mengatur ukuran, posisi, warna, dan gaya teks tanpa perlu menulis kode CSS dari awal. Dengan begitu, kamu tidak perlu repot menulis banyak aturan CSS hanya untuk membuat teks lebih menarik.' },
                    { tipe: 'paragraf', isi: 'Pada bootstrap ada beberapa atribut teks seperti dibawah'},
                    { tipe: 'paragraf', isi: '<h1 class="text-4xl">Class="h1"</h1> <h2 class="text-3xl">Class="h2"</h2> <h2 class="text-2xl">class="h3"</h2> <p class="font-bold">fw-bold</p> <p class="italic">fts-italic</p> <p class="underline">text-decoration-underline</p>'},
                    { tipe: 'paragraf', isi: 'Sebagai catatan, semua atribut yang digunakan dalam bootstrap peletakannya ada didalam class, baik itu div, span, atau atribut lainnya.' }
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={true}
                showNextButton={true}
                nextPath="/mainPage/gridBootstrap"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar tipografi'}
                soalCustom={[
                    {
                    pertanyaan: "Jika menemukan istilah asing pada sebuah website, mana yang sebaiknya digunakan?",
                    pilihanJawaban: ["Italic", "Underline", "Bold", "Heading"],
                    jawabanBenar: "Italic",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi soal excel"
                    }
                ]}
                />
        </section>
    )
}

export default HeadingBoostrap