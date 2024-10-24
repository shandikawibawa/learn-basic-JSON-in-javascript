const person = {
    name: "Shandika",
    age: 18,
    email: "sh@gmail.com",
    isSubscribed: true,
    hobbies: ["Music", "Gaming", "Sing a song"],
    address: {
        city: "Badung",
        idk: true,
    },
};

// JSON.stringify()
const jsonString = JSON.stringify(person);
const parsedObjest = JSON.parse(jsonString)
console.log(parsedObjest)

// const currentDate = new Date();
// console.log(currentDate); 


// year, month, day, hours, minutes, second, miliseconds

const currentDate = new Date(2024, 10, 24, 12, 30, 0, 0);
console.log(currentDate);

//=================================================//


const date = new Date()

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const milliseconds = date.getMilliseconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Milliseconds: ${milliseconds}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
date.setDate(date.getDate() - 1);
console.log(date);