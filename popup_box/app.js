const  popup=document.getElementById("popup");
const content=document.querySelector(".content");
const btn=document.querySelector(".btn");

function openPopup(){
    popup.classList.add("open-popup");
    content.classList.add("content-hide");
    btn.classList.add("btn-hide");

}

function closePopup(){
    popup.classList.remove("open-popup");
    content.classList.remove("content-hide");
    btn.classList.remove("btn-hide");
}