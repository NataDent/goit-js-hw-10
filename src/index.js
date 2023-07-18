import { fetchBreeds, fetchCatByBreed }  from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.6.min.css";
import './css/styles.css';

const select = document.querySelector('.breed-select');
const box = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

loader.setAttribute('hidden', true)
errorEl.setAttribute('hidden', true);

fetchBreeds()
    .then((data) => {
        loader.removeAttribute('hidden');  
        createBreedsList(data);
    })
    .catch((err) => {
        Notify.warning(err.message)
    })
    .finally(() => {
        loader.setAttribute('hidden', true);
        box.removeAttribute('hidden');
    })

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
    
    const id = e.target.value;
    loader.removeAttribute('hidden');
    box.setAttribute('hidden', true)
    
    fetchCatByBreed(id)
        .then(({ data }) => {
            box.setAttribute('hidden', true)
            const imgUrl = data[0].url;
            const catName = data[0].breeds[0].name;
            const catTemperament = data[0].breeds[0].temperament;
            const catDescription = data[0].breeds[0].description;

            const markup = createMarkupCatInfo(imgUrl, catName, catTemperament, catDescription);
            box.innerHTML = markup;
        })
     .catch((err) => {
            Notify.warning(err.message)
        })
        .finally(() => {
          loader.setAttribute('hidden', true)
          box.removeAttribute('hidden');
        })
}

function createMarkupCatInfo(img, name, temperament, description) {

    return `<img src="${img}"width="400" height=auto alt="Some cat ${name}">
<h2 class="name">${name}</h2>
<ul class="list">
  <li>
    <p><b class='text-accent'>Temperament:&nbsp;</b>${temperament}</p>
  </li>
  <li>
    <p><b class='text-accent'>Description:&nbsp;</b>${description}</p>
  </li>
</ul>`
};
