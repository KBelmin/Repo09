function switchCase(letter) {
    var animals =" ";
    switch(letter) {
        case "a": animals = "antilope";
        break;
        case "b": animals = "bird";
        break;
        case "c": animals = "car";
        break;
        case "d": animals = "stuff";
        break;
        default: animals = "stuff";
        break;
    }
    return animals;
}
console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));
module.exports = switchCase;