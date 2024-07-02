// const fruits =['Mango','Banana','Apple','Orange','Pineapple','Grapes','Papaya'];
// console.log(fruits);
// const index = fruits.indexOf('Orange');
// console.log(fruits.indexOf('Papaya'));
// console.log(fruits.slice(index));

const nums = [36,19,10,2,6,12,48];

for(let i=0; i < nums.length; i++) {
    console.log( nums[i] );
}

console.log(('----------------'));
for(let n of nums)
{
    console.log(n);
}
console.log('----------using for each function-------------')
nums.forEach((a,i)=>{console.log(a,i);});
nums.forEach((a)=>{console.log(a*a);});
nums.forEach(a=>{console.log(a**2);});


//create a new array containing only even numbers
const Newnums = [];

nums.forEach((n)=>{
if(n%2==0){
    Newnums.push(n);
}
});
console.log(Newnums);


// Two Operations --> map & Filter
