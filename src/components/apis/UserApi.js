import axios from "axios";

export async function login(email, password) {
  const result = {};
  const payload = {
    user: {
      email: email,
      password: password,
    },
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  console.log(requestOptions);
  await fetch("http://localhost:3001/users/sign_in", requestOptions)
    .then((response) => {
      result.token = response.clone().headers.get("Authorization");
      return response.json();
    })
    .then((data) => {
      result.user = data.user;
    });
  return result;
}

export async function register(email, password) {
  const result = {};
  const payload = {
    user: {
      email: email,
      password: password,
    },
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  console.log(requestOptions);
  console.log("I am in signup page");
  await fetch("http://localhost:3001/users", requestOptions)
    .then((response) => {
      result.token = response.clone().headers.get("Authorization");
      return response.json();
    })
    .then((data) => {
      result.user = data.user;
    });
  return result;
}

export async function logout(token) {
  const result = {};
  const payload = {};

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(payload),
  };
  console.log(requestOptions);
  console.log("I am in logout page");
  await fetch("http://localhost:3001/users/sign_out", requestOptions)
    .then((response) => {
      result.token = response.clone().headers.get("Authorization");
      return response.json();
    })
    .then((data) => {
      result.user = data.user;
    });
  return result;
}
