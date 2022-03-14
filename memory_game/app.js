const cardArray=[
    {
        name:'argentina',
        img:'images/flag-of-Argentina.png'
    },
    {
        name:'bangladesh',
        img:'images/flag-of-Bangladesh.png'
    },
    {
        name:'brazil',
        img:'images/flag-of-Brazil.png'
    },
    {
        name:'canada',
        img:'images/flag-of-Canada.png'
    },
    {
        name:'india',
        img:'images/flag-of-India.png'
    },
    {
        name:'singapore',
        img:'images/flag-of-Singapore.png'
    },
    {
        name:'usa',
        img:'images/flag-of-United-States-of-America.png'
    },
    {
        name:'malaysia',
        img:'images/flag-of-Malaysia.png'
    },
    {
        name:'uk',
        img:'images/flag-of-United-Kingdom.png'
    },
    {
        name:'argentina',
        img:'images/flag-of-Argentina.png'
    },
    {
        name:'bangladesh',
        img:'images/flag-of-Bangladesh.png'
    },
    {
        name:'brazil',
        img:'images/flag-of-Brazil.png'
    },
    {
        name:'canada',
        img:'images/flag-of-Canada.png'
    },
    {
        name:'india',
        img:'images/flag-of-India.png'
    },
    {
        name:'singapore',
        img:'images/flag-of-Singapore.png'
    },
    {
        name:'usa',
        img:'images/flag-of-United-States-of-America.png'
    },
    {
        name:'malaysia',
        img:'images/flag-of-Malaysia.png'
    },
    {
        name:'uk',
        img:'images/flag-of-United-Kingdom.png'
    }
];

cardArray.sort(()=>0.5-Math.random());

let totalTry=0;
const gridDisplay=document.querySelector("#grid");
const resultDisplay=document.querySelector('#result');
const totalDisplay=document.querySelector('#tryTotal');
const winMsg=document.querySelector('.win-msg');
const reset=document.querySelector('.reset');
let cardChosen=[];
let cardChosenIds=[];
const cardsWon=[];
function createBoard(){
    for(let i=0;i<cardArray.length;i++)
    {
        const card=document.createElement('img');
        card.setAttribute('src','images/blank.jpeg');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();


function checkMatch()
{
    totalTry++;

    const optionOneId=cardChosenIds[0];
    const optionTwoId=cardChosenIds[1];
    const cards=document.querySelectorAll('#grid img');
    if(optionOneId===optionTwoId)
    {
        cards[optionOneId].setAttribute('src','images/blank.jpeg');
        cards[optionTwoId].setAttribute('src','images/blank.jpeg');
        alert('You have clicked same image!');
        
    }
    if(cardChosen[0]===cardChosen[1])
    {
        // alert('You found a match');
        // cards[optionOneId].setAttribute('src','images/white.png');
        // cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardChosen);
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.jpeg');
        cards[optionTwoId].setAttribute('src','images/blank.jpeg');
        // alert('Sorry try again');
    }
    resultDisplay.textContent=cardsWon.length;
    cardChosen=[];
    cardChosenIds=[];
    if(cardsWon.length==cardArray.length/2)
    {
        winMsg.textContent="Congratulation!!! You found them all";
    }

    totalDisplay.textContent=totalTry;


   
}   

function flipCard(){
    const cardId=this.getAttribute('data-id');
    
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);

    this.setAttribute('src',cardArray[cardId].img);

    if(cardChosen.length===2)
    {
        setTimeout(checkMatch,500)
    }

}

reset.addEventListener('click',()=>{
    location.reload();
})