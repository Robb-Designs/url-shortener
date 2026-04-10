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
        new URL(url); // This will throw if the URL is invalid
        return url; 
    } catch {
        throw new Error('Invalid URL format. (include http:// or https://)');
    }
}