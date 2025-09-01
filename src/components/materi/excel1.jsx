import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';

const Excel1 = () => {
    return(
      <section>
        <LogicMateri
              penjelasanMateri={{
                judulMateri: 'Pengenalan Microsoft Excel',
                konten: [
                  { tipe: 'paragraf', isi: 'Microsoft Excel adalah salah satu aplikasi yang paling sering digunakan dalam dunia kerja maupun pendidikan. Dengan Excel, kita bisa mengolah data secara cepat dan akurat, mulai dari penjumlahan sederhana sampai analisis data yang lebih kompleks. Pada materi ini, kita akan belajar bagaimana menggunakan rumus dasar di Excel, khususnya rumus COUNTIF, yaitu rumus untuk menghitung jumlah data berdasarkan kondisi tertentu. Misalnya, kita dapat menghitung berapa banyak siswa yang nilainya di atas 75 atau berapa banyak barang dalam daftar belanja yang termasuk kategori makanan. Dengan memahami dasar ini, kita bisa membuat pengolahan data menjadi lebih efisien dan praktis' },
                  { tipe: 'gambar', url: 'https://www.teachermagazine.com/assets/images/teacher/The_state_of_the_teaching_profession.jpg', caption: 'caption' },
                  { tipe: 'paragraf', isi: 'Selain itu, penggunaan rumus COUNTIF sangat membantu ketika kita berhadapan dengan data dalam jumlah besar. Bayangkan jika kita harus menghitung secara manual nilai siswa satu per satu atau jumlah barang dengan kriteria tertentu, tentu akan memakan banyak waktu. Dengan COUNTIF, kita cukup menuliskan rumus sekali saja, lalu Excel akan otomatis menghitung sesuai kondisi yang kita tentukan. Hal ini membuat pekerjaan menjadi lebih cepat, rapi, dan meminimalkan kesalahan.' },
                  { tipe: 'paragraf', isi: 'Paragraf penutup materi' }
                ]
              }}
            />
            <Contohsoal
              modeExcel={true}
              singleSoal={true}
              showNextButton={true}
              nextPath="/mainPage/word1"
              tampilNama={false}
              JudulSoal={'Coba jawab soal dibawah'}
              soalCustom={[
                {
                  pertanyaan: "apakah kamu sudah memahami benar?",
                  pilihanJawaban: ["ya saya sudah paham", "sebentar saya perlu memahami lebih lanjut"],
                  jawabanBenar: "ya saya sudah paham",
                  clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                  clueJawabanSalah: "coba deh pelajari lagi soal excel"
                }
              ]}
            />
      </section>
    )
}

export default Excel1;