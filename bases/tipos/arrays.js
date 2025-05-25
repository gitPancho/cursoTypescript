"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villanos = ['Joker', 'Thanos', 'Magneto'];
    let [one, two, three, , five, , seven, , nine, ten] = numbers;
    let [joker, thanos, magneto] = villanos;
    villanos.forEach(v => console.log(v.toUpperCase()));
    console.log(numbers);
    console.log(villanos);
})();
