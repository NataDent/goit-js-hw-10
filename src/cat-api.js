import axios from "axios";
const ROOT_URL = 'https://api.thecatapi.com/v1';
const X_API_KEY = 'live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V';
const API_HEADERS = new Headers({
    'Content-Type': 'application/json',
    'x-api-key' : X_API_KEY,
});

axios.defaults.headers.common["x-api-key"] = "live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';


function fetchBreeds(){   
       return fetch(`${ROOT_URL}breeds`,{method:"GET", headers:API_HEADERS})
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
           return resp.json()})
        .then(res => {
           return res.map(obj => ({
                id: obj.id ,
                name: obj.name 
            }))
        })
        .catch(error =>console.log(error)); 
}
    
function fetchCatByBreed(breedId){     
        return fetch(`${ROOT_URL}images/search?breed_ids=${breedId}`, {method:"GET",headers:API_HEADERS}).then(req => 
            {if(!req.ok){
                throw new Error(req.error);
            }
            return req.json();
        })
    }

export { fetchBreeds, fetchCatByBreed };