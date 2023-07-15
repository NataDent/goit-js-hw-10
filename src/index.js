const ROOT_URL = 'https://api.thecatapi.com/v1/images/';
const X_API_KEY = 'live_EoiEHQFHGA9fSObTg9LvrdmbjMOo1jxuHEpYvjlDJSD2ztHdQxpughVUKKy6jSwQ';
const PATH = ':image_id';
const select = document.querySelector('.breed-select');


function fetchBreeds() {
    fetch(`${ROOT_URL}${PATH}/breeds?api_key=${X_API_KEY}`)
.then(resp => {
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp.json();
})    
.catch(error => console.log(error))
}
fetchBreeds();    