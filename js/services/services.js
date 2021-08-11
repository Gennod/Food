const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return await res.json();
};

async function getData(url) {
    const res = await fetch(url);

    return await res.json();
}




export {postData};
export {getData};