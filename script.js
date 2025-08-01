const original = document.getElementById('original'); 
const entrada = document.getElementById('entrada'); 
const resultado = document.getElementById('resultado'); 

entrada.addEventListener('input', () => {
  if (entrada.value === original.value) {
    resultado.textContent = '✅ Texto correto!';
  } else {
    resultado.textContent = '❌ Texto diferente.';
  }
});
