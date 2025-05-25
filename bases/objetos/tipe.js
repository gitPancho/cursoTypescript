"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
    console.log({ flash });
    const { name, age, powers = [] } = flash;
    console.log(name, age);
})();
