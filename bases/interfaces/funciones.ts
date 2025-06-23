(() => {
    interface addtwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFunctions: addtwoNumbers;
    addNumbersFunctions = (a: number, b: number) => a + b;
    console.log(addNumbersFunctions(1, 2));
})();
