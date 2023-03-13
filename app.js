// 3.Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array.
// const numbers = [1, 2, 3, 4, 5];
// const sumOfCubesOfOdd = (objNum)=>objNum.reduce((acc, curr)=> curr%2 !=0?acc+(curr*curr*curr):acc);
// console.log(sumOfCubesOfOdd(numbers));

// 1. Given an array of strings, return a single string that contains all the elements of the array concatenated together with a space between each element.

const words = ["Hello", "world", "how", "are", "you"];
const concateWord =(strWord)=>strWord.reduce((accWord, currWord)=> accWord+ " " + currWord);
console.log(concateWord(words));