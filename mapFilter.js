const nums = [36,19,10,2,6,12,48];

//Map

const squares = nums.map((n)=>{ return n**2});
console.log(squares);


const Evennum = nums.filter((n)=>
    (n%2==0)
);
console.log(Evennum);

//Q1
const prices =[23.88,274.40,888.9,274.2121,99.99];
const intPrices = prices.map(p => {return parseInt(p)});
console.log(intPrices);

const Evennum1 = nums.filter((n) => {return n%2==0});
console.log(Evennum1);

const prices1 = prices.filter(p => {return (p>50 && p<300)});
console.log(prices1)