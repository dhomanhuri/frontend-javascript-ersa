const emailValue = document.getElementById("email-value");
const passwordValue = document.getElementById("password-value");
const loginPostForm = document.querySelector(".add-post-form");

let output = "";
// const url = "http://127.0.0.1:5000";
const url = "http://imageprocessing.promaydo.net:8080";

//login - methods post
loginPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var formdata = new FormData();
  formdata.append("email", emailValue.value);
  formdata.append("password", passwordValue.value);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(url + "/login", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      myObj = JSON.parse(result);
      console.log(result);
      if (myObj.message == "Sukses Login!") {
        localStorage.setItem("access_token", myObj.data.access_token);
        console.log(localStorage.getItem("access_token"));
        window.location.href = "dashboard.html";
      }
      // console.log(myObj);
    })
    .catch((error) => console.log("error", error));
});
