const inputForm = document.getElementById("formInput");
const inputNama = document.getElementById("namaExpense");
const inputNominal = document.getElementById("nominalExpense");
const inputTanggal = document.getElementById("tanggalExpense");
const tabel = document.getElementById("tabelExpense");

let daftarPengeluaran = [];
let id_awal = 1;

inputForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const pengeluaran = {
        id: id_awal++,
        nama: inputNama.value,
        nominal: Number(inputNominal.value),
        tanggal: inputTanggal.value
    };
    
    daftarPengeluaran.push(pengeluaran);

    inputNama.value = "";
    inputNominal.value = "";
    inputTanggal.value = "";

    updateTabel();
});

function updateTotal() {
    const totalData = document.getElementById("jumlahDataPengeluaran");
    const totalHarga = document.getElementById("totalNominalPengeluaran");

    const jumlahData = daftarPengeluaran.length;
    const jumlahHarga = daftarPengeluaran.reduce((total, curr) => total + curr.nominal, 0)

    totalData.textContent = jumlahData;
    totalHarga.textContent = jumlahHarga.toLocaleString("id-ID");
}

function hapusData(id) {
    daftarPengeluaran = daftarPengeluaran.filter(data => data.id != id);
    updateTabel();
}

function updateTabel() {
    tabel.innerHTML = "";

    daftarPengeluaran.forEach((data, index) => {
        const baris = document.createElement("tr");

        baris.innerHTML = `
            <td style="text-align: center;">${index + 1}</td>
            <td>${data.nama}</td>
            <td>Rp. ${data.nominal.toLocaleString("id-ID")}</td>
            <td>${data.tanggal}</td>
            <td style="text-align: center;">
                <button onclick="hapusData(${data.id})">Hapus</button>
            </td>
        `;

        tabel.appendChild(baris);
    });

    updateTotal();
}