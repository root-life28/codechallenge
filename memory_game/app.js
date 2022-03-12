const cardArray=[
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    }
];

cardArray.sort(()=>0.5-Math.random());

const gridDisplay=document.querySelector("#grid");
const resultDisplay=document.querySelector('#result');
let cardChosen=[];
let cardChosenIds=[];
const cardsWon=[];
function createBoard(){
    for(let i=0;i<cardArray.length;i++)
    {
        const card=document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();


function checkMatch()
{

    const optionOneId=cardChosenIds[0];
    const optionTwoId=cardChosenIds[1];
    const cards=document.querySelectorAll('#grid img');
    if(optionOneId===optionTwoId)
    {
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('You have clicked same image!');

    }
    if(cardChosen[0]===cardChosen[1])
    {
        alert('You found a match');
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardChosen);
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('Sorry try again');
    }
    resultDisplay.textContent=cardsWon.length;
    cardChosen=[];
    cardChosenIds=[];
    if(cardsWon.length==cardArray.length/2)
    {
        resultDisplay.textContent="Congratulation!!! You found them all";
    }

   
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