export async function sendInvitation(email, token) {
  let result = {};
  const payload = {
    invitation: {
      email: email,
    },
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(payload),
  };
  console.log(">>>>>>>>>requestOptions<<<<<<<<<");
  console.log(requestOptions);
  await fetch("http://localhost:3001/invitations", requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("############ data is ************");
      console.log(data);
      result = data;
    });
  return result;
}
