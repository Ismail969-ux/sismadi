// 1.Dani Eka
// 2.Muhammad Ilqi Muzaki
// 3.Muhammmad Ismail
// 4.Dimas Aji
// 5.Restu Muhamad
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ====== KELAS ABSTRAK KENDARAAN ======
class Kendaraan {
    constructor(merk) {
        this.merk = merk;
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
        }
    }

    // Method abstrak (harus diimplementasikan oleh subclass)
    maju() {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
}

// ====== SUBCLASS MOBIL ======
class Mobil extends Kendaraan {
    maju() {
        return ${this.merk} melaju dengan kecepatan tinggi!;
    }
}

// ====== SUBCLASS SEPEDA ======
class Sepeda extends Kendaraan {
    maju() {
        return ${this.merk} melaju dengan tenaga manusia!;
    }
}

// ====== SIMULASI INTERFACE ======
// Blueprint sederhana untuk memastikan setiap kelas punya method 'maju()'
const kendaraanInterface = {
    maju: function() {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
};

// ====== PENGUJIAN IMPLEMENTASI ======
try {
    // Error: mencoba membuat objek langsung dari kelas abstrak
    // const generic = new Kendaraan("Generic");

    const avanza = new Mobil("Toyota Avanza");
    console.log(avanza.maju()); 
    // Output: Toyota Avanza melaju dengan kecepatan tinggi!

    const polygon = new Sepeda("Polygon");
    console.log(polygon.maju());
    // Output: Polygon melaju dengan tenaga manusia!

    // Mengecek apakah objek memenuhi interface
    if (typeof polygon.maju !== "function") {
        throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
    }

} catch (error) {
    console.error(error.message);
}
------------------------------------------------------------------------------------------------------------------------------
  class Pembayaran {
    constructor(jumlah) {
        if (new.target === Pembayaran) {
            throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
        }
        if (jumlah <= 0) {
            throw new Error("Jumlah pembayaran harus lebih dari 0!");
        }
        this.jumlah = jumlah;
    }

    prosesPembayaran() {
        throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
    }
}

class KartuKredit extends Pembayaran {
    prosesPembayaran() {
        return Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!;
    }
}

class PayPal extends Pembayaran {
    prosesPembayaran() {
        return Pembayaran ${this.jumlah} melalui PayPal berhasil!;
    }
}

// Uji coba
try {
    const bayar1 = new KartuKredit(500000);
    console.log(bayar1.prosesPembayaran());

    const bayar2 = new PayPal(250000);
    console.log(bayar2.prosesPembayaran());

} catch (error) {
    console.error(error.message);
}
