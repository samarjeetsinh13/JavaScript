console.log("Mahadev Mahadev")

const colorsNode = document.querySelectorAll(".color")
const colors = Array.from(colorsNode)
const title = document.querySelector('.title')
const body = document.querySelector('body')
console.log(colors);

colors.forEach((color)=>{
    color.addEventListener('click', (e)=>{
        if(color.id == "c1"){//also do e.target.id
            body.style.backgroundColor = "darkBlue"
            title.style.backgroundColor = "darkBlue"
        }
        else if(color.id == "c2"){
            body.style.backgroundColor = "darkGreen"
            title.style.backgroundColor = "darkGreen"
        }
        else if(color.id == "c3"){
            body.style.backgroundColor = "yellowGreen"
            title.style.backgroundColor = "yellowGreen"        }
        else if(color.id == "c4"){
            body.style.backgroundColor = "darkGoldenRod"
            title.style.backgroundColor = "darkGoldenRod"
        }
    })
})


