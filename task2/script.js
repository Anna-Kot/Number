let num_sqrt = prompt('Введiть число');
let getSqrt = function() {
    if (isNaN(num_sqrt)) {
        return `Повинно бути числове значення`
    }
    else if (num_sqrt === '') {
        return `Будь ласка, введiть число`
    }
    else if(num_sqrt<0) {
        return `Введiть додатне число`
    }
    else {
        return `Квадратний корiнь з числа ${num_sqrt} = ${+Math.sqrt(num_sqrt).toFixed(3)}`
    }
}
console.log(getSqrt());