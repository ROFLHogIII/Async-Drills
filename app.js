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

//getWords()

function countdown(num, callback) {
    let mil = 1000 * num;
    setTimeout(() => {
        callback;
    }, 2000);
};

function done() {
    console.log(`Done~!`)
};

countdown(returnNumber(), done())


// Promises

let global = true;
const orderingChickenSandwich = new Promise((resolver, reject) => {
    // do something asynchronous which eventually calls either:
    //
    //   resolve(someValue); // fulfilled
    // or
    //   reject("failure reason"); // rejected
  });