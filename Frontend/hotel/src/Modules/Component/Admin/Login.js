import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setErrorMessage("");
        console.log("Login berhasil!");
        window.location.href = "/admin";
        // Ganti baris di atas dengan kode untuk mengalihkan pengguna ke halaman beranda setelah login berhasil.
        // Anda bisa menggunakan react-router-dom untuk mengelola navigasi halaman.
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Username atau password salah");
    }
  };

  return (
    <div className="container my-5">
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Login</h2>
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
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}
