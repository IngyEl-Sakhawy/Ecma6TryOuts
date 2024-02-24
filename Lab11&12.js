// 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.
// const person1 = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const person2 = {
//     name: 'Ingy',
//     age: 23
// };

// const matches = (person2, person1) => Object.keys(person1).every(key => person2.hasOwnProperty(key));

// console.log(matches(person2, person1)); //false
// console.log(matches(person1, person2)); //true

// 2. Write a JavaScript program to copy a string to the clipboard.
// const element = document.getElementById('textarea');
// const str= "helloworld"
// element.textContent = str;

// 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.
// const str = 'The quick brown fox jumps, over the lazy dog.';

// const strArray = str.split(',');
// const twoDArray =[];

// for(let i = 0 ; i< strArray.length;i++)
// {
//     const word = strArray[i].split(' ');
//     twoDArray.push(word);
// }
// console.log(twoDArray);

// 4. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
// const str = 'HelloWorld!, Ingy is a girl, Malak is a girl, Sallam is a boy';

// const rows= str.split(', ');
// const header = rows[0];
// const objArray =[];

// for (let i=1 ; i<rows.length ; i++ ){

//     const value = rows[i].split(' is a ')
//     const obj ={};


//     obj.name=value[0];
//     obj.gender=value[1];
    
//     objArray.push(obj);
    
// }
// console.log(header);
// console.log(objArray);

// 5. Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.
// const arrayToCSV = (dataArray, columns) => {
    
//         const csvData = dataArray.map(obj => columns.map(col => obj[col]));
//         const csvString = csvData.map(row => row.join(',')).join('\n');
    
//         return csvString;
//     };

//     const columnsToInclude = ['name', 'gender'];
//     const csvString = arrayToCSV(objArray, columnsToInclude);

//     console.log(csvString);

// 6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.
// function findValue(obj, targetKey) {
//     let result;
//     Object.keys(obj).some(key => {
//         if (key === targetKey) {
//             result = obj[key];
//             return true;
//         }
//         if (typeof obj[key] === 'object') {
//             result = findValue(obj[key], targetKey);
//             return result !== undefined;
//         }
//     });
//     return result;
// }

// const nestedObject = {
//     a: {
//         b: {
//             c: 123,
//             d: {
//                 e: 456
//             }
//         }
//     }
// };
// console.log(findValue(nestedObject, 'c')); // Output: 123

// 7. Write a JavaScript program to convert a specified number into an array of digits.
// function numberToArray(number) {
//     return String(number).split('').map(Number);
// }

// const number = 12345;
// console.log(numberToArray(number)); // Output: [1, 2, 3, 4, 5]

// 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
// function filterValues(array, filterValues) {
//     return array.filter(item => !filterValues.includes(item));
// }

// const array = [1, 2, 3, 4, 5];
// const filterValues = [2, 4];
// console.log(filterValues(array, filterValues)); // Output: [1, 3, 5]

// 9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.
// function combineNumbers(array) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             result.push([array[i], array[j]]);
//         }
//     }
//     return result;
// }

// const array = [1, 2, 3];
// console.log(combineNumbers(array)); // Output: [[1, 2], [1, 3], [2, 3]]

// 10. Write a JavaScript program to extract values at specified indexes from a specified array.
// function extractValues(array, indexes) {
//     return indexes.map(index => array[index]);
// }

// const array = ['a', 'b', 'c', 'd', 'e'];
// const indexes = [1, 3];
// console.log(extractValues(array, indexes)); // Output: ['b', 'd']

// 11. Write a JavaScript program to generate a random hexadecimal color code.
// function generateRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// console.log(generateRandomColor()); // Output: e.g., '#3a7b91'

// 12. Write a JavaScript program to remove non-printable ASCII characters from a given string.
// function removeNonPintable(str){
// return str.replace(/[^ -~]+/g,'');
// }
// const str = "hello\nworld";
// console.log(removeNonPintable(str));
// 13. Write a JavaScript program to convert a given string's length to bytes.
// function strToByte(str){
//     return new Blob([str]).size;
// }
// const str = "Hello";
// console.log(strToByte(str));
// 14. Write a JavaScript program to replace multiple object keys' names with the values provided.
// function replaceKeys(obj, keyMap){
//     const newObj = {};
//     Object.keys(obj).forEach(key => {
//         newObj[keyMap[key] || key] = obj[key];
//     });
//     return newObj;
// }

// const obj = { name: 'John', age: 30 };
// const keyMap = { name: 'firstName' };
// console.log(replaceKeys(obj, keyMap));
// 15. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set a comparing rule.
// function minMaxValue(array) {
//     const rule = x => x * 2;
//     const mappedValues = array.map(rule);
//     return [Math.min(...mappedValues), Math.max(...mappedValues)];
// }

// const array = [1, 2, 3, 4, 5];
// console.log(minMaxValue(array));
// 16. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
// function valueOfCollection(collection , predicate){
//     return collection.every(predicate);
// }
// const number = [2,3,4,5,7];
// const predicate = x=>x>1;
// console.log(valueOfCollection(number,predicate));
// 17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
// function filterArrays(array1, array2, fn) {
//     const result = [[], []];
//     array1.forEach(element => {
//         if (fn(element)) {
//             result[0].push(element);
//         } else {
//             result[1].push(element);
//         }
//     });
//     array2.forEach(element => {
//         if (fn(element)) {
//             result[0].push(element);
//         } else {
//             result[1].push(element);
//         }
//     });
//     return result;
// }

// const array1 = [1, -2, 3, 4, -7];
// const array2 = [5, -6, 7, -8, -9];
// const fn = x => x < 0;
// console.log(filterArrays(array1, array2, fn));

// 18. Write a JavaScript program to remove specified elements from the left of a given array of elements.
// function removeFromArray(array,numToRemove){
//     return array.slice(count);
// }
// const array =[1,2,3,4,5,6,7];
// const num =4;
// console.log(removeFromArray(array,num));
// 19. Write a JavaScript program to remove specified elements from the right of a given array of elements.
// function removeFromArray(array,numToRemove){
//     return array.slice(0,-count);
// }
// const array =[1,2,3,4,5,6,7];
// const num =4;
// console.log(removeFromArray(array,num));
// 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
function sixDigitColor(color) {
    return color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
        return '#' + r + r + g + g + b + b;
    });
}

// Example usage
const color = '#0f5';
console.log(sixDigitColor(color));