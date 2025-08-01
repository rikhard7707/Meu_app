const original = document.getElementById('original');
const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');

entrada.addEventListener('input', function() {
  const ref = original.value;
  const typed = entrada.value;

  let res = '';

  for (let i = 0; i < typed.length; i++) {
    if (i < ref.length && typed[i] === ref[i]) {
      res += `<span style="color: green;">${typed[i]}</span>`;
    } else {
      res += `<span style="color: red;">${typed[i]}</span>`;
    }
  }

  resultado.innerHTML = res;
});