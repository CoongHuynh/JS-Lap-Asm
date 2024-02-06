"use strict";

// đặt trong điều kiện kiểm tra xem người dùng đã được đăng nhập chưa
if (activeUser) {
  const newsContainer = document.getElementById("news-container");
  const btnPrev = document.getElementById("btn-prev");
  const pageNum = document.getElementById("page-num");
  const btnNext = document.getElementById("btn-next");
  // tính số news tối đa trả về từ API
  let totalResults = 0;
  getDataNews("us", 1);

  // hàm lấy dữ liệu từ API và hiển thị danh sách news
  async function getDataNews(country, page) {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${activeUser.category}&pageSize=${activeUser.pageSize}&page=${page}&apiKey=c8398b981077410a83646fd03d12a5a0`
      );
      const data = await res.json();
      console.log(data);
      // kiểm tra lỗ quá 100 req một ngày
      if (data.status === "error" && data.code === "rateLimited") {
        throw new Error(data.message);
      }
      // lỗi khi chạy từ tệp tin không thông qua server
      if (data.code === " corsNotAllowed") {
        throw new Error(data.message);
      }
      // hiển thị dữ liệu lên màn hình
      displayNewList(data);
    } catch (err) {
      // bắt bất kỳ lỗi nào nếu có
      alert("Error: " + err.message);
    }
  }

  // kiểm tra ẩn hiện nút previous
  function checkBtnPrev() {
    // nếu page num là 1 thì ẩn đi
    if (pageNum.textContent == 1) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }

  function checkBtnNext() {
    if (pageNum.textContent == Math.ceil(totalResults / activeUser.pageSize)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  // bắt sự kiện nút Previous
  btnPrev.addEventListener("click", function () {
    getDataNews("us", --pageNum.textContent);
  });

  // sử lí sự kiện nút Next
  btnNext.addEventListener("click", function () {
    getDataNews("us", ++pageNum.textContent);
  });

  // hàm hiện list News lên trang
  function displayNewList(data) {
    //   lấy giá trị cho biến
    totalResults = data.totalResults;
    //kiểm tra để ẩn các nút Previous / Next
    checkBtnPrev();
    checkBtnNext();

    let html = "";

    //   tạo code hiển thị bài viêt
    //   no_image_available.png hiển thị ảnh lỗi
    data.acticles.foreach(function () {
      html += `
    <div class="new-content">
    <div class="img-banner">
      <img src="${
        article.urlToImage ? article.urlToImage : "no_image_avialable.jpg"
      }"
      alt="img">
    </div>

    <div class="content">
      <h4>${article.title}</h4>
      <p>${article.description}</p>
      <button> <a href=${article.url} target="_blank"">View</a></button>
    </div>
  </div>`;
    });
    newsContainer.innerHTML = html;
  }
} else {
  alert("Vui lòng đăng nhập để truy cập ");
  window.location.assign("../index.html");
}
