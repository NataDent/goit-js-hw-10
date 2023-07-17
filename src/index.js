
import { fetchBreeds, fetchCatByBreed }  from "./cat-api";
import SlimSelect from 'slim-select'

console.log(axios.isCancel('something'));



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