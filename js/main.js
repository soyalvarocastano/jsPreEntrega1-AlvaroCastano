function holaMundo(){
    console.log("hola mundo")
}

holaMundo()

const nombre = prompt("Ingrese su nombre");
const pagoXhora = parseFloat(prompt("Ingrese su pago x horas"));
const horasTrabajadas = parseInt(prompt("Ingrese cantidad de horas trabajadas x dia"));
const diasTrabajados = parseInt(prompt("Ingrese cantidad de dias trabajados"));



const sueldoTotal = (pagoXhora, horasTrabajadas,diasTrabajados) => {
    let sueldo = ((pagoXhora * horasTrabajadas) * diasTrabajados)
    console.log("estoy aqui")
    console.log("su sueldo es:" + sueldo)
    return sueldo;
}

alert( nombre + "su sueldo es:" + sueldo);