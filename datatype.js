// Data types
// 1. strings
// these represent textaul data
// examples
let dogName = "Rex";
console.log(dogName)


// working with strings
console.log("he said,'hi there'")
console.log("he said,\"hi there\"")
console.log("he said,'hi there'")
console.log('he said,\'hi there\'')

let num3 = "5"
console.log(typeof num3)

// NUMBER
// An integer or a floating point number
// eg 2,8,9,2e-5

// UNDEFINED
// A data type whose variable is not initialised
// eg
let a;
let ab = undefined;
console.log("a")
console.log("ab")

// NULL
// It demotes a null value
let b = null;
console.log(typeof b)

// boolen 
// Any of two values i.e true or false
// example true and false

let num4 = 5;
let num5 = 5;
let num6 =2;
console.log(num4==num5)
console.log(num4==num6)
console.log(num6>num4)

// Bigint
// An integer with abituarly lenghth
// a big number

// symbol
// Data type whose instances are unique and imutable
let value = Symbol("how are you")

// Object
// key - value pair of a collection of data
let student = {firstName:"Trevor",lastName:"Nakibuka"}

// literals
// not a data type
// examples
"how are you" //string literal
1.2 //numeric literal
true //boolean literal
// {a:1,b:2,c:3}  //object literal
 [1,2,3,4,8] //array literal
 undefined  //undefined literal 


//  Deletng properties of an object
// delete removes the key value pair from the object and returns  true.
// unless it cannot delete the property ie if the property is non configurable.
console.log(delete person.age)
console.log(person)
console.log(person)

// Object immutabilityb
// you can not change assignment to a constant variable.
// const declaration prohibits what thing the constant changes to, but it does not prohibit changing the content
// thus we can change a prooperty in a constant object but we cant change which object points to

const myObject ={girl:"Monica", gender:"female"}
console.log(myObject)
myObject.girl ="Mellon"
console.log(myObject)
myObject ={ height:"150cm", color:"chocolate"}


// object freeze
// the object. freeze method is used to freeze an object.
// freezing an object does not allow new properties to be added
// to the object and prevents removing or altering the existng properties.
// Object.freeze preserves the enumerability, configuribility, writability and prototypes of the Object.
const myObject2 = Object.freeze({boyName:"justus", age:22, cty:"mbarara"})
myObject2.boyName = "mark"
myObject2.city = "kampala"
// create two string variables

// use concatenations
// use escape characters
// a. create three objects with two properties each ie

//b. 
// delete one property 