const arr = [1,2,3]

const result = arr.reduce((acc, currval)=>{
    console.log(`acc:${acc}, current value: ${currval}`)
    return acc+currval
}, 2)//2 is intial value of the accumulator 
//sum is 8
console.log(result);



const courseCart = [
    {
        course:'js',
        price:2333
    },
    {
        course:'py',
        price:233
    },
    {
        course:'ds',
        price:12333
    },
    {
        course:'dev',
        price:233
    }
]

const totalPrice = courseCart.reduce((acc, item)=> item.price +acc, 0)
console.log(totalPrice);
