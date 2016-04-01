"use strict";
var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface({
input: process.stdin, 
output: process.stdout 
});
console.log("Bonne Souir,you are in Head or Tail");
var q =  Math.floor(Math.random() * 2);
var answerRight;
switch (q) {
	case 0: {answerRight="H"; break;}
 	case 1: {answerRight="T"; break;}
	}
var data = "\nRight answer="+answerRight;
fs.appendFile("log.txt",data, function(err){ if (err) console.error("err")});
rl.question('Head or Tail? (H|T)', function(answer) {
rl.prompt();
//String(answer);
answer.toUpperCase();
if (!((answer=="H")||(answer=="T"))){ 
	console.log("Incorrecting answer")
	fs.appendFile("log.txt","\tIncorrecting answer", function(err)
	{
	if (err)
 		console.error("err")});
	} else{
	if (answer==answerRight) console.log("You WIN!!!"); 
			    else console.log("Sorry, you lose");
var data = "\tPlayer answer="+answer;
fs.appendFile("log.txt",data, function(err){ if (err) console.error("err")});
}
rl.close();
});
