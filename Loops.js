for( let i = 0; i<=10 ; i++){
    console.log(i);
}
console.log('------------while---')
let n=10;
while(n<=20){
console.log(n);
n=n+2;
}

console.log('-------Do-while loop------') 
const k =10;
do{
console.log(k)
}

while(k>20);

console.log('------------for-of-loop');
const nums = [15,25,14,24];
for(let a of nums){
    console.log(a);
}

function addNums(a , b ){
    c = a + b;
    console.log(c);
}

addNums(25,10);
// 

const getAvg = function(a1,a2,a3,a4=4){
    const avg =(a1+a2+a3+a4)/4;
    // console.log(avg);
    return avg;
}
const res = getAvg(24,12,15,);
console.log(res);
// You can also use a default value
const fact = (n)=>{
    let f = 1;
    for(let i=2;i<=n;i++){
        f*=i;
    }
    return f;
}
const ans = fact(5);
console.log(ans);
// array destructing
let [e,f,g] = [5,4,7];
console.log(e);
[f,g]=[g,f];
console.log(f,g);


const getreport = (m1,m2,m3,m4, max=100)=>{
    const avg = getAvg(m1,m2,m3,m4);
    const percentage = avg/max * 100;
    return [avg,percentage];
}
 const[v1,v2]=getreport(134,156,78,90);
 console.log(v1,v2);

 //WAP to take start and end as parameter and print all numbers divisible by 7 and sum of all divisible numbers
 const divisible =(start , end)=>{
    let sum = 0;
    for( let i=start; i<end;i++){
        if(i%7===0){
            console.log(i);
        sum = sum + i;

        }

    }


 }



