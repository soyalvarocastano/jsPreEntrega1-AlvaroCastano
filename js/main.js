

const name = prompt("Ingrese su nombre");

let payPerHours;
do {
    payPerHours = parseFloat(prompt("Ingrese su pago x horas"));
    if (payPerHours > (3000000 / 30 / 8)) {
        alert("Su pago por hora es muy elevado, tenga en cuenta que lo máximo que puede ganar por mes es 3000000.");
    }
} while (payPerHours > (3000000 / 30 / 8));

let hoursWorked;
do {
    hoursWorked = parseInt(prompt("Ingrese cantidad de horas trabajadas x día"));
    if (hoursWorked > 8) {
        alert("Ya registró el máximo de horas por día. Por favor, ingrese nuevamente.");
    }
} while (hoursWorked > 8);


let daysWorked;
do {
    daysWorked = parseInt(parseInt(prompt("Ingrese cantidad de días trabajados")));
    if (hoursWorked > 8) {
        alert("La cantidad maxima de dias trabajaod son 30.");
    }
} while (daysWorked > 30);

const sueldoTotal = (payPerHours, hoursWorked, daysWorked) => {
    return (payPerHours * hoursWorked) * daysWorked;
};

const sueldo = sueldoTotal(payPerHours, hoursWorked, daysWorked);

alert(name + ", su sueldo es: " + sueldo);




