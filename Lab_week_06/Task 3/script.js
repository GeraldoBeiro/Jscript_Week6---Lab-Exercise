/* Georgian College at ILAC
24F Client-Side JavaScript - 200
Student: Geraldo Beiro Neto
Student ID: 200587023
*/

// below we have the const (variables) to get the elements by ID
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Now I'm adding an event listener for the form submit event
form.addEventListener('submit', function(event) {

    // Prevent the default form submission
    event.preventDefault();

    // Grab the values of the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    //clear any previous error messages
    errorMessage.textContent = '';

    // using the if method (function) for username and password -- conditions to be met
    if (username.length < 5) { //if username is less than 5 charactes long
        errorMessage.textContent = 'Username must be at least 5 characters long'; // display error message
        return;  // stop the form submission
    }


    if (password.length < 8) { //if password is less than 8 charactesr long..
        errorMessage.textContent = 'Password must be at least 8 characters long'; // display error message
        return;  // stop the form submission

    }

    //if validation passes..then allow form submission
    alert('Form submitted successfully!'); // This is a nice alert for submission xD -- (made by Geraldo Beiro)
    
});