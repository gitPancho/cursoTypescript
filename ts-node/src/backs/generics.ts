import { printObject, genericFunction, generictFunctionArrrow } from '../generics/generics';
import { Hero, Villain } from '../interfaces/index';

// const result = generictFunctionArrrow('Hello World').toUpperCase();
// console.log(result);

// const result2 = generictFunctionArrrow(123.983897278).toFixed(2);
// console.log(result2);

// const result3 = generictFunctionArrrow<number>(123.983897278).toFixed(2);
// console.log(result3);

// printObject('Hello World');
// printObject(123);
// printObject(new Date());
// printObject({ name: 'Spiderman', age: 30 });
// printObject([1, 2, 3, 4, 5]);
// printObject(['a', 'b', 'c', 'd', 'e']);

const deadpool = {
    name: 'DeadPool',
    realName: 'Wade Wilson',
    dangerLevel: 130,
};

console.log(genericFunction<Villain>(deadpool).dangerLevel);
