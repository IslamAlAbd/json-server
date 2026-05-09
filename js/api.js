const base_url = "http://localhost:3000/users";

const getAllUsers = async () => {
  try {
    const response = await fetch(base_url);
    const data = await response.json();
    renderTable(data);
    console.log("data", data);
  } catch (error) {
    console.log("Error:", error);
  }
};

const apiAddUser = async (userData) => {
  try {
    const response = await fetch(base_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log("Error:", error);
  }
};
// addUser({
//     name : "Islam",
//     age : 25
// })

const apiEditUser = async (userData, id) => {
  try {
    const response = await fetch(base_url + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log("Error:", error);
  }
};
// editUser({
//     name : "Ahmad",
//     last_name : "AL-Abed"
// },"KOYL9mzGLA0")

const apiDeleteUser = async (id) => {
  try {
    const response = await fetch(base_url + "/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log("Error:", error);
  }
};
// deleteUser("v2QE4VCjaq8")

// Render users in table
const renderTable = (users) => {
  const tableBody = document.getElementById("userTableBody");
  tableBody.innerHTML = ""; // Clear existing data
  if(users.length === 0){

  }else{
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.dataset.userId = user.id; // Store ID in data attribute
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.first}</td>
      <td>${user.last}</td>
      <td>${user.age}</td>
      <td>
        <button type="button" class="btn btn-danger btn-delete">Delete</button>
        <button type="button" class="btn btn-success btn-edit"
        // data-first="${user.first}"
        // data-last="${user.last}"
        // data-age="${user.age}"
         onclick="openEditUser('${user.id}')">Edit</button>


         <a href="http://localhost:3000/users/${user.id}" target="_blank" class="btn btn-primary" onclick="openEditUser1()">get me</a>
      </td>
    `;
    tableBody.appendChild(row);
  })};

  // Attach delete listeners to all buttons
  attachDeleteListeners();
};
// Attach event listeners to delete buttons
const attachDeleteListeners = () => {
  document.querySelectorAll(".btn-delete").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const userId = e.target.closest("tr").dataset.userId;
      await apiDeleteUser(userId);
      getAllUsers();
    });
  });
};

document.addEventListener("DOMContentLoaded", getAllUsers);
