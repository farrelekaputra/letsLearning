const Materi1 = ({ penjelasanMateri }) => {
  return (
    <div className="w-full mx-auto p-8 md:p-6 gap-6 flex flex-col text-gray-800">
      
      <h1 className="judulMateri text-3xl font-semibold">{penjelasanMateri.judulMateri}</h1>
      {penjelasanMateri.konten.map((item, i) => {
        if (item.tipe === 'paragraf') {
          return (
            <p key={i} className="paragraf text-justify leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.isi }}
            />
          );
        }
        if (item.tipe === 'gambar') {
          return (
            <div key={i} className="flex flex-col items-center">
            <img 
              src={item.url} 
              alt="Gambar" 
              className={`gambar my-4 w-full ${item.width || ""}`} 
            />
              {item.caption && <div className="caption text-sm text-gray-600">{item.caption}</div>}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Materi1;