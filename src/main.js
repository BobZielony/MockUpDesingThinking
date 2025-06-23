import './style.css'
import {age,descriptions,names,pictures,places,whoTookPictures,religions,relationships} from './settings';

const phone = document.getElementById("phone");
const loginForm = document.getElementById("loginForm");
const messageBox = document.getElementById("messageBox");
const messageBoxButton = document.getElementById("messageBoxButton");



loginForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  loginForm.style.display = "none";
  phone.style.display = "block"
  OnePerson();
})

messageBoxButton.addEventListener("click",(e)=>{
  e.preventDefault();
  phone.style.display = "none";
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
        <p class="relationship">${relationships[i]}</p>
        <p class="religion">${religions[i]}</p>
      </div>
      <p class="description">${descriptions[i]}</p>
      <button class="sendMessage">Wyślij wiadomość do: <span class="nameInButton">${names[i]}</span></button>
    </div>
    `;
    
  }
  phone.innerHTML += returnString;
}






