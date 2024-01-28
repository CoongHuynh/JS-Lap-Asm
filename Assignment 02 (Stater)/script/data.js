"use strict";
const btnExport = document.getElementById("export-btn");
const btnImport = document.getElementById("import-btn");
const fileInput = document.getElementById("input-file");

// Bắt sự kiện nhấn vào nút Export
btnExport.addEventListener("click", function () {
  const isExport = confirm("Bạn xác nhận chắc chắn Export ?");
  if (isExport) {
    savestaticDataToFile();
  }
});

// Hàm : Lưu dữ liệu xuống file
function savestaticDataToFile() {
  // tạo dữ liệu để lưu xuống file
  const blob = new Blob([JSON.stringify(getFromStorage("petArr"), null, 2)], {
    type: "application/json",
  });
  // luu file
  saveAs(blob, "data.json");
  // dùng thư viện FileSaver.js (đặt trong thư mục FileSaver library) theo link hướng dẫn của đề bài,
}

btnImport.addEventListener("click", function () {
  // kiểm tra người dùng có chọn tệp tin chưa
  if (!fileInput.value) {
    alert("Vui lòng chọn tệp tin muốn khởi tạo");
  } else {
    const isImport = confirm("Bạn có chắc muốn import ?");
    if (isImport) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          saveToStorage("petArr", JSON.parse(reader.result));
          alert("Đã thêm dữ liệu");
        },
        false
      );

      if (file) {
        reader.readAsText(file);
      }
      fileInput.value = "";
    }
  }
});
