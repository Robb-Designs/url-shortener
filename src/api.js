// API FETCHING --------------------------------------------------------------------------------

export async function fetchShortUrl(longUrl) {
    const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            "Authorization": "Bearer a92baae034a6f0e33a4ba340549340e25e41c70b", //my access token
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "long_url": longUrl,
        })
    })

    const data = await response.json();

    // testing to see the API response in the console
    //console.log("Bitly response:", data);

    if (!response.ok) {
        throw new Error(data.message || 'Failed to shorten URL');
    }

    return data.link; // should return the shortened URL

}


