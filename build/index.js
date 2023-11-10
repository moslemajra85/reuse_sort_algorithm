"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
const Sorter_1 = require("./Sorter");
const list = new LinkedList_1.LinkedList();
list.add(1);
list.add(0);
list.add(17);
list.add(5);
list.print();
const sorter = new Sorter_1.Sorter(list);
sorter.sort();
console.log('#######################');
list.print();
