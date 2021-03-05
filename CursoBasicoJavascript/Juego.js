// Juego con switch

let piedra = "Piedra";
let papel = "Papel";
let tijera = "Tijera";
let user = prompt("Que eliges?");
let max = 3, min = 0, random = Math.floor(Math.random() * (max - min + 1) + min); //Este codigo es para asignarle un numero aleatorio a la variable random
let cpu = random;

switch (cpu) {
    case 1:
        cpu = piedra;
        break;
    case 2:
        cpu = papel;
        break;
    default:
        cpu = tijera;
}

function juego(user, cpu) {
    switch (true) {
        case (user === cpu):
            confirm("Empate!!!");
            break;
        case ((user === piedra) && (cpu === tijera)):
            confirm("Ganaste con " + user);
            break;
        case ((user === papel) && (cpu === piedra)):
            confirm("Ganaste con " + user);
            break;
        case ((user === tijera) && (cpu === papel)):
            confirm("Ganaste con " + user);
            break;
        default: alert("Perdiste!!");
            break;
    }
}
    juego(user, cpu);








// EL JUEGO CON IF




// let piedra = "Piedra";
// let papel = "Papel";
// let tijera = "Tijera";
// let user = prompt("Que eliges?");
// let max = 3, min = 0, random = Math.floor(Math.random() * (max - min + 1) + min); //Este codigo es para asignarle un numero aleatorio a la variable random
// let cpu = random;


// if (cpu === 1) {
//     cpu = piedra;
// } else if (cpu === 2) {
//     cpu = papel;
// } else {
//     cpu = tijera;
// }

// let resultado = function (user, cpu) {
//     if (user != cpu) {
//         if ((user === piedra) && (cpu === tijera)) {
//             confirm("Ganaste con " + user);
//         } else if ((user === tijera) && (cpu === papel)) {
//             confirm("Ganaste con " + user);
//         } else if ((user === papel) && (cpu === piedra)) {
//             confirm("Ganaste con " + user);
//         } else {
//             alert("Perdiste!!")
//         }

//     } else {
//         alert("Empate");
//     }
// }

// resultado(user, cpu);
