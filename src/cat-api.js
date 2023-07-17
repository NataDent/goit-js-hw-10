import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';


function fetchBreeds() {
    return axios('breeds').then(({ data }) => {
        return data;
    }).catch(error => {console.log(error)});
}

function fetchCatByBreed(breedId) {   
   
        return axios ('images/search').then(res => 
            {if(!res.ok){
                throw new Error(res.error);
            }
            return res.json();
        })
    }

export { fetchBreeds, fetchCatByBreed };