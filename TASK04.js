function Factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log("Factorial of ".concat(num, ":   ").concat(fact));
    return fact;
}
Factorial(6);
