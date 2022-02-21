const word = prompt("Enter a word").toLocaleLowerCase();
const vowels = ["a", "e", "i", "o", "u", "y"];

let i = 0;

word.split("").map((val) => {
	if (vowels.includes(val)) {
		++i;
	}
});

const reverse = word.split("").reverse().join("");

if (reverse === word) {
	console.log(`${word} contains ${i} vowels and is a palindrome`);
} else {
	console.log(`${word} contains ${i} vowels and is not a palindrome`);
}
