import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';
const gambar1 = 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?semt=ais_hybrid&w=740&q=80'

const UrgensiDesainWeb = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Pengantar Desain Website',
                    konten: [
                    { tipe: 'paragraf', isi: 'Desain website sangat berpengaruh terhadap kesan pertama pengguna. Dalam hitungan detik, pengguna dapat memutuskan apakah akan melanjutkan menjelajah website atau meninggalkannya. Desain yang baik akan membuat pengguna merasa nyaman, percaya, dan tertarik untuk berinteraksi lebih lanjut.' },
                    { tipe: 'gambar', width:'md:w-3/4', url:gambar1, caption:'Desain website yang baik akan menarik audiens' },
                    { tipe: 'paragraf', isi: 'Selain itu, desain website membantu pengguna menemukan informasi dengan lebih cepat. Tata letak yang rapi, warna yang sesuai, dan teks yang mudah dibaca akan meningkatkan efektivitas website dalam menyampaikan pesan. Dengan kata lain, desain yang baik mendukung fungsi website agar dapat berjalan secara optimal.' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={false}
                showNextButton={true}
                nextPath="/mainPage/desainWebsite/elemenDesainWeb"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar desain website'}
                soalCustom={[
                    {
                    pertanyaan: "Apakah alasan utama pengguna meninggalkan website dalam waktu singkat?",
                    pilihanJawaban: ["Kecepatan internet pengguna", "Isi website yang sulit dipahami", "Website teratur dalam penyampaian informasi", "Warna website seimbang"],
                    jawabanBenar: "Isi website yang sulit dipahami",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                    }
                ]}
                />
        </section>
    )
}

export default UrgensiDesainWeb;