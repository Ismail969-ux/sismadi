// Contoh 1: Try–Catch–Finally (Error Bawaan)

console.log("Contoh 1: Try–Catch–Finally");

try {
  let mahasiswa = ["Andi", "Budi", "Citra"];
  console.log(mahasiswa[5].toUpperCase()); // Akan error karena index 5 undefined
} catch (error) {
  console.log("Terjadi error: " + error.message);
} finally {
  console.log("Proses selesai.");
}

console.log("\n");


// Contoh 2: Throw new Error (Error Manual)

console.log("Contoh 2: Throw new Error");

function cekUsia(usia) {
  if (usia < 18) {
    throw new Error("Maaf, Anda belum cukup umur!");
  }
  return "Selamat datang!";
}

try {
  console.log(cekUsia(16)); // Akan memunculkan error
} catch (error) {
  console.log("Terjadi kesalahan: " + error.message);
}

console.log("\n");


// Contoh 3: Custom Error Class (OOP - Inheritance)

console.log("Contoh 3: Custom Error Class");

class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);           // Memanggil konstruktor Error
    this.name = "ValidasiError"; // Menentukan nama error khusus
  }
}

function cekNama(nama) {
  if (nama.length < 3) {
    throw new ValidasiError("Nama terlalu pendek!");
  }
  return Nama valid: ${nama};
}

try {
  console.log(cekNama("Jo")); // Akan error karena nama terlalu pendek
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Terjadi kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);    
  }
}

console.log("\nSemua proses telah selesai");
