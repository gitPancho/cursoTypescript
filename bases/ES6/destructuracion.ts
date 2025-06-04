(() => {
    // type Avengers = {
    //     nick: string;
    //     ironman: string;
    //     spiderMan: string;
    //     activos: boolean;
    //     poder: number;
    // };

    // const avengers: Avengers = {
    //     nick: 'Samuel L. Jackson',
    //     ironman: 'Robert Downey Jr.',
    //     spiderMan: 'Peter Parker',
    //     activos: true,
    //     poder: 1500,
    // };

    // const { poder, ironman } = avengers;

    // console.log(poder.toFixed(2), ironman.toUpperCase());

    // const printAvenger = ({ spiderMan, ...resto }: Avengers) => {
    //     console.log(spiderMan, resto);
    // };

    // printAvenger(avengers);

    const avengersArr = ['Capitan America', 'Ironman', 'Hulk', 'Thor', 'SpiderMan'];

    const [capitan, ironman] = avengersArr;

    console.log({ ironman, capitan });
})();
