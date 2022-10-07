const postsList = document.querySelector(".posts-list");
const nameValue = document.getElementById("updatenama");
const emailValue = document.getElementById("updateemail");
const passwordValue = document.getElementById("updatepassword");
let updateid = "";
let output = "";
// const url = "http://imageprocessing.promaydo.net:8080";
const url = "http://127.0.0.1:5000";
let token = localStorage.getItem("access_token");
const viewTable = (posts) => {
  // val = posts["data"];
  console.log(posts);
  posts.forEach((posts) => {
    // console.log(posts.name);
    if (posts.level == 1) {
      var level = "admin";
    }
    output += `
    <tr>                        
      <td>
        <div class="d-flex px-2 py-1">
          <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">${posts.name}</h6>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex flex-column justify-content-center">
          <h6 class="mb-0 text-sm">${posts.email}</h6>
        </div>      
      </td>
      <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-success">${level}</span>
      </td>
      <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">${posts.created_at}</span>
      </td>
      <td class="align-middle">
      <a onclick="update('${posts.id}','${posts.name}','${posts.email}','${posts.password}')" data-bs-toggle="modal" data-bs-target="#exampleModal" href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
      </a>&nbsp;
      <a onclick="funcdel(${posts.id})" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
          Delete
      </a>
      </td>
    </tr>
        `;
  });
  postsList.innerHTML = output;
};

function update(a, b, c, d) {
  document.getElementById("updatenama").value = b;
  document.getElementById("updateemail").value = c;
  document.getElementById("updatepassword").value = d;
  updateid = a;
}
function submitupdate() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var formdata = new FormData();
  formdata.append("name", nameValue.value);
  formdata.append("email", emailValue.value);
  formdata.append("password", passwordValue.password);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(url + "/user/" + updateid, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  window.location.href = "tables.html";
}
function funcdel(s) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(url + "/user/" + s, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  window.location.href = "tables.html";
}

var headglob = new Headers();
headglob.append("Authorization", "Bearer " + token);
var requestOptions = {
  method: "GET",
  headers: headglob,
  //   body: formdata,
  redirect: "follow",
};
fetch(url + "/user", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    myObj = JSON.parse(result);
    // console.log(myObj.data);
    viewTable(myObj.data);
  })
  .catch((error) => console.log("error", error));
