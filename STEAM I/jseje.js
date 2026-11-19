// 1. Modificar contenido al cargar la página.
document.querySelector("#mensaje").textContent =
  "¡Bienvenidos al DOM!";

document.querySelector("#ejemploHTML").innerHTML =
  "<strong>Este texto aparece en negritas.</strong>";


// 2. Mostrar u ocultar la imagen mediante una clase.
document.querySelector("#alternar").addEventListener("click", () => {
  document.querySelector("#imagen").classList.toggle("oculto");
});


// 3. Crear y agregar productos a la lista.
const producto = document.querySelector("#producto");

document.querySelector("#agregar").addEventListener("click", () => {
  if (producto.value.trim() === "") {
    return;
  }

  const elemento = document.createElement("li");
  elemento.textContent = producto.value.trim();

  document.querySelector("#lista").append(elemento);
  producto.value = "";
});


// 4. Cambiar la imagen principal al pulsar una miniatura.
const principal = document.querySelector("#principal");

document.querySelectorAll("#galeria img").forEach(foto => {
  foto.addEventListener("click", () => {
    principal.src = foto.src;
    principal.alt = foto.alt;
  });
});


// 5. Mostrar un error si la contraseña tiene menos de 8 caracteres.
const clave = document.querySelector("#clave");
const error = document.querySelector("#error");

clave.addEventListener("input", () => {
  if (clave.value.length < 8) {
    error.textContent = "La contraseña debe tener mínimo 8 caracteres.";
  } else {
    error.textContent = "";
  }
});