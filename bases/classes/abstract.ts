(() => {
    abstract class Mutante {
        constructor(public nombre: string, public realName: string) {}
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo';
        }
    }
    class Villano extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villano('Magneto', 'Magnus');
    // console.log(wolverine);
    // console.log(magneto);

    const printName = (character: Mutante) => {
        console.log(character.realName);
    };
    // printName(wolverine);
    // printName(magneto);
})();
