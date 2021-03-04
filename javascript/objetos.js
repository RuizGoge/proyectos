//Este reto consistió en realizar el ingreso de X cosas o personas atravez de una funcion asignar los valores de los datos de lo que se ingresará.



function matricula(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
}
let matriculados = [];
let cantidadPersonas = prompt("Cuantas personas desea ingresar al sistema?"); //Para el reto serían 30.

for (let i = 0; i < cantidadPersonas; i++) {
    let n = prompt("Nombre");
    let e = prompt("Edad");
    let s = prompt("Sexo");
    matriculados.push(new matricula(n, e, s));
}


//mostrarlos.


for (let i = 0; i < matriculados.length; i++) {
    console.log(matriculados[i]);
    
}
