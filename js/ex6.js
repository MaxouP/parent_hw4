const number = parseInt(Math.random() * (100 - 1) + 1);

let i = 0;
let guess = Number(prompt("Choose a number between 1 and 100"));

if (guess) {
	while (guess != number) {
		if (guess < number) {
			guess = prompt("Too low, guess again");
		} else {
			guess = prompt("Too high, guess again");
		}
		++i;
	}
  console.log('Correct');
} else {
	console.log("Invalid entry");
}
