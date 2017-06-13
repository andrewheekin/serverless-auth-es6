function signupView() {

  let html = `
    <input id="email" type="email" placeholder="email">
    <input id="password" type="password" placeholder="password">
    <button id="register">register</button>
    <br><br>
    <input id="confcode" type="text" placeholder="confirmation code">
    <button id="confirm">confirm</button>
  `;

  document.getElementById('view').innerHTML = html;
}

export { signupView };
