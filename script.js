let page = 1;

document
  .getElementById("loadBtn")
  .addEventListener("click", () => getUsers(page));

function getUsers(page) {
  fetch(`https://reqres.in/api/users?page=${page}`)
    .then((response) => response.json())
    .then((responseJson) => procesarUsers(responseJson))
    .catch((error) => console.error("Error al obtener los usuarios", error));
}

function procesarUsers(data) {
  const users = data.data;
  let userList = "";
  for (let user of users) {
    userList += `
    <div class="col">
        <div class="card">
            <img src="${user.avatar}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                <p class="card-text">${user.email}</p>
            </div>
        </div>
    </div>`;
  }
  document.getElementById("userList").innerHTML = userList;
}
