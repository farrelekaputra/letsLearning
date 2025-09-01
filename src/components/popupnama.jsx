import { useState } from "react";

const PopupNama = ({ onSubmit }) => {
  const [nama, setNama] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama.trim() !== "") {
      onSubmit(nama); // kirim balik ke parent
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Sebelum mulai tes</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Masukkan nama kamu..."
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
          >
            Mulai
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupNama;