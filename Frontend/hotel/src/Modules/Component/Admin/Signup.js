import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cek jika ada kolom yang kosong
    if (!username || !password || !email) {
      setErrorMessage("Harap isi semua kolom");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        username,
        password,
        email,
      });

      console.log(response.data);

      setShowAlert(true);
      setErrorMessage("");

      window.location.href = "/login";
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan saat mengirim data ke database");
    }
  };

  return (
    <div className="container my-5">
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Data berhasil terkirim!
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form className="p-4 bg-light rounded" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-center">Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="mt-4 text-center">
        <span>Sudah punya akun? </span>
        <NavLink to="/login" className="btn btn-link">
          Silakan login.
        </NavLink>
      </div>
    </div>
  );
}
