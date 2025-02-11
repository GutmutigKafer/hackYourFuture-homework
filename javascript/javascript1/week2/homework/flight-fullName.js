
//Flight booking fullname function

function getFullName(firstName, lastName, gender, useFormalName) {

   if (gender === "Female") {

    if (useFormalName === true) {
    return `Madame ${firstName} ${lastName}`;
    }

    return `${firstName} ${lastName}`;
    }

    else if (useFormalName === true) {
        return `Monsieur ${firstName} ${lastName}`;
        }
        return `${firstName} ${lastName}`;
        
    }


let fullname1 = getFullName("Vlad", "Krichman", "Male", false);
let fullname2 = getFullName("Maria", "Kristensen", "Female", true);
let fullname3 = getFullName("Esther", "Nissen", "Female", false);
let fullname4 = getFullName("Francesc", "Sarda", "Male", true);


console.log(` ${fullname1} \n ${fullname2} \n ${fullname3} \n ${fullname4} `);


