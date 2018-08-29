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

setTimeout(() => {
   timesFour();
}, 2000);

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

getWords()

function countdown(num, callback) {
    let mil = 1000 * num;
    setTimeout(() => {
        callback();
    }, mil);
};

function done() {
    console.log(`Done~!`)
};

countdown(returnNumber(), done)


// Promises

let global = true;

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

function orderFood() {
    orderingChickenSandwich.then((order) => {
        console.log(order);
    });
}
orderFood();

// Chaining Promises

let numberOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000)
}).then((result) => {
    return result * 2;
}).then((result2) => {
    return result2 * 4;
}).then((result3) => {
    return result3 * 6;
});

numberOne.then((final) => {
    console.log(final);
});


// function deferValue(value, ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         }, ms);
//     });
// }

// deferValue(1, 1000)
//     .then((result) => {
//         console.log(result);
//         return deferValue(result * 2, 2000);
//     })
//     .then((result) => {
//         console.log(result);
//         return deferValue(result * 4, 4000);
//     })
//     .then((result) => {
//         console.log(result);
//         return deferValue(result * 6, 6000);
//     })
//     .then((result) => {
//         console.log(result);
//     });
