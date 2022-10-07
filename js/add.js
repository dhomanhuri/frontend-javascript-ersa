// const url = "http://imageprocessing.promaydo.net:8080";
const url = "http://127.0.0.1:5000";
const nameValue = document.getElementById("addnama");
const emailValue = document.getElementById("addemail");
const passwordValue = document.getElementById("addpassword");
const cpasswordValue = document.getElementById("addcpassword");
const addPostForm = document.querySelector(".add-post-form");

let token = localStorage.getItem("access_token");

addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(nameValue.value);
  console.log(emailValue.value);
  console.log(passwordValue.value);
  console.log(cpasswordValue.value);
  // e.preventiveDefault();
  if (nameValue.value != "" || emailValue.value != "" || passwordValue.value != "" || cpasswordValue.value != "") {
    if (passwordValue.value == cpasswordValue.value) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
      var formdata = new FormData();
      formdata.append("name", nameValue.value);
      formdata.append("email", emailValue.value);
      formdata.append("password", passwordValue.value);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
      fetch(url+"/userAdmin", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      window.location.href = "tables.html";
    } else {
      alert("password tidak sama");
    }
  } else {
    alert("Mohon isi semua kolom");
  }
});
