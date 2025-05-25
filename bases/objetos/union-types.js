"use strict";
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    console.log(typeof myCustomVariable);
})();
