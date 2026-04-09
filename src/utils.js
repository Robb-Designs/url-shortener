// utility helper functions ------------------------------------------------------------------------


export function validateUrl(url) {
    if (!url) {
        throw new Error('Please enter a URL.');
    }

    try {
        new URL(url); // This will throw if the URL is invalid
    } catch {
        throw new Error('Invalid URL format. (include http:// or https://)');
    }
}