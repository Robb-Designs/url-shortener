// UI functions ------------------------------------------------------------------


// loading state
export function showLoading() {
    submitBtn.textContent = 'Shortening...';
    submitBtn.disabled = true;
    urlInput.disabled = true;
}

//show result
export function showResult(shortLink) {
    shortUrl.textContent = shortLink;
    shortUrl.href = shortLink;

    result.hidden = false;
}