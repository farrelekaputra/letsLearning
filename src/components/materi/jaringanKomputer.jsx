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
                  { 
                    tipe: 'paragraf', 
                    isi: 'OSI Model (Open System Interconnection) merupakan sebuah model konseptual yang digunakan sebagai acuan untuk menjelaskan bagaimana proses komunikasi dan pengiriman data terjadi dari satu komputer ke komputer lain melalui jaringan. Model ini membagi proses komunikasi data menjadi beberapa lapisan (layer) yang masing-masing memiliki fungsi yang berbeda. Dengan adanya pembagian ini, proses pengiriman data menjadi lebih terstruktur, langkah-langkahnya jelas, serta memudahkan proses analisis dan penelusuran kesalahan (troubleshooting) apabila terjadi gangguan pada jaringan.' 
                  },
                  { 
                    tipe: 'layout',
                    arah: 'col',
                    items: [
                    {
                      tipe: 'gambar', url: olshop, 
                      caption: 'Analogi OSI Model adalah seperti belanja online' 
                    },
                    { 
                      tipe: 'paragraf', 
                      isi: 'Sebagai contoh, OSI Model itu seperti proses beli barang online. Kalau kalian pesan barang secara online, barang itu tidak mungkin langsung tiba begitu saja di rumah kalian. Ada beberapa alur atau tahapan yang dilewati paket itu, mulai dari pihak aplikasi yang memproses barang yang udah kalian check out, berlanjut barang dipisahin sesuai kota penerima, dan terakhir barang dikrim ke kota masing-masing. Jadi misal barang kalian ada masalah kalian bisa tau kira-kira dimana letak masalahnya. Jadi, ayo mulai pembelajaran!' 
                    }]    
                  },
                  { 
                    tipe: 'paragraf', 
                    isi: 'Secara umum, OSI Model terdiri dari 7 lapisan, di mana lapisan bagian atas (Application, Presentation, dan Session) berfokus pada layanan aplikasi kepada pengguna, sedangkan lapisan bagian bawah (Transport, Network, Data Link, dan Physical) berorientasi pada proses pengiriman data dari satu perangkat ke perangkat lain secara fisik dan logis.' 
                  }
                ]
              }}
            />
            <Contohsoal
              modeExcel={true}
              singleSoal={false}
              showNextButton={true}
              nextPath="/mainPage/osi/pengertian"
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