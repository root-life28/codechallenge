const computerDisplay=document.getElementById('computer-chose');
const userDisplay=document.getElementById('your-chose');
const resultDisplay=document.getElementById('result');
let user_Chose;
let computer_Chose;
let result;
const userChoseBtn=document.querySelectorAll('button');


userChoseBtn.forEach(useChose=>useChose.addEventListener('click',(e)=>{
    user_Chose=e.target.id;
    userDisplay.innerHTML=user_Chose;

    computer();
    getResult()

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
    else computer_Chose='scissor';

    computerDisplay.innerHTML=computer_Chose;
   
}

function getResult()
{
    if(user_Chose===computer_Chose)
    {
        result="Its draw!";
    }
    else if(computer_Chose==='rock'&&user_Chose==='paper')
    {
        result="You Win!";
    }
    else if(computer_Chose==='rock'&&user_Chose==='scissor')
    {
        result="You lost!";
    }
    else if(computer_Chose==='paper'&&user_Chose==='scissor')
    {
        result="You win!";
    }
    else if(computer_Chose==='paper'&&user_Chose==='rock')
    {
        result="You lost!";
    }
    else if(computer_Chose==='scissor'&&user_Chose==='rock')
    {
        result="You win!";
    }
    else if(computer_Chose==='scissor'&&user_Chose==='paper')
    {
        result="You lost!";
    }
    resultDisplay.innerHTML=result
}