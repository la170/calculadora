const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operando = document.getElementById('operando')
const display = document.getElementById('display')
const botones = document.querySelector('.calculadora__botones')

botones.addEventListener('click',(evento)=>{
    if (isNaN(num1.value) && isNaN(num2.value)){
        display.textContent = 'Error'
        alert('Ingrese un número')
    }else if(evento.target.id=='suma'){
        operando.textContent= '+'
    }else if(evento.target.id=='rest'){
        operando.textContent= '-'
    }else if(evento.target.id=='divi'){
        operando.textContent= '/'
    }else if(evento.target.id=='mult'){
        operando.textContent= '*'
    }
// 
    if(evento.target.id == 'igual'){
        if(operando.textContent == '+'){
            display.textContent = (+num1.value + +num2.value)
        }else if(operando.textContent== '-'){
            display.textContent = (+num1.value - +num2.value)
        }else if(operando.textContent == '/'){
            display.textContent = (+num1.value / +num2.value)
        }else if (operando.textContent == '*'){
            display.textContent = (+num1.value * +num2.value)
        }
    }
})