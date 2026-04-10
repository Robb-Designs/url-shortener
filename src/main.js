// IMPORTS ------------------------------------------------------------------------------------------
import { showLoading } from './ui.js';
import { hideLoading } from './ui.js';
import { showResult } from './ui.js';
import { validateUrl } from './utils.js';
import { fetchShortUrl } from './api.js';

// DOM VARIABLES -----------------------------------------------------------------------------
// Form elements
const shortenForm = document.getElementById('shorten-form');
const urlInput = document.getElementById('url-input');
const submitBtn = document.getElementById('submit-btn');

//states & messages
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');

//result elements
const shortUrl = document.getElementById('short-url');

//copy button
const copyBtn = document.getElementById('copy-btn');


//console.log(urlInput, submitBtn, errorMessage, loading, result, shortUrl, copyBtn);


// Functions ----------------------------------------------------------------------------------------
// gets url from input and validates it

async function handleSubmit(e) {
    e.preventDefault(); // Prevent form from normal defaults
    let url = urlInput.value.trim(); // .trim() to remove any whitespace



    // imported validation function from utils.js
    try {
        url = validateUrl(url); // Validate the URL format and declaring url as the validated URL returned from the function.
        showLoading(submitBtn, urlInput); // Show loading state while validating
        //this line simulates loading using setTimeout.
        await new Promise(resolve => setTimeout(resolve, 2000));
        const shortLink = await fetchShortUrl(url); // Fetch the shortened URL from the API
        console.log(shortLink);

    } catch (error) {
        console.error(error.message);
        return;
    } finally {
        hideLoading(submitBtn, urlInput); // Hide loading state after validation and API call
    }

    console.log('Submitted URL:', url);
}



// Event Listeners ----------------------------------------------------------------------------------
shortenForm.addEventListener('submit', handleSubmit);