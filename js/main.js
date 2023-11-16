const fotos = document.getElementsByClassName("foto");

for (let i = 0; i < fotos.length; i++) {
  fotos[i].addEventListener("click", agrandar);
}

function agrandar() {
  let foto = this;
  foto.classList.add("imgZoom");
  console.log(foto);

  // Crear un elemento para el botón "Regresar"
  let cerrarBoton = document.createElement("div");
  cerrarBoton.className = "cerrar";
  cerrarBoton.textContent = "Regresar";

  // Agregar un evento clic al botón "Regresar"
  cerrarBoton.addEventListener("click", function () {
    foto.classList.remove("imgZoom");
    foto.removeChild(cerrarBoton);  
  });

  // Agregar el botón "Regresar" al elemento foto
  foto.appendChild(cerrarBoton);
}
