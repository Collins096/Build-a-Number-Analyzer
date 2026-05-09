console.log("===== NUMBER ANALYZER JS =====");

// COUNT FROM 1 TO 20
console.log("\nNumbers from 1 to 20:");

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// EVEN AND ODD CHECKER
console.log("\nEven and Odd Check:");

for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is Even`);
  } else {
    console.log(`${i} is Odd`);
  }
}

// FIND TOTAL SUM
console.log("\nCalculating Total Sum:");

let total = 0;

for (let i = 1; i <= 50; i++) {
  total += i;
}

console.log(`Sum from 1 to 50 is: ${total}`);

// MULTIPLICATION TABLE
console.log("\nMultiplication Table of 7:");

for (let i = 1; i <= 12; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// COUNTDOWN USING WHILE LOOP
console.log("\nCountdown:");

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

console.log("Blast Off! 🚀");

// STAR PATTERN USING NESTED LOOPS
console.log("\nTriangle Pattern:");

for (let i = 1; i <= 6; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}

// ARRAY LOOP
console.log("\nFavorite Programming Languages:");

const languages = ["JavaScript", "Python", "Java", "C++"];

for (const language of languages) {
  console.log(language);
}

console.log("\nProject Finished Successfully!");