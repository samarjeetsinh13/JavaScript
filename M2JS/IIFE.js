//Imediately Invoked Fucntion Expression(IIFE)
//iife use for remove the polution created in globle scope

(function iife(){
    console.log(`DB connected`);
})();
//if we want to write two iife together ; are compulsory for end the first iife
((name)=>{
    console.log(`hello guys my name is ${name}`)
})('samarjeetsinh')