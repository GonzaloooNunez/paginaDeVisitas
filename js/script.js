document.addEventListener("DOMContentLoaded", function () {
  function contadorVisitas() {
    return parseInt(localStorage.getItem("visita")) || 0;
  }

  function actualizarContador(count) {
    document.getElementById("contadorVisitas").textContent = count;
  }

  function cuenta() {
    let count = contadorVisitas();
    actualizarContador(count);
  }

  function reseteo() {
    localStorage.setItem("visita", 0);
    actualizarContador(0);
  }

  function sumarVisita() {
    let count = contadorVisitas() + 1;
    localStorage.setItem("visita", count);
    actualizarContador(count);
  }

  cuenta();

  const restablecer = document.getElementById("btnReestablecer");
  restablecer.addEventListener("click", reseteo);

  sumarVisita();
});
