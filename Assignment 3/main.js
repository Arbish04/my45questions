var personName2 = "arbish";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
