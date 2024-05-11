// var guestArr = ["Ali", "Haseeb", "nono", "sana"];
// guestArr.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner")); });
// var guestlist = ["ahsan", "hamza", "sana"];
// var canNotAttend = "sana";
// console.log(canNotAttend + "can not attend the dinner");
// var newGuest = "ayesha";
// guestlist[guestlist.indexOf(canNotAttend)] = newGuest;
// guestlist.map(function (items) {
//     return console.log("Dear ".concat(items, ", you are invited to the dinner."));
// });
// Exercise 15 (Extended)

// Initial guest list
let guests: string [] = ["Alice", "Bob", "Charlie", "David"];

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table.\n");

// Add one new guest to the beginning of the list
guests.unshift("Frank");

// Add one new guest to the middle of the list
guests.splice(Math.floor(guests.length / 2), 0, "Grace");

// Add one new guest to the end of the list using push()
guests.push("Henry");

// Print new set of invitations
console.log("Final Invitations:");
for (let guest of guests) {
    console.log(`Dear ${guest}, please come to dinner.`);
}
console.log("Invitations; Final Invitations:");
