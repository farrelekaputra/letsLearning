import LogicMateri from '../materi1'
import UseLogicSoal from '../logikasoal';
import Contohsoal from '../loopingsoal';
const gambarwarna = 'https://media.geeksforgeeks.org/wp-content/uploads/20240604174358/color-harmony.webp'
const gambarfont = 'https://designoholic.com/wp-content/uploads/2023/05/63db562941a1ee82b744b6b1_X-l4DrkYyL0PwAPDmLc2yhxAhpsBnLjD-53K9egGZpoaLDAcw3BZdQe3yUZpcC90v2pAw1vh-t6ueeFf4ZP-5WwIpa6kNXh7G86Z6UNwJ2e8tClcVTrk2uHx_rkpQYviut7WPJ8xgLOV283mjP1aX-8.png'
const gambarlayout = 'http://img.freepik.com/premium-psd/architecture-interior-website-design-template_200778-22.jpg?semt=ais_hybrid&w=740&q=80'

const ElemenDesainWeb = () => {
    return(
                <section>
                    <LogicMateri
                        penjelasanMateri={{
                            judulMateri: 'Komponen Desain Website',
                            konten: [
                            { tipe: 'paragraf', isi: 'Dalam desain sendiri terdiri dari beberapa komponen untuk menunjang agar website bisa tetap kompleks, namun di sisi lain kombinasi dari komponen yang tidak tepat dapat menimbulkan kesan berantakan dan membuat audiens bingung terhadap isi atau informasi yang disampaikan dari website tersebut. Dibawah ini adalah beberapa komponen desain website yang sering digunakan oleh desainer website' },
                            { tipe: 'subHeading', isi: 'Warna' },
                            { tipe:'layout', arah:'col',
                                items:[
                                    { tipe: 'gambar', width:'w-full md:w-3/4', url:gambarwarna, caption:'contoh pemilihan warna' },
                                    { tipe: 'paragraf', isi: 'Warna digunakan untuk menarik perhatian pengguna sejak pertama kali membuka website. Pemilihan warna yang tepat dapat membangun suasana tertentu, seperti kesan profesional, ceria, atau formal. Selain itu, warna juga berfungsi untuk memperkuat identitas website, misalnya dengan menggunakan warna khas sekolah, perusahaan, atau brand tertentu. Penggunaan warna yang berlebihan dapat membuat tampilan website terlihat terlalu ramai dan melelahkan mata.' },
                                ]
                            },
                            { tipe: 'subHeading', isi: 'Tipografi' },
                            {tipe:'layout', arah:'col',
                                items:[
                                    { tipe: 'gambar', width:'w-full md:w-3/4', url:gambarfont, caption:'contoh jenis huruf' },
                                    { tipe: 'paragraf', isi: 'Tipografi berkaitan dengan pemilihan jenis huruf, ukuran huruf, dan jarak antar teks. Tipografi yang baik akan membuat teks mudah dibaca dan nyaman dilihat dalam waktu lama. Pemilihan font yang terlalu kecil, terlalu tipis, atau terlalu dekoratif dapat menyulitkan pengguna dalam membaca informasi. Oleh karena itu, tipografi harus disesuaikan dengan tujuan dan target pengguna website.' },
                                ]
                            },
                            { tipe: 'subHeading', isi: 'Gambar' },
                            { tipe: 'paragraf', isi: 'Gambar dan ikon berfungsi sebagai pendukung informasi dan memperjelas konten yang disampaikan. Penggunaan gambar yang relevan dapat membantu pengguna lebih cepat memahami isi website. Ikon juga mempermudah navigasi karena dapat mewakili fungsi tertentu secara visual. Namun, gambar dan ikon harus digunakan secara tepat dan tidak berlebihan agar tidak mengganggu fokus pengguna.' },
                            { tipe: 'subHeading', isi: 'Layout' },
                            {tipe:'layout', arah:'col',
                                items:[
                                    { tipe: 'gambar', width:'w-full md:w-3/4', url:gambarlayout, caption:'contoh desain website layout yang baik' },
                                    { tipe: 'paragraf', isi: 'Layout adalah pengaturan posisi elemen-elemen website seperti teks, gambar, tombol, dan menu. Layout yang baik akan membantu pengguna memahami alur informasi dengan lebih mudah. Tata letak yang rapi dan terstruktur membuat pengguna tidak bingung saat mencari informasi penting. Sebaliknya, layout yang berantakan dapat mengurangi kenyamanan dan efektivitas website.' },
                                ]
                            },
                            ]
                        }}
                        />
                        <Contohsoal
                        modeExcel={true}
                        singleSoal={false}
                        showNextButton={true}
                        nextPath="/mainPage/desainWebsite/softwareDesainWeb"
                        tampilNama={false}
                        JudulSoal={'Pertanyaan seputar komponen desain website'}
                        soalCustom={[
                            {
                            pertanyaan: "Apa elemen yang digunakan mengatur huruf seperti penyesuaian ukuran dan mengubah jenis font?",
                            pilihanJawaban: ["Layout", "Gambar", "Tipografi", "Warna"],
                            jawabanBenar: "Tipografi",
                            clueJawabanBenar: "mantap mari lanjut ke materi selanjutnya",
                            clueJawabanSalah: "coba deh pelajari lagi contoh penggunaan Session Layer"
                            }
                        ]}
                        />
                </section>
    )
}

export default ElemenDesainWeb;