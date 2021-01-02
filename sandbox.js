const now = new Date();

// console.log(dateFns.isToday(now));

// formating options
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

// Comparing dates
const before = new Date("Decemeber 29 2020 13:17:00");

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
