const saveUser = () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  addUser(user);
};

const modalEditUser = (id) => {
  document.getElementById("editfirstName").value = id;
  
  const editUserModal = new bootstrap.Modal("#editUserModal");  
  editUserModal.show();
}