function Factorial(num:number):number
{
    let fact: number =1
    for(let i=1;i<=num;i++)
    {
        fact=fact*i
    }
    console.log(`Factorial of ${num}:   ${fact}`)
    return fact
}

Factorial(6)