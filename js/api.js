const base_url = "http://localhost:3000/users";

const getUsers = async () => {
  try {
    const response = await fetch(base_url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (userData) => {
  try {
    const response = await fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (userData, id) => {
  try {
    const response = await fetch(base_url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await fetch(base_url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
