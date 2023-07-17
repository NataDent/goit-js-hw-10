import { fetchBreeds, fetchCatByBreed }  from "./cat-api";
import SlimSelect from 'slim-select'


const select = document.querySelector('.breed-select');
const selectBox = document.querySelector('.cat-info');

new SlimSelect({
  select: 'breed-select'
})

fetchBreeds()
    .then((data) => {
        createBreedsList(data);
    })
    .catch(error => { console.log(error) });

function createBreedsList(data) {
    const result = data.map(({ id, name }) => {
        `<option value ='${id}'>${name}</option>`
    }).join('');
    select.innerHTML = result;
}