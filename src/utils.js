// utility helper functions ------------------------------------------------------------------------


export function validateUrl(url) {
    // checking if input is empty or not a url
    if (!url) {
        throw new Error('Please enter a URL.');
    }

    // adding http:// if the user didntt include it
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }

    try {
        const parsedUrl = new URL(url);

        // checking if the user's input has valid domain structure
        if (!parsedUrl.hostname.includes('.')) {
            throw new Error('Please enter a valid domain (e.g., google.com)');
        }

        return url; // Return the validated URL
    } catch {
        throw new Error('Invalid URL format. (include http:// or https://)');
    }
}


