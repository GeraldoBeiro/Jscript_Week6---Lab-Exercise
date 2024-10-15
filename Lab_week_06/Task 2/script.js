/* Georgian College at ILAC
24F Client-Side JavaScript - 200
Student: Geraldo Beiro Neto
Student ID: 200587023
*/

// Grabbing the HTML elements where I'll show the key value and key code
const keyValueDisplay = document.getElementById('key_Value');
const keyCodeDisplay = document.getElementById('key_Code');

// here I’m adding an event listener to listen for when any key is pressed
document.addEventListener('keydown', (event) => {
    // get the value and code of the key pressed
    const key_Value = event.key;    // key value like "A" or "1 "
    const key_Code = event.code;    // key code as "KeyA" or "Digit1"

    // Now I update the HTML with the key info
    keyValueDisplay.textContent = key_Value;  // show the key value
    keyCodeDisplay.textContent = key_Code;    // show the key code
});