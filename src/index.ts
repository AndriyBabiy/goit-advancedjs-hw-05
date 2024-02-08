import { concatenation } from "./concatenation";

console.log("Hello World");

const button = document.querySelector('button');
const input = document.querySelector('input');

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  })
}