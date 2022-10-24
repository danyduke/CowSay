let user1 = require("./information");

let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello, ${user1.name} from ${user1.campus}`,
    e: "oO",
    T: "U ",
  })
);
