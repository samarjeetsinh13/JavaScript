console.log("Mahadev Mahadev");


const clock = document.querySelector('#clock-display')
console.log(clock.innerHTML);

setInterval(function(){
    const time = new Date()
    clock.innerHTML = time.toLocaleTimeString()
}, 1000)
