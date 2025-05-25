(() => {
    const batman: string = 'Batman';
    const linternanVerde: string = 'Linterna`s Verde';
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || 'No se encontro');
})();
