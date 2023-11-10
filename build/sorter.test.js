"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
describe('Sorter', () => {
    it('should sort a NumbersCollection', () => {
        const numbersCollection = new NumbersCollection_1.NumbersCollection([-1, 0, 12, -4, 16, 7]);
        const sorter = new Sorter_1.Sorter(numbersCollection);
        sorter.sort();
        expect(numbersCollection.data).toEqual(expect.arrayContaining([-4, -1, 0, 7, 12, 16]));
        expect(numbersCollection.data[0]).toEqual(-4);
        expect(numbersCollection.data[5]).toEqual(16);
    });
});
