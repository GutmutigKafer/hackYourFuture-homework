// Return the Next Number from the Integer Passed

function addition(num) {
    return num + 1;
}

//* console.log(addition(10));

//Bitwise Operations

const n1 = 0b00010110;
const n2 = 0b00001111;

function bitwiseAND(n1, n2) {
	return (n1 & n2).toString(2);
}

function bitwiseOR(n1, n2) {
	return (n1 | n2).toString(2);
}

function bitwiseXOR(n1, n2) {
	return (n1 ^ n2).toString(2);
}

//*  console.log(bitwiseAND(n1, n2), bitwiseOR(n1, n2), bitwiseXOR(n1, n2));




function checkAge(age) {
    return (age > 18) ? true : 'Did parents allow you?';
}
// console.log(checkAge(15))



// console.log("    -----------    ")


function checkAge(age) {
    return (age > 18) || 'Did parents allow you?';
}
// console.log(checkAge(21))


// console.log("    -----------    ")

function minValue(a,b) {

return (a < b) ? a : b;
}
// console.log(minValue(10,10))


// console.log("    -----------    ")


function pow(m, n){
    return Math.pow(m, n);
}
// console.log(pow(7, 5));




function nameJS(name){

    if (name === "ECMAScript") {
       return response = "Right!"
    }
    else {
        return response = "Wrong!" 
    }
}
// console.log(nameJS("ECMAScript"))


function belowOver(a, b, c) {

    return a + b < c ? "Below" : "Over";
}
console.log(belowOver(5, 6, 15));

