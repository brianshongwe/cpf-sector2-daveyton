
const prompt = require('prompt-sync')();

let username = "kabelo"
let password = "pass"

console.log( "Welcome to our first app")
console.log("")


let username_prompt = prompt('What is your username?');
let password_prompt = prompt('What is your password?');

if (username_prompt === username && (password_prompt === password)){
    console.log("You are logged In")
}else{
    console.log("Wrong password or username")
}
