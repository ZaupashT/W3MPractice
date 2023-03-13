/*for (let i=1;i<=20;i++)
{
    console.log(`${i}. Zaupash Tariq`)
}*/

let cleanest_cities=["Islamabad","Rawalpindi","Lahore","Karachi","Lahore"]
let city="Multan"
let flag=0
for(let i=0;i<cleanest_cities.length;i++)
{
    if(city==cleanest_cities[i])
    {
        flag++
    }
}
    if(flag>0)
    {
        console.log(`${city} is a clean city`)
    }
    else
    {
        console.log(`Sorry, ${city} is not one of the cleanest cities`)
    } 