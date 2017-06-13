function home() {
  let html = `
    <h3>Welcome home, logged in user</h3>
  `;

  document.getElementById('view').innerHTML = html;
}

export { home };
