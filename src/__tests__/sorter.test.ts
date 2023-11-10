import { CharactersCollection } from '../CharactersCollection';
import { LinkedList } from '../LinkedList';
import { NumbersCollection } from '../NumbersCollection';

describe('Sorter', () => {
  it('should sort a NumbersCollection', () => {
    const numbersCollection = new NumbersCollection([-1, 0, 12, -4, 16, 7]);
    numbersCollection.sort();
    expect(numbersCollection.data).toEqual(
      expect.arrayContaining([-4, -1, 0, 7, 12, 16])
    );
    expect(numbersCollection.data[0]).toEqual(-4);
    expect(numbersCollection.data[5]).toEqual(16);
  });

  it('should sort a CharactersCollection', () => {
    const charactersCollection = new CharactersCollection('Xyaaa');
     charactersCollection.sort();

    expect(charactersCollection.data).toMatch(/aaaXy/);
  });

  it('should sort a Linkedlist', () => {

    const list = new LinkedList()
    list.add(1)
    list.add(0)
    list.add(17)
    list.add(5)

     list.sort()

    expect(list.at(0).data).toBe(0)
    expect(list.at(1).data).toBe(1)
    expect(list.at(2).data).toBe(5)
    expect(list.at(3).data).toBe(17)
   })
});
