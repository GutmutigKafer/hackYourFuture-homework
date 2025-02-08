// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2010;
let dogYearFuture = 2025;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === true) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`);
}
else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}
