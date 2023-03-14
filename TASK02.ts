let alphabets = ["a","b","c","d","e","f"]
console.log(`Orginial array: ${alphabets}`)

alphabets.push("g")
console.log(`Appending to end of array: ${alphabets}`)

alphabets.unshift("x")
console.log(`Prepending to beginning of array: ${alphabets}`)

alphabets.splice(2,3,"Z")
console.log(`Removal and Insertion at specific index: ${alphabets}`)