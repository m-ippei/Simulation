const fs = require('fs');

let a = fs.readFileSync('人.json');
let b = JSON.parse(a);

b.所持金 += 100;

let c = JSON.stringify(b, null, 4);

fs.writeFileSync('b.json', c);

console.log(b);