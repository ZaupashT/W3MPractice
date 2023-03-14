var alphabets = ["a", "b", "c", "d", "e", "f"];
console.log("Orginial array: ".concat(alphabets));
alphabets.push("g");
console.log("Appending to end of array: ".concat(alphabets));
alphabets.unshift("x");
console.log("Prepending to beginning of array: ".concat(alphabets));
alphabets.splice(2, 3, "Z");
console.log("Removal and Insertion at specific index: ".concat(alphabets));
