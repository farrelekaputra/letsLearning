import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';
import olshop from '../../assets/belanja-online.jpg'

const Jaringan = () => {
    return(
      <section>
        <LogicMateri
              penjelasanMateri={{
                judulMateri: 'Lapisan OSI Model',
                konten: [
                  { tipe: 'paragraf', isi: 'OSI Model adalah sebuah model/konsep yang menjelaskan bagaimana data bisa dikirim dari satu komputer ke komputer lain. Dengan adanya OSI Model, proses pengiriman data menjadi lebih teratur, Langkah-langkahnya jelas, dan lebih mudah untuk menemukan masalah jika terjadi gangguan. Hal ini karena di setiap layer memiliki fungsi yang berbeda-beda sehingga kita bisa tahu masalahnya ada di layer mana. ' },
                  { tipe: 'gambar', url: olshop, caption: 'Analogi OSI Model adalah seperti belanja online' },
                  { tipe: 'paragraf', isi: 'Sebagai contoh, OSI Model itu seperti proses beli barang online. Kalau kalian pesan barang secara online, barang itu tidak mungkin langsung tiba begitu saja di rumah kalian. Ada beberapa alur atau tahapan yang dilewati paket itu, mulai dari pihak aplikasi yang memproses barang yang udah kalian check out, berlanjut barang dipisahin sesuai kota penerima, dan terakhir barang dikrim ke kota masing-masing. Jadi misal barang kalian ada masalah kalian bisa tau kira-kira dimana letak masalahnya.' },
                  { tipe: 'paragraf', isi: 'Nah, pada pembelajaran kali ini kalian mengenal lapisan di setiap OSI Model yang seperti petugas-petugas dalam kegiatan belanja online, jadi mari kita mulai!' }
                ]
              }}
            />
            <Contohsoal
              modeExcel={true}
              singleSoal={false}
              showNextButton={true}
              nextPath="/mainPage/pengertianLayer"
              tampilNama={false}
              JudulSoal={'Coba jawab soal dibawah'}
              soalCustom={[
                {
                  pertanyaan: "Dalam konsep OSI Model apa yang dikirimkan dari satu komputer ke komputer lainnya?",
                  pilihanJawaban: ["Data", "Paket", "Barang", "Kabel"],
                  jawabanBenar: "Data",
                  clueJawabanBenar: "Mantap mari lanjut ke materi selanjutnya",
                  clueJawabanSalah: "Hmm kurang tepat.. Coba deh tentang pengertian OSI Model"
                }
              ]}
            />
      </section>
    )
}

export default Jaringan;