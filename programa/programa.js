//variables

var producto = document.getElementById("product");
var compresor = document.getElementById("compresor");
var secador = document.getElementById("secador");
var compresores = document.getElementById("compresores");
var secadores = document.getElementById("secadores");
var addform = document.getElementById("addform"); 

var button = document.getElementById("add");

//funciones

const contenedor = document.querySelector(".addform");

function crearProducto(){
    producto = `<select id="product" name="producto"><option>seleccionar producto</option>`;
    producto1 = `<option>compresor</option>`;
    producto2 = `<option>secador</option></select>`;
    return [producto,producto1,producto2];
}
function crearModelo(modelo1, modelo2){
    forma = `<form ${[i]}></form>`;
    modelo =  `<select id="compresores" hidden="true" name="modelcompresor" >
			<option>seleccionar modelo</option>`
    modelo1 = `<option>${modelo1}</option>`;
    modelo2 = `<option>${modelo2}</option></select>`;
    return [forma,modelo,modelo1,modelo2];
}

function mostrarModelo(event) {
	if (producto.value == "compre") {
	secadores.setAttribute("hidden", true);
	return compresores.removeAttribute("hidden");
}else if(producto.value == "secado"){
	compresores.setAttribute("hidden", true);
	return secadores.removeAttribute("hidden");
}
}
function add() {
	contenedor.innerHTML = crearProducto();
	return contenedor.innerHTML = crearModelo()
}	
function agregarOtroProducto(event){
	event.preventDefault();
	var confir = confirm("Desea agregar otro producto?");
	if (confir = true) {
		add();
    }
}



button.addEventListener("click", agregarOtroProducto);

producto.addEventListener("change", mostrarModelo);



//