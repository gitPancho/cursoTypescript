"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        },
    };
    console.log({ flash });
    const { name, age, powers = [] } = flash;
    console.log(name, age);
})();
