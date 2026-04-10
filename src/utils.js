// utility helper functions ------------------------------------------------------------------------


export function validateUrl(url, errorMessage) {
    // checking if input is empty or not a url
    if (!url) {
        errorMessage.hidden = false;
        errorMessage.textContent = 'Please enter a URL.';
       // throw new Error('Please enter a URL.');
    }

    // adding http:// if the user didntt include it
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }

    try {
        const parsedUrl = new URL(url);

        // checking if the user's input has valid domain structure
        if (!parsedUrl.hostname.includes('.')) {
            errorMessage.hidden = false;
            errorMessage.textContent = 'Please enter a valid domain (e.g., google.com)';
            //throw new Error('Please enter a valid domain (e.g., google.com)');
        }

        return url; // Return the validated URL
    } catch {
        errorMessage.hidden = false;
        errorMessage.textContent = 'Invalid URL format. (include http:// or https://)';
        //throw new Error('Invalid URL format. (include http:// or https://)');
    }
}


// function that will make a copy of the link to clipboard
export async function copyTextToClipboard(shortUrl) {
    try {
        await navigator.clipboard.writeText(shortUrl);
        //console.log('Text copied to clipboard');
        return true; // copy was successful
    } catch (error) {
        //console.error('Failed to copy: ', error);
        return false; // copy failed
    }
}


