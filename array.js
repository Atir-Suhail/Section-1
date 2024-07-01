// Indexing
const movies = ['300','Mission Impossible','Deadpool','Expendables','3 Idiots','Inception', ];
console.log( movies[3] );
console.log(movies.at(-2));
console.log(movies.indexOf('300'));
movies[2] = 'Deadpool & Wolverine';
console.log(movies);

// Slicing
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice(-4,));
console.log(movies.slice(-4,-2));
console.log(movies.slice(-7,-2));
console.log(movies.slice());


// Length Of String
console.log('Atir'.length);
console.log(movies[2].slice(-9));

// Adding and Removing of ELements

movies.push('Kanchana');
console.log(movies);

movies.unshift('Gangs of Wasseypur');  // adds elements at the beginning
console.log(movies);

console.log(movies.pop()); //remove elements at the end
console.log(movies.shift());// remove elements at the beginning
console.log(movies);
// movies,splice is used for removing 2 elements from index 3;
movies.splice(3,0, 'The Boys','Incidious');
console.log(movies);

