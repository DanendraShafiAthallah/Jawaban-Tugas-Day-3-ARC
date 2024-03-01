// meminta input daftar nama mahasiswa menggunakan Promise
function getStudentNames() {
  return new Promise((resolve, reject) => {
    const input = prompt("Masukkan nama mahasiswa (pisahkan dengan koma): ");
    if (input) {
      const studentNames = input.split(",").map((name) => name.trim());
      resolve(studentNames);
    } else {
      reject("Input kosong.");
    }
  });
}
// menampilkan daftar nama mahasiswa
function displayStudentList(studentNames) {
  const studentListContainer = document.getElementById("studentList");
  let listHTML = "<h2>Daftar Nama Mahasiswa:</h2><ul>";
  studentNames.forEach((name) => {
    listHTML += `<li>${name}</li>`;
  });
  listHTML += "</ul>";
  studentListContainer.innerHTML = listHTML;
}
async function main() {
  try {
    let studentNames = [];
    let inputMore = true;
    while (inputMore) {
      // Menunggu input daftar nama mahasiswa
      const names = await getStudentNames();
      studentNames = [...studentNames, ...names];
      // Minta input tambahan
      const additionalInput = confirm("Ingin menambahkan nama mahasiswa lain?");
      if (!additionalInput) {
        inputMore = false;
      }
    }
    // Menampilkan daftar nama mahasiswa
    displayStudentList(studentNames);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}
// memanggil fungsi utama saat halaman dimuat
main();
