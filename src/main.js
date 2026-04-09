// IMPORTS ------------------------------------------------------------------------------------------
import { validateUrl } from './utils.js';

// DOM VARIABLES -----------------------------------------------------------------------------
// Form elements
const shortenForm = document.getElementById('shorten-form');
const urlInput = document.getElementById('url-input');
const submitBtn = document.getElementById('submit-btn');

//states & messages
const errorMessage = document.getElementById('error-message');
const loading = document.getElementById('loading');
const result = document.getElementById('result');

//result elements
const shortUrl = document.getElementById('short-url');

//copy button
const copyBtn = document.getElementById('copy-btn');


//console.log(urlInput, submitBtn, errorMessage, loading, result, shortUrl, copyBtn);


// Functions ----------------------------------------------------------------------------------------
 // gets url from input and validates it

 function handleSubmit(e) {
    e.preventDefault(); // Prevent form from normal defaults
    let url = urlInput.value.trim(); // .trim() to remove any whitespace

    // imported validation function from utils.js
    try {
        validateUrl(url);
    } catch (error) {
        displayError(error.message);
        return;
    }

    console.log('Submitted URL:', url);
 }



 // Event Listeners ----------------------------------------------------------------------------------
 shortenForm.addEventListener('submit', handleSubmit);