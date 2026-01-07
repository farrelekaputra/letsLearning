import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';

const gambarfigma = 'https://miro.medium.com/v2/1*LXoai_zWe5y8UhqeEztasA.png'
const gambaradobe = 'https://helpx-prod.scene7.com/is/image/HelpxProd/Workspace--Windows---with-XD-logo?$png$&jpegSize=200&wid=1400'

const SoftwareDesainWeb = () => {
    return(
         <section>
                    <LogicMateri
                        penjelasanMateri={{
                            judulMateri: 'Pengantar Desain Website',
                            konten: [
                            { tipe: 'paragraf', isi: 'Dalam proses desain website, terdapat beberapa software yang umum digunakan untuk membantu perancangan tampilan sebelum diimplementasikan ke dalam kode. Beberapa software tersebut antara lain :' },
                            { tipe: 'subHeading', isi: 'Figma' },
                            { tipe: 'gambar', width:'md:w-3/4', url:gambarfigma, caption:'Figma memiliki desain yang ramah pengguna awal dan komunitas yang saling mendukung' },
                            { tipe: 'subHeading', isi: 'Adobe XD' },
                            { tipe: 'gambar', width:'md:w-3/4', url:gambaradobe, caption:'Adobe menawarkan fitur yang bersaing dengan figma dan ekosistem yang fleksibel' },
                            ]
                        }}
                        />
                        <Contohsoal
                        modeExcel={true}
                        singleSoal={false}
                        showNextButton={true}
                        nextPath="/daftarMateri"
                        tampilNama={false}
                        JudulSoal={'Pertanyaan seputar software desain web'}
                        soalCustom={[
                            {
                            pertanyaan: "Mana diabwah ini software yang Umumnya Digunakan dalam Desain Website?",
                            pilihanJawaban: ["Figma", "Adobe Lightroom", "Ms. Word", "Visual Studio Code"],
                            jawabanBenar: "Figma",
                            clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                            clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                            }
                        ]}
                        />
                </section>
    )
}

export default SoftwareDesainWeb;