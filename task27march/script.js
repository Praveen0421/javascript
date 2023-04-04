// 1. Write a JavaScript function that reverse a number.
function reverseNumber(number) {
    let stringValue = number.toString();
    let reverseNum = "";
    for (const iterator of stringValue) {
        reverseNum = iterator + reverseNum;
    }
    return Number(reverseNum);
}
console.log(reverseNumber(2536));

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function orderAlphabet(stringValue) {
    let shortAlphabet = stringValue.split("").sort().join("");
    return shortAlphabet;
}
console.log(orderAlphabet("hellobjbd"));

// 3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function firstLetterUppercase(string) {
    let splitString = string.split(" ");
    let array = [];
    for (const iterator of splitString) {
        let firstLetterToUppercase = iterator.replace(iterator[0], iterator[0].toUpperCase());
        array.push(firstLetterToUppercase);
    }
    return array.join(" ");
}
console.log(firstLetterUppercase("hello friends my name is praveen"));

// 4. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLongestWord(string) {
    let splitString = string.split(" ");
    let longestWord = "";
    for (const iterator of splitString) {
        if (iterator.length > longestWord.length) {
            longestWord = iterator;
        }
    }
    return longestWord;
}
console.log(findLongestWord("hello friends my name is praveen"));

// 5. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(string) {
    let count = 0;
    let splitString = string.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    vowels.forEach(element => {

        for (const iterator of splitString) {
            if (iterator === element) {
                count++
            }
        }

    });
    return count;
}
console.log(countVowels("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ratione esse dolores quibusdam iste facilis placea"));

// 6. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
const listOfCountry = ["India", "United States", "United Kingdom", "Canada", "Brazil", "Australia", "France", "China", "Germany", "Russia"];
let longestCountryName = "";
function findLongestCountryName(string) {
    for (const iterator of string) {

        if (iterator.length > longestCountryName.length) {
            longestCountryName = iterator;
        }
    }
    return longestCountryName;
}
console.log(findLongestCountryName(listOfCountry));

// 7. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function messageforUser() {
    return "Hello!";
}
function greeting(name, message) {
    let greet = message();
    return `${greet} ${name}`
}
console.log(greeting("Praveen", messageforUser));

// 8. Write a JavaScript function to get the function name.
function getFunctionname(functionName) {
    console.log(functionName.name);
}
getFunctionname(findLongestCountryName)

/* --------------- */

// Another task

/* --------------- */

// 1. Write a JavaScript function to retrieve all the values of an object's properties.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    phone: "555-123-4567",
    email: "johndoe@example.com"
};
function allValues(object) {
    console.log(Object.values(object));
}
allValues(person);

// 2. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function listOfPairs(object) {
    return Object.entries(object);
}
console.log(listOfPairs(person));
// 3. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
let user = {
    name: "praveen",
    age: 21,
    email: "raipraveen@gmail.com",
    aag: 5
}
let newObject = {};
function keyToValue(object) {
    console.log(object);
    for (const i in object) {
        newObject[object[i]] = i;
        console.log(i);
    }
    console.log(newObject);
}
keyToValue(user);


// 4. Write a JavaScript program to find the most frequent item of an array.
const fruits = ["apple", "banana", "orange", "apple", "mango", "banana", "apple", "orange", "apple"];
let countFrequentItem = 0;
let frequentItem = 1;
let frequentValue;
fruits.forEach(element => {

    for (const iterator of fruits) {
        if (element === iterator) {
            countFrequentItem++;
        }
        if (frequentItem < countFrequentItem) {
            frequentValue = countFrequentItem;
            frequentValue = iterator
        }
    }

});
console.log(frequentValue);

// 5. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
const fruitList = ["apple", "banana", "orange", "apple", "mango", "banana", "apple", "orange", "apple", 1, 22, 5, 22];


function getUnique(arr) {

    let noDublicate = [];

    // loop through array
    for (let i of arr) {
        if (noDublicate.indexOf(i) === -1) {
            noDublicate.push(i);
        }
    }
    console.log(noDublicate);
}

getUnique(fruitList);



// 6. Write a JavaScript function to merge two arrays and removes all duplicates elements.
const list0 = ["apple", 2, 3, "orange", 5, 6, true, 8, false];
const fruitList0 = ["apple", "banana", "orange", "apple", "mango", "banana", "apple", "orange", "apple", 1, 22, 5, 22];
function mergeNoDublicate(arr1, arr2) {
    const newArray = arr1.concat(arr2);
     getUnique(newArray);
 
}
function getUnique(arr) {

    let noDublicate = [];

    // loop through array
    for (let i of arr) {
        if (noDublicate.indexOf(i) === -1) {
            noDublicate.push(i);
        }
    }
    console.log(noDublicate);
}

mergeNoDublicate(list0, fruitList0)

// 7. Write a JavaScript function to remove a specific element from an array.
let list1 = ["apple", 2, 3, "orange", 5, 6, true, 8, false];
function removeSpecficItem(itemList, itemtoremove) {
    let indexToRemove = itemList.indexOf(itemtoremove);
    itemList.splice(indexToRemove, 1)
    console.log(list1);
}
removeSpecficItem(list1, true);
// 8. Write a JavaScript function to get a random item from an array.[1,2,3,4,5,6,7,8,9,10]

const array1 = ["apple", "banana", "orange", "apple", "mango", "banana", "apple", "orange", "apple"];
function randomItemSelector(array) {
    let randomItem = Math.floor(Math.random() * (array.length));
    console.log(array[randomItem]);
}
randomItemSelector(array1);

// 9. Write a JavaScript function to filter false, null, 0 and blank values from an array.[58, '', 'abcd', true, null, false, 0]
let list2 = ["apple", 2, 3, "orange", 5, 6, 0, true, 8, false, null, ""];
let removeitems = [false, null, 0, true, ""];
let arrary = [];
function removeFalsey(array, falseyRemoved) {
    falseyRemoved.forEach(element => {
        if (list2.includes(element)) {
            let indexToRemove = array.indexOf(element);
            list2.splice(indexToRemove, 1)
        }
    });
    console.log(list2);
}
removeFalsey(list2, removeitems);



