// Example 4
console.log("Num 4");
for (let j = 5; j >= 1; j--) {
  let spaces = " ".repeat(5 - j);
  let stars = "*".repeat(j + 1 - 1);
  console.log(stars + spaces);
}

// Example 5
console.log("Num 5");
for (let j = 1; j <= 5; j++) {
  let spaces = " ".repeat(5 - j);
  let stars = "*".repeat(j + 1 - 1);
  console.log(spaces + stars);
}
for (let j = 4; j >= 1; j--) {
  let spaces = " ".repeat(5 - j);
  let stars = "*".repeat(j + 1 - 1);
  console.log(spaces + stars);
}

// Example 6
console.log("Num 6");
for (let j = 1; j <= 5; j++) {
  let spaces = " ".repeat(5 - j);
  let stars = "*".repeat(2 * j - 1);
  console.log(spaces + stars);
}
for (let j = 4; j >= 1; j--) {
  let spaces = " ".repeat(5 - j);
  let stars = "*".repeat(2 * j - 1);
  console.log(spaces + stars);
}

// Example 7
console.log("Num 7");
let stars7 = "*".repeat(7);
console.log(stars7);
for (let j = 7; j >= 1; j--) {
  gaps7 = " ".repeat(6);
  console.log(gaps7 + "*");
}

// Example 8
console.log("Num 8");
let star8 = "*".repeat(7);
console.log(star8);
for (let j = 7; j >= 1; j--) {
  gaps8 = " ".repeat(6);
  console.log("*" + gaps8);
}
