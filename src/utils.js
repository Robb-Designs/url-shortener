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


// function that gets links, adds them to an array, and saves the array to local storage
 export function saveLink(link) {
    // Get existing links or initialize an empty array
    const links = JSON.parse(localStorage.getItem('shortLinks')) || []; 

    links.push(link);

    // Save the updated links array back to local storage
    // JSON.stringify to convert the array into a string so it can be stored in local storage
    localStorage.setItem('shortLinks', JSON.stringify(links));
 }

 // function that loads the saved links from local storage and returns them as an array
 export function loadLinks() {
    const links = JSON.parse(localStorage.getItem('shortLinks')) || [];
    return links;
 }


