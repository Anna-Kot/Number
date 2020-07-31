let radius = prompt('Введiть радiус круга');
let getArea = function() {
    if (isNaN(radius)) {
        return `Повинно бути числове значення`
    }
    else if (radius === '') {
        return `Будь ласка, введiть радiус круга`
    }
    else if(radius<=0) {
        return `Ви ввели неправильний радiус`
    }
    else {
        return `Площа круга = ${Math.PI*Math.pow(radius,2)}`
    }
}
console.log(getArea());