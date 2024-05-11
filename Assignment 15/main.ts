// var guestArr = ["Ali", "Haseeb", "nono", "sana"];
// guestArr.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner")); });

let guestlist: string[] = ["ahsan","hamza","sana"];
let canNotAttend: string = "sana"
console.log(canNotAttend   +    "can not attend the dinner");
let newGuest: string = "ayesha";
guestlist [guestlist.indexOf(canNotAttend)] = newGuest;
guestlist.map((items)=>
    console.log(`Dear ${items}, you are invited to the dinner.`));
