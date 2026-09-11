const inputForm = document.getElementById("formInput");
const inputNama = document.getElementById("namaExpense");
const inputJumlah = document.getElementById("jumlahExpense");
const table = document.getElementById("tabelExpense");

let daftarPengeluaran = [];
let id_awal = 1;

inputForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newExpense = {
        id: id_awal++,
        nama: inputNama.value,
        jumlah: inputJumlah.value
    };
    
    daftarPengeluaran.push(newExpense);

    inputNama.value = "";
    inputJumlah.value = "";
});

document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

function addMessage(user, text, isRandom=false) {
    let msgDiv = document.createElement("div");

    msgDiv.className = "message";
    msgDiv.innerHTML = `<strong>${user}:</strong> ${text}`;

    if (isRandom) msgDiv.style.color = "gray";

    expenseTable.appendChild(msgDiv);

    expenseTable.scrollTop = expenseTable.scrollHeight;
}