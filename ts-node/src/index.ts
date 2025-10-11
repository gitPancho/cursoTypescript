import { PokemonClass } from './decorators/pokemon-class';

const charmander = new PokemonClass('Charmander');

// (PokemonClass.prototype as any).customName = 'Pikachu';
// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(3);
// charmander.publicApi = 'https://pokeapi.co';
console.log(charmander);
