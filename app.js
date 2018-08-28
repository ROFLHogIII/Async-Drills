let ranNum;
function returnNumber() {
    ranNum = Math.floor((Math.random() * 10) + 1);
    console.log(`Here's a number for you: ${ranNum}`)
};
function timesFour() {
    returnNumber()
    console.log(ranNum * 4)
};

setTimeout(() => {
    timesFour();
}, 2000);