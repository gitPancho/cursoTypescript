(() => {
    interface avengerd {
        nombre: string;
        equipo: string;
    }

    const ironman: avengerd = {
        nombre: 'Tony Stark',
        equipo: 'ironSuit',
    };

    const capitanAmerica: avengerd = {
        nombre: 'Capitan America',
        equipo: 'escudo',
    };

    const thor: avengerd = {
        nombre: 'Thor',
        equipo: 'mjorlnir',
    };

    const avergers = [ironman, capitanAmerica, thor];
    for (const avenger of avergers) {
        console.log(avenger.nombre);
    }
})();
