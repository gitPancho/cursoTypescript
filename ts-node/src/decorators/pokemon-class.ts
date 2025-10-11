function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (orint: boolean = false): Function => {
    if (orint) {
        return printToConsole;
    } else {
        return () => {};
    }
};

const bloquearPrototipo = function (constriuctor: Function) {
    Object.seal(constriuctor);
    Object.seal(constriuctor.prototype);
};

function ChectValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log({ target, propertyKey, descriptor });
        const originalMethod = descriptor.value;
        descriptor.value = function (id: number) {
            if (id < 1 || id > 1000) {
                throw new Error('Invalid Pokemon ID');
            }
            return originalMethod.apply(this, [id]);
        };
        return descriptor;
    };
}

function reandonly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this, 'getter');
                return 'pancho';
            },
            set(this, value) {
                // console.log(this, value);
                // Object.defineProperties(this, propertyKey, {
                //     value: value,
                //     writable: !isWritable,
                //     enumerable: true,
                // });
                //? no funciona, no se porq
            },
        };
        return descriptor;
    };
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class PokemonClass {
    @reandonly(true)
    public publicApi: string = 'https://pokeapi.co';
    constructor(public name: string) {}

    @ChectValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Saving ${this.name} to DB with id ${id}`);
    }
}
