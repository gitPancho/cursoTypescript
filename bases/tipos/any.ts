(() => {
    let avenger: any = 123;
    let exist;
    let poweer;

    avenger = 'spiderman';
    // console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0));

    avenger = 1540.09332;
    console.log(<number>avenger.toFixed(2));

    console.log(exist);
    console.log(poweer);
})();
