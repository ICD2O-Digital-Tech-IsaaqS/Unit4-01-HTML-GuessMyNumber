// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: April 2025
// This file contains the JS functions for index.html
// Generate a random number between 1 and 10 when the page loads
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
    // Get the user's input and convert it to a number
    const userGuess = parseInt(document.getElementById('userGuess').value);

    // Get the paragraph element where we'll display the result
    const result = document.getElementById('result');

    // First if: check if the user's guess is correct
    if (userGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed it right!";
        result.style.color = "green"; // Change text color to green
    }

    // Second if: check if the user's guess is incorrect
    if (userGuess !== randomNumber) {
        result.textContent = `Sorry, wrong guess. The correct number was ${randomNumber}.`;
        result.style.color = "red"; // Change text color to red
    }
}