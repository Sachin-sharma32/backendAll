/// backend
// creating web application ( site with backend )
// web site -> static web page ( no backend )
// run js on the server side rather than displaying the js code on the browser ( console ) of the user a logic is ran
/// node js
// allows js interact with the computer hardware
// allow js to run outside the browser
// executing file in terminal-> node app.js      ( create a REPL -> console )
// type node -> to use the terminal as a console
// nodejs.org/api/  -> built in modules which we can use

/// using file system module
const fs = require("fs");
// copy file day into another file ( auto create file2 )
fs.copyFileSync("file.txt", "file2.txt");

/// npm
// import modules outside nodejs ( if download nodejs then npm installed auto )
// initialising npm ->  npm init -y
// npm.com -> find modules ( superheroes )

// superhero module
const superheroes = require('superheroes');
console.log(superheroes.all);
console.log(superheroes.random());


console.log('hello sachin');