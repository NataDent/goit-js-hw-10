import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_SEARCH = 'images/search';


function fetchBreeds() {
    return axios('breeds').then(({ data }) => {
        return data;
    }).catch(error => {console.log(error)});
}

function fetchCatByBreed(breedId) {   
   
    return axios.get(`${BASE_URL}${API_SEARCH}?breed_ids=${breedId}&has_breeds=1`)
        }
    

export { fetchBreeds, fetchCatByBreed };
    
