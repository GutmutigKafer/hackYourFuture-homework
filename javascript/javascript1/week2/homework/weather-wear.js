
// Weather wear

function whatToWear(temperature) {

return (temperature >= 40) ? "You don't need to wear anything!" : (temperature >= 25) ? "You should wear a t-shirt" : (temperature >= 10) ?  "You should wear a sweater" : (temperature >= -5) ? "You should wear a warm jacket" : "You should wear everything you can find!"
}

console.log(whatToWear(10))
