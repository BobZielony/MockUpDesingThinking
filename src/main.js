import './style.css'
import {age,descriptions,names,pictures,places,whoTookPictures} from './settings';

const phone = document.getElementById("phone");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  loginForm.style.display = "none";
  phone.style.visibility = "visible";
  OnePerson();
})

const OnePerson = () =>{
  let returnString = "";
  for(let i = 0; i < pictures.length; i++){
    returnString += `
    <div class="onePerson">
      <img class="photo" src="${pictures[i]}" title="${whoTookPictures[i]}">
      <div class="imageText">
        <p class="name">${names[i]}, ${age[i]}</p>
        <p class="place">${places[i]}</p>
      </div>
    </div>
    
    `
  }
  phone.innerHTML = returnString;
}




