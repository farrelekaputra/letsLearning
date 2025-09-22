import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';

const Excel1 = () => {
    return(
      <section>
        <LogicMateri
              penjelasanMateri={{
                judulMateri: 'Pengenalan Website',
                konten: [
                  { tipe: 'paragraf', isi: 'Jaringan komputer merupakan dua atau lebih perangkat komputer yang berada satu wilayah dan saling terhubung satu sama lain. jaringan komputer ini berfungsi untuk sarana berkomunikasi antara satu perangkat dengan perangkat lainnya.' },
                  { tipe: 'gambar', url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Penggunaan website di berbagai perangkat.' },
                  { tipe: 'paragraf', isi: 'Kabinet virtual ini berisi berbagai genre yang dapat mengisi keseharian pengguna. Sebagai contoh pada genre entertaimen terdapat instagram dan tiktok dalam versi website, genre edukasi menyediakan wikipedia, dan ruang guru yang siap menemani kegiatan belajar mengajar, dan terdapat juga marketplace dimana pengguna dapat melihat dan membandingkan harga barang yang tersedia di internet' },
                  { tipe: 'paragraf', isi: 'Nah, pada pembelajaran kali ini kalian akan diarahkan dari sudut pandang pengembang website yang dibantu oleh jalan pintas bernama "framework", jadi mari kita mulai!' }
                ]
              }}
            />
            <Contohsoal
              modeExcel={true}
              singleSoal={false}
              showNextButton={true}
              nextPath="/mainPage/word1"
              tampilNama={false}
              JudulSoal={'Coba jawab soal dibawah'}
              soalCustom={[
                {
                  pertanyaan: "Dibawah ini, manakah website yang akan kalian gunakan untuk hiburan?",
                  pilihanJawaban: ["Wikipedia", "Duolingo", "Netflix","E-Samsat"],
                  jawabanBenar: "Netflix",
                  clueJawabanBenar: "Mantap mari lanjut ke materi selanjutnya",
                  clueJawabanSalah: "Hmm kurang tepat.. Coba deh tentang genre di Website"
                }
              ]}
            />
      </section>
    )
}

export default Excel1;