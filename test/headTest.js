const head = require('../head');
const assertEqual = require('../assertEqual');
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), "test-case");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
