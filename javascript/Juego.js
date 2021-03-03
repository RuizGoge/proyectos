let piedra = "Piedra";
let papel = "Papel";
let tijera = "Tijera";
let user = prompt("Que eliges?");
let max = 3, min = 0, random = Math.floor(Math.random() * (max - min + 1) + min);
let cpu = random;
if(cpu === 1){
    cpu = piedra;
}else if(cpu === 2){
    cpu = papel;
}else{
    cpu = tijera;
}

let resultado = function (user, cpu) {
    if (user != cpu) {
        if ((user === piedra) && (cpu === tijera)) {
            confirm("Ganaste con " + user);
        } else if ((user === tijera) && (cpu === papel)) {
            confirm("Ganaste con " + user);
        } else if ((user === papel) && (cpu === piedra)) {
            confirm("Ganaste con " + user);
        } else {
            alert("Perdiste!!")
        }

    } else {
        alert("Empate");
    }
}

resultado(user, cpu);

