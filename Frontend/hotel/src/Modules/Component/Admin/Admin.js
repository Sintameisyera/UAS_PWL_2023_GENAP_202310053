import React, { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [periode, setPeriode] = useState("");
  const [diskon, setDiskon] = useState("");
  const [judul, setJudul] = useState("");
  const [foto, setFoto] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/tabel_promo", {
        periode,
        diskon,
        judul,
        foto,
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Terjadi kesalahan saat mengirim data promo");
    }
  };

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <h2>Form Pengisian Promo</h2>
        <div className="form-group">
          <label htmlFor="judul">Judul:</label>
          <input
            type="text"
            id="judul"
            className="form-control"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="periode">Periode:</label>
          <input
            type="text"
            id="periode"
            className="form-control"
            value={periode}
            onChange={(e) => setPeriode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="diskon">Diskon:</label>
          <input
            type="text"
            id="diskon"
            className="form-control"
            value={diskon}
            onChange={(e) => setDiskon(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="foto">Link Foto Hotel:</label>
          <input
            type="text"
            id="foto"
            className="form-control"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Kirim Data Promo
        </button>
      </form>
    </div>
  );
}
