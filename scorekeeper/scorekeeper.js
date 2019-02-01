var p1score = document.querySelector('#p1score');
var p2score = document.querySelector('#p2score');

var p1scorecard = 0;
var p2scorecard = 0;


var matchCount = document.querySelector('#match');

var matchInput = document.querySelector('input');

var p1button = document.querySelector('#p1but');
var p2button = document.querySelector('#p2but');
var resetbutton = document.querySelector('#reset');

var limit = Number(matchCount.textContent);
var game = true;

p1button.addEventListener('click',function(){
    if(game){
        if(p1scorecard < limit ){
            p1scorecard += 1;
            if(p1scorecard === limit){
                p1score.style.color = "green";
                p2score.style.color = "red";
                game = false;
            }
            p1score.innerText = p1scorecard;
        }
        else{
            game = false;
        }
    }
    
});

p2button.addEventListener('click',function(){
    if(game){
        if(p2scorecard < limit ){
            p2scorecard += 1;
            if(p2scorecard === limit){
                p2score.style.color = "green";
                p1score.style.color = "red";
                game = false;
            }
            p2score.innerText = p2scorecard;
        }else{
            game = false;
        }
    }
   
});


matchInput.addEventListener("change",function(){
    matchCount.textContent = this.valueAsNumber;
    limit = matchInput.valueAsNumber;
    reset();
    // game = true;
});

resetbutton.addEventListener("click",function(){
    limit = 5;
    matchCount.textContent = limit;
    reset();
})


function reset(){
    p1scorecard = 0;
    p1score.textContent = 0;
    p1score.style.color = "black";

    p2scorecard = 0;
    p2score.textContent = 0;
    p2score.style.color = "black";
    game = true;
}
// if()