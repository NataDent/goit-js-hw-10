export function fetchBreeds() {
    fetch(`${ROOT_URL}/breeds?api_key=${X_API_KEY}`)
        .then(resp => {
            console.log(resp);
    if (!resp.ok) {
        throw new Error(resp.status);
    }
    return resp.json();
})    
.catch(error => console.log(error))
}

export function fetchCatByBreed(breedId) {
    return fetch(`${ROOT_URL}/images/search?api_key=${X_API_KEY}breed_id=${breedId}`)
        .then(resp => {
            console.log(resp);
    if (!resp.ok) {
        throw new Error(resp.status);
    }
    return resp.json();
})    
.catch(error => console.log(error))
}