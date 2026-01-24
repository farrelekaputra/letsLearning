const Materi1 = ({ penjelasanMateri }) => {
  return (
    <div className="w-full mx-auto p-4 md:p-6 gap-4 md:gap-6 flex flex-col text-gray-800">
      <h1 className="judulMateri md:pt-0 text-3xl font-semibold">
        {penjelasanMateri.judulMateri}
      </h1>

      {penjelasanMateri.konten.map((item, i) => {
        if (item.tipe === "paragraf") {
          return (
            <p
              key={i}
              className="paragraf text-justify leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.isi }}
            />
          );
        }

        if (item.tipe === "subHeading") {
          return (
            <p
              key={i}
              className="subHeading text-xl -mb-4 font-semibold"
              dangerouslySetInnerHTML={{ __html: item.isi }}
            />
          );
        }

        if (item.tipe === "gambar") {
          return (
            <div key={i} className="flex flex-col items-center">
              <img
                src={item.url}
                alt="Gambar"
                className={`gambar my-4 w-full ${item.width || ""} ${item.display || ""}`}
              />
              {item.caption && (
                <div className="caption text-sm text-gray-600 text-center">
                  {item.caption}
                </div>
              )}
            </div>
          );
        }

        if (item.tipe === "layout") {
          return (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 md:gap-8 my-4"
            >
              {item.items.map((sub, j) => {
                if (sub.tipe === "gambar") {
                  return (
                    <div
                      key={j}
                      className={`${sub.width || ""}`}
                    >
                      <img
                        src={sub.url}
                        alt="Gambar"
                        className="w-full rounded"
                      />
                      {sub.caption && (
                        <p className="text-sm text-gray-600 text-center mt-2">
                          {sub.caption}
                        </p>
                      )}
                    </div>
                  );
                }

                if (sub.tipe === "paragraf") {
                  return (
                    <p
                      key={j}
                      className={`subparagraf w-full md:w-1/2 text-justify leading-relaxed md:w-${sub.width || ""}`}
                      dangerouslySetInnerHTML={{ __html: sub.isi }}
                    />
                  );
                }

                return null;
              })}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Materi1;