const headers = () => {
  return {
    "Content-Type": "application/json",
    Accepts: "application/json",
    token: localStorage.getItem("token")
  };
};

const login = (username, password) => {
  // console.log('in the api', username, password)
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
} // this returns a token

export default {
  login
};
