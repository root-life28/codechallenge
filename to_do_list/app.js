const clear=document.querySelector(".clear");
const dateElement=document.getElementById('date');
const list =document.getElementById('list');
const input=document.getElementById('input');



const CHECK="fa-circle-check";
const UNCHECK="fa-circle";
const LINE_THROUGH="lineThrough";
let LIST,id=0;

     let data=localStorage.getItem("TODO");
     if(data){
         LIST=(JSON.parse(data));
         id=LIST.length;
         loadList(LIST);
     }
     else
     {
        LIST=[];
        id=0;
     }

     function loadList(array)
     {
         array.forEach(function(item){
             addToDo(item.name,item.id,item.done,item.trash);
         })
     }


const option={weekday:"long",month:"short",day:"numeric"};
const today=new Date();






dateElement.innerHTML=today.toLocaleDateString("en-US",option);


function addToDo(toDo,id,done,trash)
{
    if(trash)
    {
        return;
    }



    const DONE=done?CHECK:UNCHECK;
    const LINE=done?LINE_THROUGH:"";
    const item=`
    <li class="item">
    <i class="${'fa-regular '+DONE+' co'} " job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p>
    
    <i class="fa-solid fa-circle-minus de" job="delete" id="${id}"></i>
</li>
    `




    const position="beforeend";
    list.insertAdjacentHTML(position,item);
}

document.addEventListener("keyup",function(event){
    
    if (event.keyCode === 13)
    { const toDo=input.value;
        if(toDo)
        {
            addToDo(toDo,id,false,false);
            LIST.push({
                name:toDo,
                id:id,
                done:false,
                trash:false

            });
            localStorage.setItem("TODO",JSON.stringify(LIST));
            id++;
        }
        input.value="";
    }
});

function completeToDo(element)
{
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK)
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done=LIST[element.id].done ? false:true;
}


function removeTodo(element)
{
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash=true;
}

list.addEventListener("click",function(event){

   const element=event.target;
   let elementJob;
    if(element.attributes.job){
     elementJob=element.attributes.job.value;
    }

    if(elementJob=="complete")
    {
        completeToDo(element);
    }
    else if(elementJob=="delete")
    {
        removeTodo(element);
    }
    localStorage.setItem("TODO",JSON.stringify(LIST));
});

clear.addEventListener('click',()=>{
   LIST=[];
   localStorage.setItem("TODO",JSON.stringify(LIST));
   location.reload();

});