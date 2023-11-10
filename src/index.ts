import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([12, -1, 0, -4, 7]);
const sorter = new Sorter(numbersCollection);

sorter.sort();
console.log(sorter.collection.data);
