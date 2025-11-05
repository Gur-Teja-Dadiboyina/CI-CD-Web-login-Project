(function () {
  const form = document.getElementById('loginForm');
  const msg = document.getElementById('msg');

  function setMsg(text, type) {
    msg.textContent = text;
    msg.className = `msg ${type || ''}`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = form.username.value.trim();
    const pass = form.password.value;

    if (!user || !pass) {
      setMsg('Please fill in both fields.', 'err');
      return;
    }

    // Fake auth for practice only
    if (user === 'demo' && pass === 'demo123') {
      setMsg('Login successful! (demo only)', 'ok');
    } else {
      setMsg('Invalid credentials (try demo/demo123).', 'err');
    }
  });
})();
