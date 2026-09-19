console.log("Mahadev Mahadev")

const height = document.querySelector('#height')
const weight = document.querySelector('#weight')

const calculate = document.querySelector('#calculate')

const result = document.querySelector('#result')

calculate.addEventListener('click', (e)=>{


    if(height.value == null || weight==null){
        alert("please enter the value")
        return
    }else if(height.value <= 0 || weight <= 0){
        alert("please enter the valid value")
        return
    }
    
    let h = height.value/100
    let w = Number(weight.value)

    const BMI = (w/(h*h)).toFixed(2)

    console.log(BMI)


    if(BMI < 18.5){
        result.innerText = ''
        result.appendChild(document.createTextNode(`Under Weight, BMI:${BMI}`))
        result.style.opacity = 1
    }
    else if(BMI >= 18.5 && BMI <24.9){
        result.innerText = ''
        result.appendChild(document.createTextNode(`Healthy, BMI:${BMI}`))
        result.style.opacity = 1
    }
    else if(BMI >= 25 && BMI < 29.9){
        result.innerText = ''
        result.appendChild(document.createTextNode(`Over Weight, BMI:${BMI}`))
        result.style.opacity = 1
    }
    else if(BMI >= 30){
        result.innerText = ''
        result.appendChild(document.createTextNode(`Obesity, BMI:${BMI}`))
        result.style.opacity = 1
    }
})
