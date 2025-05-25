"use strict";
(() => {
    const addNUmber = (a, b) => {
        return a + b;
    };
    const greet = (name) => {
        return `Hello ${name}`;
    };
    const saveWord = () => `el mundo esta salvado`;
    let myFunction;
    // myFunction = 10;
    // console.log({ myFunction });
    // myFunction = addNUmber;
    // console.log(myFunction(10, 20));
    // myFunction = greet;
    // console.log(myFunction('francisco'));
    myFunction = saveWord;
    console.log(myFunction());
})();
