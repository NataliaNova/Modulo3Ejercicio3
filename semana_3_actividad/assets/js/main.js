// Importing necessary functions and variables from 'taquilla.js' module
import {
  tickets,
  renderOptions,
  toastList,
  getSelectedData,
  updateCard,
  saveToLocalStorage,
} from './taquilla.js';

// Get the input element with id 'product-img'
const inputElement = document.getElementById('product-img');

// Get the submit button element with id 'submit-btn'
const submitBtn = document.getElementById('submit-btn');

// Initialize data array and selectedData variable
let data = [];
let selectedData;

// Add event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  // If inputElement exists
  if (inputElement) {
    // Render ticket options in the inputElement
    renderOptions(inputElement, tickets);

    // Add onchange event listener to the inputElement
    inputElement.onchange = event => {
      // Get selected data from the event target
      selectedData = getSelectedData(event.target);

      // Update the card with the selected data
      updateCard(selectedData);
    };
  }
});

// Add click event listener to the submit button
submitBtn.addEventListener('click', () => {
  // Get the name and email fields and the form
  const nameField = document.getElementById('name-input');
  const emailField = document.getElementById('email');
  const form = document.getElementById('product-form');

  // If the form is valid
  if (form.checkValidity()) {
    // Push the selected data to the data array
    data.push(selectedData);

    // Save the selected data and the person's name and email to local storage
    saveToLocalStorage({
      products: [selectedData],
      person: {
        name: nameField.value.trim(),
        email: emailField.value.trim(),
      },
    });

    // If there are any toasts in the toastList, show the first one
    if (toastList.length > 0) {
      toastList[0].show();
    }
  }
});
