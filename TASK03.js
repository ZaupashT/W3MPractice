function Discount(prod_price, disc_perc) {
    if (disc_perc >= 50) {
        return ("Discount percentage is invalid");
    }
    var disc = prod_price * (disc_perc / 100);
    console.log("Original price: ".concat(prod_price));
    console.log("Discount precentage: ".concat(disc_perc, "%"));
    console.log("Discount amount: ".concat(disc));
}
Discount(2750, 15);
