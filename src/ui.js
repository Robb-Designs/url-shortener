// UI functions ------------------------------------------------------------------


// loading state
export function showLoading(submitBtn, urlInput) { // passed in the submit button and url input as params
    submitBtn.textContent = "Shortening...";
    submitBtn.disabled = true;
    urlInput.disabled = true;

    console.log("loading active...")
}

// hide loading state
export function hideLoading(submitBtn, urlInput) {
    submitBtn.textContent = "Get Your Shorty";
    submitBtn.disabled = false;
    urlInput.disabled = false;
}

//show result
export function showResult(shortLink, shortUrl, result) { // passed in the shortUrl and result elements as params
    shortUrl.textContent = shortLink;
    shortUrl.href = shortLink;

    result.hidden = false;
}

//display error message
export function displayError(message, errorMessageElement) {
    errorMessageElement.textContent = message;
    errorMessageElement.hidden = false;
    
    // setTimeoput to hide the error message after 5 secs
     setTimeout(() => {
        errorMessageElement.hidden = true;
    }, 5000);
}

//clear error message
export function clearError(errorMessageElement) {
    errorMessageElement.textContent = '';
    errorMessageElement.hidden = true;
}