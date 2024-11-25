// 1. Adding Event Listeners

document.addEventListener("DOMContentLoaded", () => {
    const motorcycle = document.getElementById("motorcycle");
    const randomColorBtn = document.getElementById("randomColorBtn");
    const colorDropdown = document.getElementById("colorDropdown");
    const resetColorBtn = document.getElementById("resetColorBtn");
  
    // document.addEventListener("DOMContentLoaded", ...): Ensures the code runs only after the entire HTML document is fully loaded and parsed. This prevents errors if elements are accessed before they exist.

    // Variables:
    
    // motorcycle: Selects the div that displays the motorcycle image.
    // randomColorBtn: Selects the button for generating random colors.
    // colorDropdown: Selects the dropdown menu.
    // resetColorBtn: Selects the reset button.



//---------------------------------------------------------------------------------------------------------



    // Generate a random RGB color
    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };
//     Purpose: Creates a random RGB color.

// How It Works:

// Math.random(): Generates a random decimal number between 0 and 1.
// Math.random() * 256: Scales the random number to a range of 0–255.
// Math.floor(): Converts the decimal number to an integer, ensuring valid RGB values.
// return \rgb(${r}, ${g}, ${b})`;: Combines the red (r), green (g), and blue (b`) values into a string formatted as an RGB color.

//------------------------------------------------------------------------------------

    // Assign random color to the motorcycle
    randomColorBtn.addEventListener("click", () => {
      motorcycle.style.backgroundColor = getRandomColor();
    });
    // What It Does:
    // Adds a click event listener to the "Random Color" button.
    // Calls the getRandomColor() function to generate a random color.
    // Updates the backgroundColor style property of the motorcycle div.

//---------------------------------------------------------------------------------

    // Change color based on dropdown selection
    colorDropdown.addEventListener("change", (event) => {
      motorcycle.style.backgroundColor = event.target.value;
    });
//   What It Does:

// Adds a change event listener to the dropdown menu.
// The event parameter captures details about the change event.
// event.target.value: Retrieves the selected color from the dropdown.
// Updates the backgroundColor of the motorcycle div with the selected color.
// Example:

// If the user selects "Blue" from the dropdown, event.target.value is "blue".
// The motorcycle div's background becomes blue.


//---------------------------------------------------------------------------------------


    // Reset color to white
    resetColorBtn.addEventListener("click", () => {
      motorcycle.style.backgroundColor = "white";
    });
  });
//   What It Does:
// Adds a click event listener to the "Reset to White" button.
// Directly sets the backgroundColor of the motorcycle div to "white".
  