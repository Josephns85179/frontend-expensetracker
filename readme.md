# Expense Tracker by Joseph/535250135
Halaman website expense tracker memiliki fungsi sebagai berikut:
1. Input data pengeluaran (nama, nominal, dan tanggal)
2. Menampilkan semua data pengeluaran yang sudah dimasukkan
3. Menampilkan total nominal seluruh data pengeluaran
4. Menghapus data pengeluaran
5. Menampilkan total jumlah data pengeluaran

Menggunakan HTML, CSS, dan JavaScript

Penjelasan singkat kode:
1. Setiap object pengeluaran memiliki id, keterangan, dan nominal. Id digunakan untuk memudahkan proses penghapusan data pengeluaran.
2. Data pengeluaran disimpan ke dalam array.
3. Number(inputNominal.value) memastikan bahwa nominal yang dimasukkan tidak dikonversi menjadi string.
4. daftarPengeluaran.reduce((total, curr) => total + curr.nominal, 0). Reduce mencari seluruh array untuk menambahkan nominal (perhitungan dimulai dari 0, curr adalah data array yang sedang diproses yang kemudian ditambahkan ke total).
5. toLocaleString mengubah format menjadi Rupiah.
6. Fungsi hapus data ( daftarPengeluaran.filter(data => data.id != id); ). Filter menyaring data pada array dan hanya menyisakan data dengan id yang tidak diminta untuk dihapus.
7. Dalam forEach, data adalah parameter objek pengeluaran (id, nama, nominal, tanggal), sedangkan index adalah posisi tiap data yang digunakan untuk display nomor pada tabel.