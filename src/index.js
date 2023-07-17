import axios from "axios";
import fetchBreeds  from "./cat-api";
import fetchCatByBreed from "./cat-api";
import SlimSelect from 'slim-select'

axios.defaults.headers.common["x-api-key"] = "live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';


// const ROOT_URL = 'https://api.thecatapi.com/v1';
const select = document.querySelector('.breed-select');
const selectBox = document.querySelector('.cat-info')

fetchBreeds().then(createBreedsList);
function createBreedsList(data) {  
  const result = data.map(({ id, name }) => ({
    text: name,
    value: id
  }));

  const emptyObj = { text: " ", value: " " };
    result.unshift(emptyObj);
    
     new SlimSelect({
    select: '.breed-select',
    data: result,    
  });    
}