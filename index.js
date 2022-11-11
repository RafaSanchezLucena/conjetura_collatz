const boton = document.querySelector("button");
const input = document.querySelector("input");
const parrafo = document.querySelector("p");

const ralentizar = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 150);
  });
};

input.addEventListener("keyup", () => {
  let numero = input.value;
  document.querySelector(".numero").innerHTML = numero;
});

const desarrollarConjetura = async () => {
  let numero = input.value;
  let lista = [];
  let numeroCalculos = 0;
  parrafo.innerHTML = "";

  while (numero != 1) {
    if (numero % 2 === 0) {
      resultado = numero / 2;
      lista.push(resultado);
      numeroCalculos += 1;
      numero = resultado;
      await ralentizar();
      document.querySelector(".numero").innerHTML = numero;
    } else {
      resultado = numero * 3 + 1;
      lista.push(resultado);
      numeroCalculos += 1;
      numero = resultado;
      await ralentizar();
      document.querySelector(".numero").innerHTML = numero;
    }
  }
  parrafo.innerHTML = `Se han realizado ${numeroCalculos} cálculos.`;
};

boton.addEventListener("click", () => {
  desarrollarConjetura();
});
