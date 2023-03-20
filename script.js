// A pontszámokat állítjuk be és a HTML elemeket válasszuk ki.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// A randomClass tömb tartalmazza a kő, papír és olló ikonokat a font-awesome-tól.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

// Játékfunkciók: Minden funkciót itt állítunk be a gombokhoz.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Itt generál random ikonokat a gép.
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           //Játékpontszám
           // Ha ez döntetlen.
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Draw ! ";
               text.style.color = 'orange';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'orange';
           } 
          // Ha nem döntetlen.
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
            }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
            }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
            }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
            }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
            }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }
        });
    });
}
// Meghívjuk a függvényt.
game();
// Ez a függvény tartalmazza a játék összes logikáját.