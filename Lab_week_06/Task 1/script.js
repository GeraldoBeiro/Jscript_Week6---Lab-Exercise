/* Georgian College at ILAC
24F Client-Side JavaScript - 200
Student: Geraldo Beiro Neto
Student ID: 200587023
*/

// Here I am creating the const for increment button and value counted (counterValue)
const incrementButton = document.getElementById('incrementButton');
const counterValue = document.getElementById('counterValue');

// The counter variable is initialized here, value  0!
let counter = 0;

// this is the event listener to the button to increment the counter on click (function)
incrementButton.addEventListener('click', () => { // when clicking the button the variable counter will increase
    counter++;  // here it will be incremented
    counterValue.textContent = counter;  // update the displayed counter value
});