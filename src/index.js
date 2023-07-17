import { fetchBreeds, fetchCatByBreed }  from "./cat-api";
import SlimSelect from 'slim-select'


const select = document.querySelector('.breed-select');
const selectBox = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorEl = document.querySelector('.error'); 

loader.classList.replace('loader', 'is-hidden');
errorEl.classList.add('is-hidden');
selectBox.classList.add('is-hidden');

select.addEventListener('change', onChange);

function onChange(id) {
    fetchCatByBreed(id)
        .then(({breedId}) => { 
            const markap = `` 
        })
        .catch(error => { console.log(error.message) });
    
}



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