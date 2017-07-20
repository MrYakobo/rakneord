# Räkneord - package for textifying numbers in Swedish

This is a package that makes textifying numbers in Swedish a breeze.

It comes with the three below "modes", which are different ways to say a number.

### Modern:
	1997: nittonhundranittiosju
	2017: tvåtusensjutton

### Traditional:
	1997: nittonhundranittiosju
	2017: tjugohundrasjutton

### Counting:
	1997: etttusennittiosju
	2017: tvåtusensjutton

As one can see,

	modern = n < 2000 ? traditional : counting

 `Modern` and `Traditional` are especially useful when speechifying years, whilst `Counting` is more useful for objectively speechifying a number.

## Installation
	npm install räkneord

## Usage
	var räkneord = require('räkneord')

	räkneord.modern();
	console.log(räkneord(1997)) //nittonhundranittiosju
	console.log(räkneord(2017)) //tvåtusensjutton

	räkneord.traditional();
	console.log(räkneord(1997)) //nittonhundranittiosju
	console.log(räkneord(1997)) //tvåtusensjutton

	räkneord.counting();
	console.log(räkneord(1997)) //etttusenniohundranittiosju
	console.log(räkneord(2017)) //tvåtusensjutton

## License
MIT
