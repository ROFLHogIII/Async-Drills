// Async: Now and later

let ranNum;
function returnNumber() {
    ranNum = Math.floor((Math.random() * 10));
    console.log(`Here's a number for you: ${ranNum}`)
    return ranNum
};
function timesFour() {
    returnNumber()
    console.log(ranNum * 4)
};

//setTimeout(() => {
//    timesFour();
//}, 2000);

// Callbacks

randomWords = [`Excalibur`, `Onomatopoeia`, `Pikachu`, `Supercalafradalisticexpialadotios`, `Mirror`, `Subsume`, `Mania`, `Hyrule`, `Mushroom`, `Eleven`]

function getWords() {
    console.log(randomWords[returnNumber()]);
    setTimeout(() => {
        console.log(randomWords[returnNumber()]);
    }, 3000);
    setTimeout(() => {
        console.log(randomWords[returnNumber()]);
    }, 2000);
    setTimeout(() => {
        console.log(randomWords[returnNumber()]);
    }, 1000);
};

// getWords()

function countdown(num, callback) {
    let mil = 1000 * num;
    setTimeout(() => {
        callback();
    }, mil);
};

function done() {
    console.log(`Done~!`)
};

// countdown(returnNumber(), done)


// Promises

let global = false;

let orderingChickenSandwich = new Promise((resolve, reject) => {
    if (global === true) {
        let food = {
            sandwich: "chicken",
            veggies: "lettuce",
        }
        resolve(food);
    } else {
        var nope = new Error('I was created using a function call!');
        reject(nope);
    }
});

function orderfood() {
    console.log(orderingChickenSandwich)
}
orderfood();
