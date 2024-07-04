const user ={
    name :'Atir',
    email : 'atir@mail.com',
    password:'abc123',
    age:24,
}
const user1 ={
    name :'Suhail',
    email : 'suhail@mail.com',
    password:'abc123',
    age:26,
}
const user2 ={
    name :'David',
    email : 'David@mail.com',
    password:'abc123',
    age:24,
}
const user3 ={
    name :'jhonwick',
    email : 'jhon@mail.com',
    password:'abc123',
    age:27,
}
console.log(user);
console.log(user.name);
user.address = 'Lucknow';
user.age=20;
console.log(user);

user['roll-no']=24564;
console.log(user['roll-no']);

const key = 'address';
console.log(user[key]);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const cont = {
    num:4578566,
    num1:54879664,
}
console.log(cont);

user.contacts = ['875445214','875456554'];
console.log(user.contacts);



const smartphone = {
   brand : 'Iphone' ,
   model: ' Iphone16',
   price:'79999',
   colors:['green','white','black']
}


console.log(smartphone.colors[1][2])

// Remove green and add two colors of green

smartphone.colors.splice(0,1,'light green','dark green');
console.log(smartphone.colors)


const smartphoneArray =[
   { brand : 'Iphone' ,
    model: ' Iphone16',
    price:'79999',
 RAM:['6gb','8gb'],
    colors:['green','white','black']

},
   { brand : 'MI' ,
    model: ' POCOX@',
    RAM:['8gb','16gb'],
    price:'16000',
    colors:['green','white','black']

},
   { brand : 'ONEPLUS' ,
    model: ' NORDCE3',
    RAM:['8gb','16gb'],
    price:'60000',
    colors:['BLUE','white','Orange']

},
   { brand : 'SAMSUNG' ,
    model: ' GALAXYSE3',
    RAM:['8gb','16gb'],
    price:'79999',
    colors:['pink','blue','black']

},
   { brand : 'MOTOROLA' ,
    model: ' MOTOZEE',
    RAM:['6gb','8gb'],
    price:'25000',
    colors:['green','white','black']

},
];
console.log(smartphoneArray.length);

//Access price of the 2nd smartphone
console.log(smartphoneArray[1].price)

// add new color on smartphone
smartphoneArray[2].colors.push('Black');
console.log(smartphoneArray[2].colors);

// Create an array containing all the brands of smartphone
const brands=smartphoneArray.map((a)=>{
    return(a.brand);

});
console.log(brands);

// use filter for all smartphones which is containing white color
console.log(smartphoneArray.filter((phone)=>{return phone.colors==='white'}));
// console.log(['a','b','c'].includes('d'));





// console.log(Object.keys(user1));
// console.log(Object.keys(user2));


