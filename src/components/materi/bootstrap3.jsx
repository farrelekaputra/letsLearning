import LogicMateri from '../materi1';
import Contohsoal from '../loopingsoal';
import ilustrasiGrid from '../../assets/grid.png'
import ilustrasiResponsive from '../../assets/responsive.png'

const GridBootstrap = () => {
    return(
        <section>
            <LogicMateri
                penjelasanMateri={{
                    judulMateri: 'Grid dan Responsive',
                    konten: [
                    { tipe: 'paragraf', isi: 'Grid system pada Bootstrap adalah cara untuk mengatur layout atau tata letak website agar lebih terstruktur. Bayangkan kamu membuat halaman website yang punya beberapa kolom: bagian kiri untuk menu, bagian tengah untuk konten utama, dan bagian kanan untuk iklan atau info tambahan. Dengan Bootstrap, kamu tidak perlu menulis CSS manual untuk mengatur lebar kolom tersebut. Bootstrap sudah menyediakan grid system berbasis 12 kolom, yang bisa dibagi sesuai kebutuhan.' },
                    { tipe: 'gambar', width:"md:w-1/2", url: ilustrasiGrid, caption: 'Ilustrasi skala lebar grid' },
                    { tipe: 'paragraf', isi: 'Sedangkan, Responsive adalah kemampuan website untuk menyesuaikan tampilan sesuai ukuran layar perangkat (desktop, tablet, atau smartphone). Kalau grid mengatur “bagaimana kolom dibagi”, maka responsive mengatur “bagaimana kolom itu berubah” saat layar mengecil atau membesar.' },
                    { tipe: 'gambar', width:"md:w-1/2", url: ilustrasiResponsive, caption: 'Perbedaan penataan (kiri: desktop), (kanan:hp)' },
                    { tipe: 'paragraf', isi: 'jadi, bisa ditarik kesimpulan tentang responsive, bahwa responsive adalah cara website untuk membedakan penataan website antara berbagai perangkat. Analoginya adalah jika pada rak yang lebar maka barang akan disimpan kesamping, sedangkan pada rak tinggi barang akan disimpan menumpuk keatas.' },
                    ]
                }}
                />
                <Contohsoal
                modeExcel={true}
                singleSoal={true}
                showNextButton={true}
                nextPath="/mainPage/buttonBootstrap"
                tampilNama={false}
                JudulSoal={'Pertanyaan seputar grid'}
                soalCustom={[
                    {
                    pertanyaan: "Jika website akan dibuat dengan lebar setengah layar, maka berapakah ukuran grid yang tepat?",
                    pilihanJawaban: ["col-8", "col-12", "col-4", "col-6"],
                    jawabanBenar: "col-6",
                    clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                    clueJawabanSalah: "coba deh pelajari lagi soal excel"
                    }
                ]}
                />
        </section>
    )
}

export default GridBootstrap