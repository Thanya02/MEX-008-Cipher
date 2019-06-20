
let numero = document.getElementById("offset");
let textoUs = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const botonCifrar = document.getElementById("Codificar");
const botonDescifrar = document.getElementById("Decodificar");
const botonInicio = document.getElementById("inicio")


const irAInicio =()=> {
    location.href = "inicio.html";
}
botonInicio.addEventListener("click", irAInicio);

botonCifrar.addEventListener("click", ()=>{
    let textoUsMod = textoUs.value;
    resultado.value = (window.cipher.cifrar(numero.value, textoUsMod));
});

botonDescifrar.addEventListener("click", ()=>{
    let textoUsMod = textoUs.value;
    resultado.value = (window.cipher.decifrar(numero.value, textoUsMod));
});
