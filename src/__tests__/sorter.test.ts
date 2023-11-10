import { CharactersCollection } from '../CharactersCollection';
import { NumbersCollection } from '../NumbersCollection';
import { Sorter } from '../Sorter';

describe('Sorter', () => {
  it('should sort a NumbersCollection', () => {
    const numbersCollection = new NumbersCollection([-1, 0, 12, -4, 16, 7]);
    const sorter = new Sorter(numbersCollection);
    sorter.sort();
    expect(numbersCollection.data).toEqual(
      expect.arrayContaining([-4, -1, 0, 7, 12, 16])
    );
    expect(numbersCollection.data[0]).toEqual(-4);
    expect(numbersCollection.data[5]).toEqual(16);
  });

  it('should sort a CharactersCollection', () => {
    const charactersCollection = new CharactersCollection('Xaaa');
    const sorter = new Sorter(charactersCollection);
    sorter.sort();

    expect(charactersCollection.data).toMatch(/aaaX/);
  });
});
