"use strict";

const breedInput = document.getElementById("input-breed");
const typeInput = document.getElementById("input-type");
const btnSubmit = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");

// Hiển thị danh sách  các breed
renderTableBreed();

// bắt sự kiện cho nút submit breed
btnSubmit.addEventListener("click", function () {
  //   tạo đối tượng data cho breed lấy từ form
  const data = {
    breed: breedInput.value,
    type: typeInput.value,
  };

  //   validate dữ liệu từ form nhập
  const isValidate = validate(data);
  // nếu data thỏa điều kiện từ hàm validate
  if (isValidate) {
    //  thêm dữ liệu từ form vào mảng
    breedArr.push(data);
    // Lưu dữ liệu vào localStorage
    saveToStorage("breedArr", breedArr);
    // hiển thị lại danh sách breed
    renderTableBreed(breedArr);
    // xóa trống form nhập
    deleteForm();
  }
});

/**Hàm kiểm tra dữ liệu nhập vào từ form có đầy đủ hay không */
function validate(data) {
  let isValidate = true;
  if (breedInput.value.trim().lenght === 0) {
    alert("Please input for breed");
    isValidate = false;
  }
  if (typeInput.value.trim().lenght === 0) {
    alert("Please input for type");
    isValidate = false;
  }
  return isValidate;
}

/**Hàm xóa trống thông tin đã nhập trên form */
function deleteForm() {
  breedInput.value = "";
  typeInput.value = "Select Type";
}

/**Hàm hiển thị danh sách breed lên vùng hiển thị */
function renderTableBreed() {
  // xóa trống phần hiển thị
  tableBodyEl.innerHTML = "";

  breedArr.forEach(function (breedItem, index) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td scope="col">${index + 1}</td>
    <td scope="col">${breedItem.breed}</td>
    <td scope="col">${breedItem.type}</td>
    <td>
    <button type="button" onclick="deleteBreed('${
      breedItem.breed
    }')" class="btn btn-danger">Delete</button>
    </td> `;
    tableBodyEl.appendChild(row);
  });
}

function deleteBreed(breed) {
  // xác nhận lại yêu cầu xóa
  const isDelete = confirm("Are you sure");
  if (isDelete) {
    breedArr.forEach(function (breedItem, index) {
      //dùng forEach lọc qua danh sách nếu breed cần tìm trùng breed
      // trong mảng thì tiến hành xóa
      if (breed === breedArr[index].breed) {
        // xóa đối tượng thứ index khỏi mảng
        breedArr.splice(index, 1);
        // cập nhập lại dữ liệu breed dưới localStorage
        saveToStorage("breedArr", breedArr);
        //hiển thị lại danh sách sau khi xóa
        renderTableBreed(breedArr);
      }
    });
  }
}
