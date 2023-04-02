"use strict";
// Xây dựng chức năng ẩn thông tin cá nhân
// tạo các biến
const form = document.querySelector(".form-infor");
const emailInput = document.getElementById("Email");
const personnalInfor = document.getElementById("personal-info");
const btnSubmit = document.getElementById("submit");

// Tạo Event khi click chuột vào nút submit

btnSubmit.addEventListener("click", function (event) {
  // tạo lệnh event.preventDefault() giúp ngăn không cho trang reset khi ấn nút submit (nguồn: tra google)
  event.preventDefault();
  // lấy dữ liệu nhập vào từ input
  const email = emailInput.value;
  // Kiểm tra xem email nhập vào có hợp lệ hay không
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Nếu email không hợp lệ hiện cửa sổ cảnh báo
  if (!regex.test(email)) {
    alert("Email không hợp lệ vui lòng nhập định dạng Email");
  }
  // Nếu email hợp lệ thì ẩn form và hiện phần thông tin
  else {
    form.classList.add("hide");
    personnalInfor.classList.remove("hide");
  }
});
// Xong phần chức năng ẩn thông tin cá nhân

// Xây dựng phần chức năng ẩn hiện thông tin nghề nghiệp

// tạo các biến

const btnViewMore1 = document.querySelector(".btnView-more1");
const btnViewMore2 = document.querySelector(".btnView-more2");
const btnViewMore3 = document.querySelector(".btnView-more3");
const btnViewMore4 = document.querySelector(".btnView-more4");
const btnViewMore5 = document.querySelector(".btnView-more5");
const btnViewMore6 = document.querySelector(".btnView-more6");
// tạo function xử lý phần hiển thị nội dung
function View(btn, content) {
  // Tạo event click cho nút view more
  btn.addEventListener("click", function () {
    // tạo biến container giúp xác định phần tử chứa nút view more bằng cách dùng DOM Traverse
    const container = btn.parentNode.parentNode;
    // tạo biến conTent giúp xác định phần tử chứa nội dung đang ẩn
    const conTent = container.querySelector(content);
    if (conTent.classList.contains("hide")) {
      conTent.classList.remove("hide");
      btn.textContent = "View Less";
    } else {
      conTent.classList.add("hide");
      btn.textContent = "View More";
    }
  });
}
// Truyền tham số cho function
View(btnViewMore1, ".kn-3");
View(btnViewMore2, ".hv-3");
View(btnViewMore3, ".hd-3");
View(btnViewMore4, ".st-3");
View(btnViewMore5, ".nn-3");
View(btnViewMore6, ".skill-3");

// Xong phần chức năng ẩn hiện thông tin nghề nghiệp
