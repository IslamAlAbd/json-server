const saveUser = async () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  if(firstName == '' || lastName == '' || age == ''){
    alert("Please fill all fields");
    return;
  }
  const user = {
    first: firstName,
    last: lastName,
    age: age,
  };
  await apiAddUser(user);
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value ="";
  document.getElementById("age").value ="";
  const addNewUserModal = new bootstrap.Modal("#exampleModal")
  addNewUserModal.hide();
  window.location.reload();
};

let currentEditUserId = null;
const saveEditedUser = () => {
  const updatedUser = {
    first: document.getElementById("edit_first").value,
    last: document.getElementById("edit_last").value,
    age: document.getElementById("edit_age").value,
  };
  apiEditUser(updatedUser, currentEditUserId);
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-edit")) {
    const btn = e.target;
    const row = btn.closest("tr");

    currentEditUserId = row.dataset.userId;

    document.getElementById("edit_first").value = btn.dataset.first;
    document.getElementById("edit_last").value = btn.dataset.last;
    document.getElementById("edit_age").value = btn.dataset.age;
  }
});




const openEditUser = (id) => {
  alert(id)
}

const openEditUser1 = (e) => {
  e.preventDefault();
  alert('asdasda')
}