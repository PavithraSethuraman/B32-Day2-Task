//it will take as integer value
console.log(typeof(1)) // number
//it will take as integer value.if we use parseFloat it will take as floating point value
console.log(typeof(1.1)) // number
//inside the “ ” or ‘ ‘ it take it as string value
console.log(typeof('1.1'))
//the result is ‘Boolean’.it has true and false
console.log(typeof(true))
//typeof null is an ‘object’ which gives a wrong impression that,
// null is an object where it is a primitive value.
console.log(typeof(null))
//)- a type check on an undeclared variable used to result in 'undefined'.
// But this is not an error-safe way to deal with it
console.log(typeof(undefined))
//the result is ‘object’.it will take empty square bracket as object 
console.log(typeof([]))
//the result is ‘object’.it will take empty bracket as object
console.log(typeof({}))
//The typeof NaN is 'number'.
console.log(typeof(NaN))
