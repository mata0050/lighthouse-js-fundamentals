const whichSchool = function(age){
  if(age >=1 && age < 13 ){
    return "Elementary School"
  }else if(age >= 13 && age <=18){
    return "Secondary School"
  }else if(age <= 100){
   return "Lighthouse Labs"
  }
}


console.log("I am 35. Which school should I go to?");
console.log(whichSchool(30));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(12));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(19));

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 


const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting)