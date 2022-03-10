const computerDisplay=document.getElementById('computer-chose');
const userDisplay=document.getElementById('your-chose');
const resultDisplay=document.getElementById('result');
let user_Chose;
let computer_Chose;
let result;
const userChoseBtn=document.querySelectorAll('button');


userChoseBtn.forEach(useChose=>useChose.addEventListener('click',(e)=>{
    user_Chose=e.target.id;
    userDisplay.innerHTML=user_Chose.toUpperCase();

    computer();
    getResult();
    setTimeout(()=>{
        console.log("ok");
        if(result==='You Win!')
        {
            window.alert("Wooooooooow!! you win the game!!!!!")
        }

    },100)
        
    
    

}));


function  computer()
{
    const randomNumber=Math.floor(Math.random()*userChoseBtn.length)+1;
    if(randomNumber===1)
    {
        computer_Chose='rock';
    }
    else if(randomNumber===2)
    {
        computer_Chose='paper';
    }
    else computer_Chose='scissors';

    computerDisplay.innerHTML=computer_Chose.toUpperCase();
   
}

function getResult()
{
    if(user_Chose===computer_Chose)
    {
        result="Its draw!";
    }
    else if(computer_Chose==='rock'&&user_Chose==='paper')
    {
        result='You Win!';
    }
    else if(computer_Chose==='rock'&&user_Chose==='scissors')
    {
        result="You lost!";
    }
    else if(computer_Chose==='paper'&&user_Chose==='scissors')
    {
        result='You Win!';
    }
    else if(computer_Chose==='paper'&&user_Chose==='rock')
    {
        result="You lost!";
    }
    else if(computer_Chose==='scissors'&&user_Chose==='rock')
    {
        result='You Win!';
    }
    else if(computer_Chose==='scissors'&&user_Chose==='paper')
    {
        result="You lost!";
    }

    resultDisplay.innerHTML=result.toUpperCase();
}