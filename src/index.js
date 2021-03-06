import Title from './components/title';
import Button from './components/button';
import Image from './components/image';

import warning from './templates/warning.html';
import './styles/warning.css';

import phraseTxt from './files/phrase.txt';

const title = new Title();
const button = new Button();
const image = new Image();

title.create("First page");
image.insertImage();
button.create();

//Babel spread
const obj = { a: 1, b: 3, c: 3, d: 4 };

let{a, b, ...test} = obj;

console.log(a);
console.log(b);
console.log(test);

// html import
const body = document.querySelector('body');
body.innerHTML += warning;

// txt import
const phrase = phraseTxt;
console.log(phrase);