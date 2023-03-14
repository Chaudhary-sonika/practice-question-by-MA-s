// 3.Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array.
// const numbers = [1, 2, 3, 4, 5];
// const sumOfCubesOfOdd = (objNum)=>objNum.reduce((acc, curr)=> curr%2 !=0?acc+(curr*curr*curr):acc);
// console.log(sumOfCubesOfOdd(numbers));

// 1. Given an array of strings, return a single string that contains all the elements of the array concatenated together with a space between each element.

const words = ["Hello", "world", "how", "are", "you"];
// const concateWord =(strWord)=>strWord.reduce((accWord, currWord)=> accWord + ' ' + currWord);
// console.log(concateWord(words));

// 2. Given an array of objects representing products, return the total cost of all the products. Each product object has a price property and a quantity property.

const products = [
    { name: "apple", price: 0.5, quantity: 2 },
    { name: "banana", price: 0.3, quantity: 5 },
    { name: "orange", price: 0.8, quantity: 3 },
];
const totalCostOfProduct =(objProd)=> objProd.reduce((accProd, currProd)=>accProd+currProd.price*currProd.quantity, 0);

// console.log(totalCostOfProduct(products));

// 3. Given an array of arrays, return a single array that contains all the elements of the nested arrays.

const array = [[1, 2], [3, 4], [5, 6]];
const singleArray =(arr)=> arr.reduce((accArr, currArr)=>[...accArr, ...currArr], []);
// console.log(singleArray(array));

//4. Given an array of objects representing books, return the total number of pages in all the books. Each book object has a title property and a pages property.

const books = [
    { title: "Harry Potter", pages: 600 },
    { title: "Lord of the Rings", pages: 1000 },
    { title: "The Hobbit", pages: 300 },
];

const totalNumPage=(objArr)=> objArr.reduce((accBook, currBook)=>accBook + currBook.pages, 0);
// console.log(totalNumPage(books));

//5. Given an array of strings, return an object that shows how many times each string appears in the array. The keys of the object should be the unique strings in the array, and the values should be the number of times each string appears.

const wordArr = ["apple", "banana", "apple", "orange", "banana", "pear"];
const appearenceOfWords = (wordArr)=> wordArr.reduce((accWord, currWord)=>{(accWord[currWord])?(accWord[currWord]+= 1):(accWord[currWord]=1); return accWord;}, {});
// console.log(appearenceOfWords(wordArr));

//6. Given an array of numbers, return an object that shows the frequency of each number in the array. The keys of the object should be the unique numbers in the array, and the values should be the number of times each number appears.

const numberArray = [1, 2, 3, 1, 2, 1, 3, 3, 3, 2];

const numAppear = (arrNum) => arrNum.reduce((acc, curr)=>{(acc[curr])?(acc[curr]+=1):(acc[curr]=1);
return acc;}, {});
console.log(numAppear(numberArray));

//7. Write a function to create a new array of objects that include the name and length of each string in the input array.

const arayOfStr = ["apple", "banana", "pear"];

