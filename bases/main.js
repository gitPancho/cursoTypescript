"use strict";
(() => {
    const avengersArr = ['Capitan America', 'Ironman', 'Hulk', 'Thor', 'SpiderMan'];
    const [capitan, ironman] = avengersArr;
    console.log({ ironman, capitan });
})();
(() => {
    const ironman = {
        nombre: 'Tony Stark',
        equipo: 'ironSuit',
    };
    const capitanAmerica = {
        nombre: 'Capitan America',
        equipo: 'escudo',
    };
    const thor = {
        nombre: 'Thor',
        equipo: 'mjorlnir',
    };
    const avergers = [ironman, capitanAmerica, thor];
    for (const avenger of avergers) {
        console.log(avenger.nombre);
    }
})();
(() => {
    const nombre = 'Tony';
    const getName = () => {
        console.log(nombre);
    };
})();
//# sourceMappingURL=main.js.map