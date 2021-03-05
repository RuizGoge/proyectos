let estudiantes = ["Jorge", "Ramon", "Bethy","Alexa","Josefina"];
function saludarEstudiantes(estudiante){
    console.log(`Saludos Sr(a). ${estudiante}`);
}
while (estudiantes.length > 0 ) {
    console.log(`Lista actualizada : ${estudiantes}`);
    let estudiante = estudiantes.shift();
     saludarEstudiantes(estudiante);
}