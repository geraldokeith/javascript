// there are a number of operations available for stings 
// converting a string to uppercase or lowercase
// removing specified characters
// determining the length or number of x-ters for a string 
// taking the alphabetical ordering of string values
// removing leading or trailing white space from

// 1. STRING DECLARATION
let messi = "goat";

// 2. ESCAPE SEQUANCES(\)
let trevor = "you will \"be the best\"";
console.log(trevor)

// 3. CONCATINETION(Joining two strings)
let mbappe = "mid";
let halaand = "robot";
console.log(mbappe + " " + halaand)
// Note that the strings are used for spacing                 

// 4. STRING LITERALS
let penny = "happy";

// 5. STRING INTERPOLATION (MERGING JAVASCRIPT EXPRESSIONS WITH STRINGS)
// The basic syntax is:
// `something ${expression} something`
let age = 25;
console.log(`joseph is ${age} years old`)
 
// 6.STRING METHODS
//  (A) String length
// The length property
let myString = "abcdefghijklmnopqrstuvwxyz";
console.log("the length of this string is..", myString.length)

//  (B)Extracting parts of string
// slice(start,end) and substring(start,end)these 
console.log(myString.slice(7,13))

// data type inversion
 let num7 = "4";
 let num6 = 2;
console.log(num7 + num6)
console.log(num7 + num6)

// OBJECTS
// Store a collection of key value pairs
// each item in the collection has a name that we call
let person={pastName:"Jeremy" , age:12 ,  hobbies:["football","movies"]}

//ACCESSING PROPERTIES OF AN OBJECT
// 1. DOT NOTATION
console.log(person.age)

// 2. BRACKET NOTATION
console.log(person["age"])
// ADDING PROPERTIES TO ANOBJECT
person.height = "5ft3in"
 console.log(person)
 person["gender"] = "male"
 console.log(person)
//  https://github.com/TrevorXPN/Introduction-to-html.git