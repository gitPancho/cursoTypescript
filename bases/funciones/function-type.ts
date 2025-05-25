(() => {
    const addNUmber = (a: number, b: number): number => {
        return a + b;
    };

    const greet = (name: string): string => {
        return `Hello ${name}`;
    };

    const saveWord = () => `el mundo esta salvado`;

    let myFunction: () => string;

    // myFunction = 10;
    // console.log({ myFunction });

    // myFunction = addNUmber;
    // console.log(myFunction(10, 20));

    // myFunction = greet;
    // console.log(myFunction('francisco'));

    myFunction = saveWord;
    console.log(myFunction());
})();
