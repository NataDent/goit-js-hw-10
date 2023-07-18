import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';


function fetchBreeds() {
    return axios('breeds').then(({ data }) => {
        return data;
    }).catch(error => {console.log(error)});
}

function fetchCatByBreed(breedId) {   
   
        return axios.get('breedId').then(req => 
            {if(!req.ok){
                throw new Error(res.error);
        }
            console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
            return req.json();
        })
    }

export { fetchBreeds, fetchCatByBreed };