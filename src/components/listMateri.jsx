import Navbar from '../components/navbar';
import {Link} from 'react-router-dom';

const SemuaMateri = ({KomponenMateri = []}) => {
    return(
        <section className='flex flex-col text-gray-800'>
            <Navbar menuEnabled={false}/>
            <div className='isiKonten flex flex-col pt-24 p-8 md:px-20 gap-4'>
                <h1 className='text-2xl font-semibold'>Mau pilih materi mana nih?</h1>
                <section className="deretan flex justify-start gap-8">
                {KomponenMateri.map(
                    ({gambar, tujuanmateri, judul, altGambar}, index) => {
                        return(
                            <Link to={tujuanmateri} key={index} className='semuaMateri p-4 flex flex-col justify-center items-center gap-2 rounded-xl border-2 border-gray-300 hover:border-blue-500'>
                                <img src={gambar} className='w-40' alt={altGambar} />
                                <div className="text-section">
                                    <h2 className='text-xl'>{judul}</h2>
                                </div>
                            </Link>
                        )
                    }
                )}
                </section>
            </div>
        </section>
    )
}

const HalamanMateri = () => {
    return(
        <SemuaMateri
            KomponenMateri={[
                {
                    gambar:"https://www.tokozoom.com/assets/img/artikel/cc298eaa95d0f7d64b1aa0f705b08800.jpg",
                    altGambar:"ini contoh gambar",
                    tujuanmateri:"/mainPage/osiLayer",
                    judul:"Dasar Jaringan Komputer"
                },
                {
                    gambar:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    altGambar:"pemrograman",
                    tujuanmateri:"",
                    judul:"Pengembangan Website"
                },
                {
                    gambar:"https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    altGambar:"Illustrasi",
                    tujuanmateri:"",
                    judul:"Desain Figma"
                }
        ]}/>
    )
}

export default HalamanMateri