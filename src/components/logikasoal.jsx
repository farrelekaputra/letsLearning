import {useState} from "react";

function UseLogicSoal(soalInput = []){
    
      const [jawaban, aturJawaban] = useState(Array(soalInput.length).fill(""));
      const [hasil, aturHasil] = useState(Array(soalInput.length).fill(""));
      const [statusHasil, aturStatusHasil] = useState(Array(soalInput.length).fill (""));
      const [sudahDikoreksi, aturSudahDikoreksi] = useState(false);
      const [skor, aturSkor] = useState(null);
      
      const handleSubmit = (e, index) => {
        e.preventDefault();
        const soalSekarang = soalInput[index];
        const jawabanUser = jawaban[index];
    
        if (jawabanUser === "") {
          aturHasil((prev) =>
            prev.map((item, i) => (i === index ? "Eits coba jawab dulu dong" : item))
          );
          aturStatusHasil((prev) =>
          prev.map((item, i) => (i === index ? "" : item))
          );
        } 
        else if (jawabanUser === soalSekarang.jawabanBenar) {
          aturHasil((prev) =>
            prev.map((item, i) => (i === index ? soalSekarang.clueJawabanBenar : item))
          );
          aturStatusHasil((prev) => 
          prev.map((item, i) => (i === index ? "benar" : item))
          );
        } 
        else {
          aturHasil((prev) =>
            prev.map((item, i) => (i === index ? soalSekarang.clueJawabanSalah : item))
          );
          aturStatusHasil((prev) =>
          prev.map((item, i) => (i === index ? "salah" : item))
          );
        }
        setTimeout(() => {
              const semuaSudahDijawab = jawaban.every((k) => k !== "");
              if (semuaSudahDijawab) {
                let skorTotal = 0;
                const skorperSoal = 100/soalInput.length
                jawaban.forEach((k, i) => {
                  if (k === soalInput[i].jawabanBenar){
                    skorTotal += skorperSoal;
                  }
                });
                aturSkor(skorTotal);
              }
            }, 100);
          };
      const handleCheckAll = () => {
        const belumJawab = jawaban.some(j => j === "");
        if (belumJawab) {
          alert("Masih ada soal yang belum dijawab!");
          return;
        }
        const hasilBaru = [];
        const statusBaru = [];
        let skorTotal = 0;
        const skorperSoal = 100/soalInput.length

        soalInput.forEach((soal, i) => {
          if (jawaban[i] === soal.jawabanBenar) {
            hasilBaru[i] = soal.clueJawabanBenar;
            statusBaru[i] = "benar";
            skorTotal += skorperSoal
          } else {
            hasilBaru[i] = soal.clueJawabanSalah;
            statusBaru[i] = "salah";
          }
        });
        aturHasil(hasilBaru);
        aturStatusHasil(statusBaru);
        aturSkor(skorTotal);
        aturSudahDikoreksi(true);
      }
      return {daftarSoal: soalInput, jawaban, aturJawaban, hasil, statusHasil, handleSubmit, handleCheckAll, sudahDikoreksi , skor};
    }
export default UseLogicSoal;