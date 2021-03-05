let alumnos = [
    {nombre: "Jorge", edad: 25, cedula: 22983350},
    {nombre: "Raul", edad: 24, cedula: 22983345},
    {nombre: "Alexa", edad: 34, cedula: 24789155},
    {nombre: "Umberto", edad: 14, cedula: 11715017},
    {nombre: "Catalina", edad: 18, cedula: 11715017}
];

let filtrarAlumnos = alumnos.forEach(function(alumno){
    document.write(alumno.cedula + " -");
})


// document.write(`Listado de alumnos:<br>
//                 - ${filtrarAlumnos[0]}<br>
//                 - ${filtrarAlumnos[1]}<br>
//                 - ${filtrarAlumnos[2]}<br>
//                 - ${filtrarAlumnos[3]}<br>
//                 - ${filtrarAlumnos[4]}`)