const assertEqual = require('../assertEqual')
const tail = require('../tail');

tail([5, 6, 8, 99]);
tail(["hey", "hello", "and goodmorning!"]);
tail([1]);
tail([]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);