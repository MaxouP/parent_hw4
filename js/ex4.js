let arr = [];
let word = prompt("Enter a word");

while (word.toLocaleLowerCase() != "stop") {
	arr.push(word);
	word = prompt("Enter a word");
}

if (arr.length > 0) {
  console.log('you entered th following words:');
  arr.map(val => console.log(val));
} else {
  console.log('No words to display, Stop was the first word entered')
}