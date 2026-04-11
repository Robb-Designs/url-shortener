// IMPORTS ---------------------------------------------------------------------------------------------------
import { showLoading } from './ui.js';
import { hideLoading } from './ui.js';
import { showResult } from './ui.js';
import { copyTextToClipboard, validateUrl } from './utils.js';
import { fetchShortUrl } from './api.js';
import { displayError, clearError } from './ui.js';
import { saveLink, loadLinks } from './utils.js';
import { renderSavedLinks } from './ui.js';

// DOM VARIABLES ---------------------------------------------------------------------------------------------
// Form elements
const shortenForm = document.getElementById('shorten-form');
const urlInput = document.getElementById('url-input');
const submitBtn = document.getElementById('submit-btn');
const linksListContainer = document.getElementById('links-list');

//states & messages
const errorMessage = document.getElementById('error-message');
const result = document.getElementById('result');

//result elements
const shortUrl = document.getElementById('short-url');

//copy button
const copyBtn = document.getElementById('copy-btn');



// Functions --------------------------------------------------------------------------------------------------
// gets url from input and validates it
async function handleSubmit(e) {
    e.preventDefault(); // Prevent form from normal defaults
    let url = urlInput.value.trim(); // .trim() to remove any whitespace

    loadLinks(); // Load saved links from local storage

    clearError(errorMessage); // Clear any previous error messages

    // imported validation function from utils.js
    try {
        url = validateUrl(url); // Validate the URL format and declaring url as the validated URL returned from the function.
        showLoading(submitBtn, urlInput); // Show loading state while validating


        await new Promise(resolve => setTimeout(resolve, 2000));  //this line simulates loading using setTimeout.
        const shortLink = await fetchShortUrl(url); // Fetch the shortened URL from the API
        showResult(shortLink, shortUrl, result); // Show the result on the UI. Passed in
        saveLink(shortLink); // Save the shortened link to local storage
        const savedLinks = loadLinks(); // Load the updated list of saved links
        renderSavedLinks(savedLinks, linksListContainer); // Render the saved links in the UI
        console.log(shortLink);

    } catch (error) {
        displayError(error.message, errorMessage); // Display the error message in browser
        return;
    } finally {
        hideLoading(submitBtn, urlInput); // Hide loading state after validation and API call
    }

    console.log('Submitted URL:', url);
}



// Event Listeners ----------------------------------------------------------------------------------------------
shortenForm.addEventListener('submit', handleSubmit);

copyBtn.addEventListener('click', async () => {
    const success = await copyTextToClipboard(shortUrl.href); // Pass the short URL to the copy function
    if (success) {
        copyBtn.textContent = 'Copied!';

        //setTimeout for resetting the button text back to copy
        setTimeout(() => {
            copyBtn.textContent = 'Copy';
        }, 1600);
    }
});

// Load saved links and render them on page load
// basically: initializing the app state when the app loads
document.addEventListener('DOMContentLoaded', () => {
    const links = loadLinks();
    renderSavedLinks(links, linksListContainer);
});