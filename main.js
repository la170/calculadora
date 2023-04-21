const num = document.getElementById('num1')
const operando = document.getElementById('operando')
const display = document.getElementById('display')
const botones = document.querySelector('.calculadora__botones')
let num1 = ""

botones.addEventListener('click',(evento)=>{
    if (isNaN(num.value)){
        alert('Ingrese un número')
    }
    else if(evento.target.id=='suma'){
        operando.textContent= '+'
        num1 += num.value
        num.value = ' '
    }else if(evento.target.id=='rest'){
        operando.textContent= '-'
        num1 += num.value
        num.value = ' '
    }else if(evento.target.id=='divi'){
        operando.textContent= '/'
        num1 += num.value
        num.value = ' '
    }else if(evento.target.id=='mult'){
        operando.textContent= '*'
        num1 += num.value
        num.value = ' '
    }else if(evento.target.id=='limpiar'){
        num.value=''
        operando.textContent=''
        display.textContent=''   
    }
    
// 
    if(evento.target.id == 'igual'){
        if(operando.textContent == '+'){
            display.textContent = (+num1 + +num.value)
        }else if(operando.textContent== '-'){
            display.textContent = (+num1 - +num.value)
        }else if(operando.textContent == '/'){
            display.textContent = (+num1 / +num.value)
        }else if (operando.textContent == '*'){
            display.textContent = (+num1 * +num.value)
        }
    }
})

