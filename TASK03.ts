function Discount(prod_price: number,disc_perc:number)
{
    if(disc_perc>=50)
    {
        return ("Discount percentage is invalid")
    }
let disc=prod_price*(disc_perc/100)
console.log(`Original price: ${prod_price}`)
console.log(`Discount precentage: ${disc_perc}%`)
console.log(`Discount amount: ${disc}`)
}
Discount(2750,15)
