function registrar() {
  const usuario = document.getElementById('registro-usuario').value;
  const clave = document.getElementById('registro-clave').value;
  localStorage.setItem('usuario', usuario);
  localStorage.setItem('clave', clave);
  alert('✅ Registro exitoso');
}

function iniciarSesion() {
  const user = document.getElementById('login-usuario').value;
  const pass = document.getElementById('login-clave').value;
  const regUser = localStorage.getItem('usuario');
  const regPass = localStorage.getItem('clave');

  if (user === regUser && pass === regPass) {
    alert('✅ Inicio de sesión exitoso');
    window.location.href = 'compras.html';
  } else {
    alert('❌ Usuario o contraseña incorrectos');
  }
}
