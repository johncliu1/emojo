function getEmoji(text) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    console.log("getting emoji for ", text);
    const body = JSON.stringify({
        text
    });

    const url = `https://us-central1-emojo-234d5.cloudfunctions.net/emojify?text=${text}`;
    return fetch(url, {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(({emojis}) => emojis)
        .catch((e) => console.log("the error ", e))
}