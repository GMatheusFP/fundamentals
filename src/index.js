import Title from "./components/title";
import Button from "./components/button";
import Image from "./components/image";

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
