import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formularioBuscar.addEventListener("submit", obtenerCancion);

function obtenerCancion(e) {
  e.preventDefault();

  //Validamos
  const artista = document.querySelector("#artista").value;
  const cancion = document.querySelector("#cancion").value;

  if (artista === "" || cancion === "") {
    //El usuario dejó al menos un campo vacio, mostrar error
    UI.divMensajes.textContent = "Error... Todos los campos son obligatorios";
    UI.divMensajes.classList.add("error");

    setTimeout(() => {
      UI.divMensajes.textContent = "";
      UI.divMensajes.classList.remove("error");
    }, 3000);

    return;
  }

  //Consultar nuestra API
  const busqueda = new API(artista, cancion);
  busqueda.consultarAPI();
}
