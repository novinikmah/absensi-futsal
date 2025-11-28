const form = document.getElementById('absenForm');
const tabelBody = document.querySelector('#tabelAbsensi tbody');

// Ambil data dari localStorage
let dataAbsensi = JSON.parse(localStorage.getItem("absensi")) || [];

// Tampilkan data saat halaman dibuka
function loadTable() {
    tabelBody.innerHTML = "";
    dataAbsensi.forEach(item => {
        const row = `
            <tr>
                <td>${item.nama}</td>
                <td>${item.kelas}</td>
                <td>${item.tanggal}</td>
            </tr>
        `;
        tabelBody.innerHTML += row;
    });
}

loadTable();

// Submit form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const tanggal = document.getElementById('tanggal').value;

    const newEntry = { nama, kelas, tanggal };

    dataAbsensi.push(newEntry);

    // Simpan ke localStorage
    localStorage.setItem("absensi", JSON.stringify(dataAbsensi));

    loadTable();
    form.reset();
});
