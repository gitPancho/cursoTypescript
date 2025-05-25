(() => {
    type Hero = {
        name: string;
        age: number;
        powers: number[];
        getName?: () => string;
    };

    let myCustomVariable: string | number | Hero = 'Fernando';
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
