//Objects
// const person: object = {
//     name: 'Haivex',
//     age: 30
// }
// console.log(person.name) //Property name does not exist on type object

// const person: {} = {
//     name: 'Haivex',
//     age: 30
// }
// console.log(person.name) //Property name does not exist on type {}

// const person: {
//     name: string;
    
// } = {
//     name: 'Haivex',
//     age: 30  //age does not exists
// }

// const person: {
//     name: string;
//     age: 31;
// } = {
//     name: 'Haivex',
//     age: 30 //age does not exists // Type '30' is not assignable to type '31'.ts(2322)
// }

// const person: {
//     name: string;
//     age: 31;
// } = {
//     name: 'Haivex',
//     age: 31
// }

// const person = {
//     name: 'Haivex',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// person.role.push('admin');
// person.role[1] = 10;

//let favoriteActivities: string[];
//favoriteActivities = 'a' type string is not  assinagle to type string[]
//favoriteActivities = ['sports', 1] type number is not assigable to string
//console.log(person.hobbies); //hobbies: string[]

// let favoriteActivities: any[];
// favoriteActivities = ['sports', 1];


// let favoriteActivities: string[];
// favoriteActivities = ['sports', 'asd'];

// for(const hobby of person.hobbies) {
//     console.log(hobby);
// }



//Type tuple fixed length array
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Haivex',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

person.role.push('admin'); //typescript nie wykryuje push
person.role[1] = 10; //error
person.role = [1, 'a', ''] //sources has 3 elements but targets allow 2