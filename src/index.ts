import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

const list = new LinkedList();
list.add(1);
list.add(0);
list.add(17);
list.add(5);

list.print();
const sorter = new Sorter(list);
sorter.sort();
console.log('#######################');
list.print();
