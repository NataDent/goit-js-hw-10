import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';


function fetchBreeds() {
    return axios('breeds').then(({ data }) => {
        return data;
    });
}

// function fetchCatByBreed(breedId) {   
   
//         return fetch(`${ROOT_URL}images/search?breed_ids=${breedId}`, {method:"GET",headers:API_HEADERS}).then(req => 
//             {if(!req.ok){
//                 throw new Error(req.error);
//             }
//             return req.json();
//         })
//     }

export { fetchBreeds };