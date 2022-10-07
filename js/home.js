const postsList = document.querySelector(".posts-list");
const viewTable = (posts) => {
  // val = data2["data"];
  posts.forEach((post) => {
    output += `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">${post.name}</th>
            <th scope="col">${post.email}</th>
            <th scope="col">${post.level}</th>
          </tr>
        </thead>
      </table>
  
        `;
  });
  postsList.innerHTML = output;
};

fetch(url + "/user").then((res) => res.json().then((data2) => viewTable(data2["data"])));
