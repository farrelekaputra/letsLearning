import bootstrapGambar from "../../assets/bootstrap.png"
import htmlGambar from "../../assets/native.png"
import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';

const MulaiWord = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Pengantar Bootstrap',
                    konten: [
                    { tipe: 'paragraf', isi: 'Bootstrap adalah framework front-end yang sangat populer digunakan untuk membuat tampilan website. Framework ini berisi kumpulan kode siap pakai yang terdiri dari CSS, JavaScript, dan berbagai komponen UI. Dengan bootstrap juga, pembuatan website terasa seperti menggunakan jalan pintas dimana bootstrap dapat mempersingkat kode css mednjadi lebih sederhana.' },
                    { tipe: 'gambar', width:"md:w-1/2", url: htmlGambar, caption: 'Membuat tombol menggunakan html native' },
                    { tipe: 'gambar', width:"md:w-1/2", url: bootstrapGambar, caption: 'Membuat tombol menggunakan bootstrap' },
                    { tipe: 'paragraf', isi: 'Mulai halaman ini dan 3 halaman kedepan, kita akan mulai memahami beberapa atribut yang sering digunakan pada bootstrap seperti tipografi, sistem grid, dan button' }
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={true}
                showNextButton={true}
                nextPath="/mainPage/headingBootstrap"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar bootstrap'}
                soalCustom={[
                    {
                    pertanyaan: "Bootstrap terdiri dari kumpulan apa saja?",
                    pilihanJawaban: ["HTML, PHP, dan Python", "CSS, Javascript, dan komponen UI", "MySQL, MongoDB, dan PostgreSQL", "Photoshop dan CorelDraw"],
                    jawabanBenar: "CSS, Javascript, dan komponen UI",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi soal excel"
                    }
                ]}
                />
        </section>
    )
}

export default MulaiWord