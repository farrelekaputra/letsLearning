import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';

const MulaiWord = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Sip udah beres',
                    konten: [
                    { tipe: 'paragraf', isi: 'bab1' },
                    { tipe: 'gambar', url: 'contoh gambar' },
                    { tipe: 'paragraf', isi: 'https://youtube.com' },
                    { tipe: 'paragraf', isi: 'ini bab 2' }
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                showNextButton={true}
                nextPath="/mainPage/word1"
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

export default MulaiWord