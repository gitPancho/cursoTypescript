"use strict";
(() => {
    class Mutante {
        constructor(nombre, realName) {
            this.nombre = nombre;
            this.realName = realName;
        }
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
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Averger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ${this.realName}`;
        }
    }
    Averger.avgAge = 35;
    const antman = new Averger('antman', 'cap', 'Scott Lang');
})();
(() => {
    class Aveenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Aveenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 letras');
            }
            this.name = name;
        }
        getfullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Xavier');
})();
//# sourceMappingURL=main.js.map