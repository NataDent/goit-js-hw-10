import axios from "axios";
import { fetchBreeds, fetchCatByBreed }  from "./cat-api";
import SlimSelect from 'slim-select'

const select = document.querySelector('.breed-select');
const selectBox = document.querySelector('.cat-info')
console.log(select)
// const selectBox = document.querySelector('.cat-info')


const ROOT_URL = 'https://api.thecatapi.com/v1/ ';
const X_API_KEY = 'live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V';

const API_HEADERS = new Headers({
    'Content-Type': 'application/json',
    'x-api-key' : X_API_KEY,
});

function fetchBreeds(){
       return fetch(`${ROOT_URL}breeds`,{method:"GET", headers:API_HEADERS})
           .then(resp => {
            console.log(resp)
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
           return resp.json()})
        .then(res => {
           return res.map(obj => ({
                id: obj.id ,
                name: obj.name
            }))
        })
        .catch(error =>console.log(error));
}
    


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
// const ROOT_URL = 'https://api.thecatapi.com/v1/ ';
// const X_API_KEY = 'live_FRHznCkDEBA2Kr8ISlGtYpZ1nMdTqK6BKbcxoCO4g6OBxRHHn0KzH6YXTjSxLe1V';

// const API_HEADERS = new Headers({
//     'Content-Type': 'application/json',
//     'x-api-key' : X_API_KEY,
// });

function fetchBreeds(){
       return fetch(`${ROOT_URL}breeds`,{method:"GET", headers:API_HEADERS})
           .then(resp => {
            console.log(resp)
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
           return resp.json()})
        .then(res => {
           return res.map(obj => ({
                id: obj.id ,
                name: obj.name
            }))
        })
        .catch(error =>console.log(error));
}
    
fetchBreeds().then(data => console.log(data))
