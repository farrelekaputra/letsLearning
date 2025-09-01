import Contohsoal from "../loopingsoal";
import Navbar from "../navbar";

const SoalPack1 = () => {
  return (
    <div>
        <Navbar menuEnabled={false}/>
        <div className="container pt-20 px-12">
            <Contohsoal
              modeExcel={true}
              singleSoal={true}
              showNextButton
              nextPath="/listSoal"
              popupFinish={true}
              tampilNama={true}
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
        </div>
    </div>
  );
};

export default SoalPack1;