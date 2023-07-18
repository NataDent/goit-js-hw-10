import { fetchBreeds, fetchCatByBreed }  from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const box = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

loader.setAttribute('hidden', true);
errorEl.setAttribute('hidden', true);

fetchBreeds()
    .then((data) => {
        
        createBreedsList(data);
    })
    .catch(() => { errorEl.removeAttribute('hidden') });

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

select.addEventListener('change', onChange);

function onChange(e) { 
    loader.removeAttribute('hidden');

    const breedId = e.target.value;
    console.dir(breedId);
    
    fetchCatByBreed(breedId)
        .then((data) => {
            const img = data.map((el) => {
                `<img src="${el.url}" alt ="some cat" width ="400" height ="400"/>`
            }).join('');
            box.innerHTML = img;
        }).catch(error => { console.log(error) })
    const arreyOfCats = [];
    data.map((el) => {
    el.breeds.forEach(cat => {
        arreyOfCats.push(cat);
        console.log(cat);
});
    })

}