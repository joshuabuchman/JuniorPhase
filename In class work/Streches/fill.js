// create a function that takes an array size and an element you want to fill every position of arr with, and return filled array
// elements are ONLY shallow copies of each other
// const a1=fill(3,true);
// console.log(a1)
// const a2 = fill(4,42)
// console.log(a2)
// const a3 = fill(2,{foo:'bar'})
// console.log(a3[0]===a3[1])
// a3[0].foo='bazz'
// console.log(a3)
// const foo = {bar:7};
// false copy -> (copy===foo) will evaluate to true (point to same obj)
// let copy = foo
// true copy -> (copy===foo) will evaluate to false
// let copy = {...foo};
// console.log (copy['bar'])


const fill = (num, char) =>
{
    let returnArr = [];
    for(let i=0 ;i<num; i++)
    {
        returnArr.push(char)
    }
    return returnArr;
}
  
const otherFill = (num, char) =>
{
    return Array(num).fill(char)
}
  
const fill = (num, char) =>
{
    let returnArr = []
    for(let i=0;i<num;i++)
    {
        // shorthand if statement:
        // (condition) ? (result if true) : (result if false)
        returnArr.push(typeof char==='object' ? {...char} : char);
    }
    return returnArr;
}
