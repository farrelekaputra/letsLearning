const Materi1 = ({ penjelasanMateri }) => {
  return (
    <div className="w-full mx-auto p-8 md:p-6 gap-6 flex flex-col text-gray-800">
      
      <h1 className="judulMateri text-3xl font-semibold">{penjelasanMateri.judulMateri}</h1>
      {penjelasanMateri.konten.map((item, i) => {
        if (item.tipe === 'paragraf') {
          return <p key={i} className="paragraf text-justify leading-relaxed">{item.isi}</p>;
        }
        if (item.tipe === 'gambar') {
          return (
            <div key={i}>
              <img src={item.url} alt="Gambar" className="gambar w-full my-4" />
              {item.caption && <div className="caption">{item.caption}</div>}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Materi1;