const fs = require('fs');

let a = fs.readFileSync('a.json');
let b = JSON.parse(a);

b.a += 1;

let c = JSON.stringify(b, null, 2);

fs.writeFileSync('a.json', c);

console.log(b);