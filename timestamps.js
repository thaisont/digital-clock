const before = new Date("February 1 2019 7:30:59");
const now = new Date();

//console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins);
console.log(hours);
console.log(days);

console.log(`The blog was written ${days} days ago`);

// converting timeStamps into date object

const timeStamps = 60246453604;

console.log(new Date(timeStamps));
