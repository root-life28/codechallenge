const menuBtn=document.querySelector('.fa-bars');
const menuDiv=document.querySelector('.menu-btn');
const navigation=document.querySelector('.navigation');
const videoBtn=document.querySelectorAll('.nav-btn');
const slider=document.querySelectorAll('.video-slide');

const content=document.querySelectorAll('.content');

menuBtn.addEventListener('click',()=>{
   menuBtn.classList.toggle("fa-xmark");
   menuDiv.classList.toggle("active");
   navigation.classList.toggle("active");

});


var slideNav=function(manual){
    videoBtn.forEach((btn)=>{
        btn.classList.remove("active");
    });


    slider.forEach((btn)=>{
        btn.classList.remove("active");
    });

    content.forEach((cont)=>{
        cont.classList.remove("active");
    })


    videoBtn[manual].classList.add("active");
    slider[manual].classList.add("active");
    content[manual].classList.add("active");

}

videoBtn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        slideNav(i);
    })
})