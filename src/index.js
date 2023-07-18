import { fetchBreeds, fetchCatByBreed }  from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const selectBox = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

fetchBreeds()
    .then((data) => {
        
        createBreedsList(data);
    })
    .catch(error => { console.log(error) });
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
loader.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

function onChange(e) { 
    console.dir(e.target.childNodes) 
    fetchCatByBreed()
        .then(({breedId}) => { 
            const markap = `` 
        })
        .catch(error => { console.log(error.message) });
    
}
