//RESUELVE LOS EJERCICIOS AQUÍ

//1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let [, ana,] = empleados


//2
let [Luis, ,] = empleados;
let emailLuis = Luis.email;

//3
// Inicialmente
let a = 5;
let b = 3;

[a, b] = [b, a];

//4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

//5
function sumEveryOther(...a) {
    return a.reduce((acc, curr) => acc += curr);
}
//6
function addOnlyNums(...a) {
    return a.filter(element => typeof element === "number").reduce((acc, curr) => acc += curr);
}

//7
function countTheArgs(...a) {
    return a.length
}

//8
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

//9
function onlyUniques(...element) {

    for (let i = 0; i < element.length; i++) {
        for (let j = i + 1; j < element.length; j++) {
            if (element[i] === element[j]) {
                element.splice(j, 1);
                j--;
            }
        }
    }

    return element;
}

//10
// function combineAllArrays(...element) {
//     let newArr = [];
//     for (let i = 0; i < element.length; i++) {
//         newArr = newArr + [...element[i]];
//     }
//     return newArr;
// }

function combineAllArrays(...element) {
    let combined = [];
    for (let i = 0; i < element.length; i++) {
        combined.push(...element[i]);
    }
    return combined;
}

let arr1 = [2, 7, 3, 1];
let arr2 = [2, 7, 4, 12];
let arr3 = [2, 44, 22, 7, 3, 1];
let arr4 = [6, 8, 5];

console.log(combineAllArrays(arr1, arr2, arr3, arr4))


//11
function sumAndSquare(...element) {
    return element.reduce((acc, curr) => acc += curr ** 2);
}
console.log(sumAndSquare(1, 2, 3, 5))
