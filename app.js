console.log("node js introduction ");
const { error } = require("console");
//node js core module
let fs = require("fs");
// console.log(fs);
fs.readdir("./", (error, file) => {
  if (error) console.log("Error", error);
  else console.log("Result", file);
});

//NodeJs thirdParty Module
const uuid = require("uuid");
let users = [
  {
    name: "sahar",
    lastName: "kachoukh",
    uuid: uuid.v4(),
  },
  {
    name: "sourour",
    lastName: "kachoukh",
    uuid: uuid.v4(),
  },
];
console.log(users[0]);
console.log(users[1]);

//nodeJs local module
let myFunction = require("./myFunction");
console.log("my sum function returns", myFunction.sum(2, 8));
console.log("fonction moins returns", myFunction.moins(8, 1));
