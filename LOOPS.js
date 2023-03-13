/*for (let i=1;i<=20;i++)
{
    console.log(`${i}. Zaupash Tariq`)
}*/
var cleanest_cities = ["Islamabad", "Rawalpindi", "Lahore", "Karachi", "Lahore"];
var city = "Multan";
var flag = 0;
for (var i = 0; i < cleanest_cities.length; i++) {
    if (city == cleanest_cities[i]) {
        flag++;
    }
}
if (flag > 0) {
    console.log("".concat(city, " is a clean city"));
}
else {
    console.log("Sorry, ".concat(city, " is not one of the cleanest cities"));
}
