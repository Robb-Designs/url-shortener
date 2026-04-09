// UI functions ------------------------------------------------------------------


// loading state
export function showLoading(submitBtn, urlInput) {
    submitBtn.textContent = 'Shortening...';
    submitBtn.disabled = true;
    urlInput.disabled = true;

    console.log("loading active...")
}

//show result
export function showResult(shortLink) {
    shortUrl.textContent = shortLink;
    shortUrl.href = shortLink;

    result.hidden = false;
}