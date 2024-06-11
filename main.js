document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = document.getElementById("form");
  const inputs = form.querySelectorAll("input");
  const errorMessage = document.getElementById("error-message");
  let isValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
      input.style.border = "1px solid red";
    } else {
      input.style.border = "";
    }
  });

  if (isValid) {
    errorMessage.textContent = alert("đầu vào ok");
  } else {
    errorMessage.textContent = alert("không có khoảng trống");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value;
    const errorMessage2 = document.getElementById("error-message");

    if (validatePhone(phone)) {
      errorMessage2.textContent = "";
      alert("Phone number is valid!");
      // Ở đây bạn có thể thực hiện các hành động khác, ví dụ như gửi form
    } else {
      errorMessage2.textContent = "Phone number must be exactly 10 digits.";
    }
  });

  document.getElementById("phone").addEventListener("input", function () {
    const phone = this.value;
    const errorMessage2 = document.getElementById("error-message");

    if (validatePhone(phone)) {
      errorMessage2.textContent = "";
    } else {
      errorMessage2.textContent = "Phone number must be exactly 10 digits.";
    }
  });
});

function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const errorMessage = document.getElementById("age-error");

    if (validateAge(age)) {
      errorMessage.textContent = "";
      alert("Age is valid!");
    } else {
      errorMessage.textContent = "Please enter a valid age between 18 and 100.";
    }
  });

  document.getElementById("age").addEventListener("input", function () {
    const age = this.value;
    const errorMessage = document.getElementById("age-error");

    if (validateAge(age)) {
      errorMessage.textContent = "";
    } else {
      errorMessage.textContent = "Please enter a valid age between 18 and 100.";
    }
  });
});

function validateAge(age) {
  if (isNaN(age)) {
    return false;
  }

  const parsedAge = parseInt(age, 10);
  return parsedAge >= 18 && parsedAge <= 100;
}
localStorage.setItem("name", name);
localStorage.setItem("email", email);
localStorage.setItem("mobile", moblie);
