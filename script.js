const display = document.querySelector('#display');

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.value;

        if (buttonValue === 'AC') {
            display.value = ''; // Clear the display
        } else if (buttonValue === 'DEL') {
            display.value = display.value.slice(0, -1); // Remove the last character
        } else if (buttonValue === '=') {
            try {
                display.value = eval(display.value); // Evaluate the mathematical expression
            } catch {
                display.value = 'Error'; // Show error if evaluation fails
            }
        } else {
            display.value += buttonValue; // Append the button value to the display
        }
    });
});