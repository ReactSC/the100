const authData = {
  u: 'admin',
  p: 'password'
}
var auth = false;

export const authFn = data => {
  data &&
    data.username === authData.u &&
    data.password === authData.p ?
    auth = true
    : auth = false;
  return localStorage.setItem("auth", auth);
}
