const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// untuk konfigurasi ke SQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel",
});

// menghubungkan ke database
connection.connect((err) => {
  if (err) {
    console.error("Koneksi gagal", err);
  } else {
    console.log("Koneksi berhasil");
  }
});

// mengizinkan permintaan dari asal apapun
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// endpoint untuk menambahkan promo
app.post("/api/tabel_promo", (request, response) => {
  const { periode, diskon, judul, foto } = request.body;

  const sql = `INSERT INTO tabel_promo (periode, diskon, judul, foto) VALUES (?, ?, ?, ?)`;
  const values = [periode, diskon, judul, foto];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Gagal menambahkan promo", error);
      response.status(500).json({ message: "Input gagal" });
    } else {
      console.log("Data promo berhasil terkirim");
      response.status(200).json({ message: "Data promo berhasil terkirim" });
    }
  });
});

// endpoint untuk menampilkan tabel_promo
app.get("/api/tabel_promo", (request, response) => {
  connection.query("SELECT * FROM tabel_promo", (error, results) => {
    if (error) {
      console.error("Gagal menampilkan promo", error);
      response.status(500).json({ message: "Gagal tampil" });
    } else {
      console.log("Promo berhasil tampil");
      response.status(200).json(results);
    }
  });
});


// Endpoint untuk proses login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Kueri untuk memeriksa data login dari tabel users di database
  const sql = `SELECT * FROM signup WHERE username = ? AND password = ?`;
  const values = [username, password];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ success: false });
    } else {
      if (results.length > 0) {
        // Login berhasil
        res.json({ success: true });
      } else {
        // Login gagal
        res.json({ success: false });
      }
    }
  });
});

// endpoint untuk SIGNUP
app.post("/api/signup", (request, response) => {
  const { username, password, email } = request.body;

  const sql = `INSERT INTO signup (username, password, email) VALUES (?, ?, ?)`;
  const values = [username, password, email];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Gagal melakukan signup", error);
      response.status(500).json({ message: "Gagal login" });
    } else {
      console.log("berhasil melakukan signup");
      response.status(200).json({ message: "Data login berhasil terverifikasi" });
    }
  });
});

// endpoint untuk get SIGNUP
app.get("/api/signup", (request, response) => {
  connection.query("SELECT * FROM signup", (error, results) => {
    if (error) {
      console.error("Gagal melakukan signup", error);
      response.status(500).json({ message: "Gagal signup" });
    } else {
      console.log("berhasil melakukan signup");
      response.status(200).json(results);
    }
  });
});


// menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
