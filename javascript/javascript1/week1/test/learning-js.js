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


// My Experiment

function generateWord(input) {
    // Improved hash function using DJB2 algorithm
    let hash = 5381;
    for (let i = 0; i < input.length; i++) {
        hash = (hash << 5) + hash + input.charCodeAt(i);
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    
    // Improved seeded random generator
    class SeededRandom {
        constructor(seed) {
            this.seed = seed;
        }
        next() {
            this.seed = (this.seed * 9301 + 49297) % 233280;
            return this.seed / 233280;
        }
    }
    const rng = new SeededRandom(hash);

    // Generate consistent length based on input
    const length = 3 + (Math.abs(hash) % 7); // Word length between 3-9 characters

    const word = [];
    let lastChar = null;
    let sameConsonantCount = 0;
    let consecutiveConsonants = 0;

    for (let i = 0; i < length; i++) {
        let isVowel = rng.next() < 0.5;
        if (consecutiveConsonants >= 2) isVowel = true;
        if (i === 0) isVowel = false; // Start with consonant

        if (isVowel) {
            const vowel = vowels[Math.floor(rng.next() * vowels.length)];
            word.push(vowel);
            lastChar = vowel;
            sameConsonantCount = 0;
            consecutiveConsonants = 0;
        } else {
            let consonant;
            do {
                consonant = consonants[Math.floor(rng.next() * consonants.length)];
            } while (consonant === lastChar);
            
            word.push(consonant);
            lastChar = consonant;
            consecutiveConsonants++;
        }
    }

    // Add unique suffix based on hash
    const suffix = consonants[Math.abs(hash) % consonants.length] + 
                  vowels[Math.abs(hash) % vowels.length];
    word.push(suffix);

    return word.join('');
}
  
  console.log(generateWord('love'));
  console.log(generateWord('jazz'));
  console.log(generateWord('flux'));
  
  console.log("0.  " + generateWord('a'));
  console.log("1.  " + generateWord('flux'));
  console.log("2.  " + generateWord('jazz'));
  console.log("3.  " + generateWord('elephant'));
  console.log("4.  " + generateWord('xylophone'));
  console.log("5.  " + generateWord('aether'));
  console.log("6.  " + generateWord('zigzag'));
  console.log("7.  " + generateWord('sun'));
  console.log("8.  " + generateWord('tranquil'));
  console.log("9.  " + generateWord('crystalline'));
  console.log("10. " + generateWord('yacht'));
  console.log("11. " + generateWord('serendipity'));
  console.log("12. " + generateWord('bubble'));
  console.log("13. " + generateWord('nightmare'));
  console.log("14. " + generateWord('shadow'));
  console.log("15. " + generateWord('symphony'));
  console.log("16. " + generateWord('conundrum'));
  console.log("17. " + generateWord('extraterrestrial'));
  console.log("18. " + generateWord('plasma'));
  console.log("19. " + generateWord('labyrinth'));
  

