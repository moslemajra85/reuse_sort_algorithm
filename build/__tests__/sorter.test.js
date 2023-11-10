"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("../CharactersCollection");
const LinkedList_1 = require("../LinkedList");
const NumbersCollection_1 = require("../NumbersCollection");
const Sorter_1 = require("../Sorter");
describe('Sorter', () => {
    it('should sort a NumbersCollection', () => {
        const numbersCollection = new NumbersCollection_1.NumbersCollection([-1, 0, 12, -4, 16, 7]);
        const sorter = new Sorter_1.Sorter(numbersCollection);
        sorter.sort();
        expect(numbersCollection.data).toEqual(expect.arrayContaining([-4, -1, 0, 7, 12, 16]));
        expect(numbersCollection.data[0]).toEqual(-4);
        expect(numbersCollection.data[5]).toEqual(16);
    });
    it('should sort a CharactersCollection', () => {
        const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaaa');
        const sorter = new Sorter_1.Sorter(charactersCollection);
        sorter.sort();
        expect(charactersCollection.data).toMatch(/aaaX/);
    });
    it('should sort a Linkedlist', () => {
        const list = new LinkedList_1.LinkedList();
        list.add(1);
        list.add(0);
        list.add(17);
        list.add(5);
        const sorter = new Sorter_1.Sorter(list);
        sorter.sort();
        expect(list.at(0).data).toBe(0);
        expect(list.at(1).data).toBe(1);
        expect(list.at(2).data).toBe(5);
        expect(list.at(3).data).toBe(17);
    });
});
