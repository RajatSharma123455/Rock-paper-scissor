let computerPick='';
let result= '';
var score={};
if(localStorage.getItem("score")){
    score = JSON.parse(localStorage.getItem("score"))
}else
{
    score={tie:0, wins:0, loss:0};
}

function computerMove(){

    const randomNumber=Math.random();
    

if(  randomNumber >= 0 && randomNumber <=(1/3)){
    computerPick='rock';

} else if(randomNumber > (1/3) && randomNumber < (2/3) ){
    computerPick='paper';
} 

else if(randomNumber >= (2/3) && randomNumber <= 1 ) {
    
    computerPick='scissor';
}
}


function finalResult(mymove){

if(mymove==="rock"){
    if( computerPick === 'rock' ){
        result='tie';
        
    } else if( computerPick === 'paper' ){
        result='you loss';
    } 
    
    else if( computerPick === 'scissor' ){
        result='you win';
    }
}

if(mymove==="paper"){
    if( computerPick === 'rock' ){
        result='you win';
        
    } else if( computerPick === 'paper' ){
        result='tie';
    } 
    
    else if( computerPick === 'scissor' ){
        result='you loss';
    }
}

if(mymove==="scissor"){
    if( computerPick === 'rock' ){
        result='you loss';
        
    } else if( computerPick === 'paper' ){
        result='you win';
    } 
    
    else if( computerPick === 'scissor' ){
        result='tie';
    }
}
console.log("Computer vs My Move = ", computerPick, " VS ",  mymove, " = ", result);
}


function calResult(){
    if(result==='you win'){
        score.wins +=1;
    }
    else if(result==='you loss'){
        score.loss += 1;
    } else if(result==='tie'){
        score.tie += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));
   score= JSON.parse(localStorage.getItem('score'));
    console.log('show result:',score);
}
function resetvalue(){
    score={tie:0, wins:0, loss:0};
    console.log(score);


}
console.log(JSON.stringify(score));

function showOnScreen(mymove){
console.log("computermove:" ,computerPick,"mymove", mymove);
document.querySelector('.showMoves').innerHTML= mymove===''?'':` 
you <img  class="img-icon" src="${mymove}-emoji.png">
computer <img class="img-icon" src="${computerPick}-emoji.png">;`

        document.querySelector('.screen').innerHTML= (`wins: ${score.wins}, Loss: ${score.loss}, Tie: ${score.tie}`);
}
  
showOnScreen('');