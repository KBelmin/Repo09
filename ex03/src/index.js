function myEqualFunction(num) {
    if(num === 23){
        return "Equal";
    }
    return "Not equal";
}

console.log(myEqualFunction(5));
myEqualFunction(5);

console.log(myEqualFunction(23));
myEqualFunction(23);

console.log(myEqualFunction("23"));
myEqualFunction("23");

console.log(myEqualFunction('23'));
myEqualFunction('23');

console.log(myEqualFunction("text"));
myEqualFunction("text");

module.exports = myEqualFunction;