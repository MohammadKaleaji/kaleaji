// Varibles

const startBtn = document.querySelector('#start-btn');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerChoice = document.querySelector('#player-ch');
const computerChoice = document.querySelector('#computer-ch');
const msg = document.querySelector('#message');
const pScore = document.querySelector('#computer-score');
const cScore = document.querySelector('#player-score');


const Game = () => {
    let computerArray = ["✊", "🖐", "✌️"];
    let computer_ch = '';
    let user_ch = '';
    let comp_score = 0
    let user_score = 0


    //Border Variable

    const border = document.querySelector('.active');



    //Timer 

    let timeleft = 5;
    let downloadTimer = setInterval(function () {
        if (timeleft < 0) {
            clearInterval(downloadTimer);

            document.getElementById("countdown").innerHTML = "TIME IS UP!";
            msg.innerText = 'Game Over!';

            document.getElementById('rock').classList.add('disabled');
            document.getElementById('paper').classList.add('disabled');
            document.getElementById('scissors').classList.add('disabled');

           

        } else {

            document.getElementById("countdown").innerHTML = timeleft + "s";

            //borders

            const border = document.querySelector('.active');
            border.style.border = '2px solid red';
            border.style.borderRadius = '20px';

            // Disable Butoons

            document.getElementById('rock').classList.remove('disabled');
            document.getElementById('paper').classList.remove('disabled');
            document.getElementById('scissors').classList.remove('disabled');

            //Disable Start to end the game
            document.getElementById('start-btn').classList.add('disabled');


            // Rock Paper Scissors Cases Respectively

            rockBtn.addEventListener('click', () => {

                computer_ch = computerArray[Math.floor(Math.random() * computerArray.length)];

                computerChoice.innerText = computer_ch;

                playerChoice.innerText = rockBtn.innerText;

                user_ch = rockBtn.innerText;

                checkWinner(computer_ch, user_ch);
            });


            paperBtn.addEventListener('click', () => {

                computer_ch = computerArray[Math.floor(Math.random() * computerArray.length)];

                computerChoice.innerText = computer_ch;

                playerChoice.innerText = paperBtn.innerText;

                user_ch = paperBtn.innerText;

                checkWinner(computer_ch, user_ch);
            });

            scissorsBtn.addEventListener('click', () => {

                computer_ch = computerArray[Math.floor(Math.random() * computerArray.length)];

                computerChoice.innerText = computer_ch;

                playerChoice.innerText = scissorsBtn.innerText;

                user_ch = scissorsBtn.innerText;

                checkWinner(computer_ch, user_ch);
            });
        }

        //Checking Winner Function

        function checkWinner(computer_ch, user_ch) {

            if (user_ch === computer_ch) {


                msg.classList.remove("text-success");
                msg.classList.remove("text-danger");
                msg.innerText = "Tie";
            }

            else if (user_ch === "✊") {
                if (computer_ch === "🖐") {

                    msg.innerText = "👉 You lose! Paper covers Rock";


                    msg.classList.remove("text-success");
                    msg.classList.add("text-danger");

                    // cScore.innerText = ++comp_score;
                    cScore.innerText = comp_score++;
                }
                else {

                    msg.innerHTML = "👉 You win! Rock smashes Scissors";


                    msg.classList.remove("text-danger");
                    msg.classList.add("text-success");

                    // pScore.innerText = ++user_score;
                    pScore.innerText = user_score++;
                }
            }
            else if (user_ch === "🖐") {
                if (computer_ch === "✌️") {

                    msg.innerText = "👉 You lose! Scissor cut Paper";


                    msg.classList.remove("text-success");
                    msg.classList.add("text-danger");

                    // cScore.innerText = ++comp_score;
                    cScore.innerText = comp_score++;
                }
                else {

                    msg.innerHTML = "👉 You win! Paper covers Rock";


                    msg.classList.remove("text-danger");
                    msg.classList.add("text-success");

                    // pScore.innerText = ++user_score;
                    pScore.innerText = user_score++;
                }
            }
            else if (user_ch == "✌️") {
                if (computer_ch == "✊") {

                    msg.innerText = "👉 You lose! Rock smashes Scissors";


                    msg.classList.remove("text-success");
                    msg.classList.add("text-danger");

                    // cScore.innerText = ++comp_score;
                    cScore.innerText = comp_score++;

                }
                else {

                    msg.innerHTML = "👉 You win! Scissor cut Paper";


                    msg.classList.remove("text-danger");
                    msg.classList.add("text-success");

                    // pScore.innerText = ++user_score;
                    pScore.innerText = user_score++;
                }
            }
            else {
                msg.innerHTML = ":(";
            }

            //Disable the border 
            border.style.border = '';

            
        }

        // if (document.getElementById("countdown") === 'TIME IS UP!'){
        //     msg.innerText = 'GAME OVER!';
        // }

        timeleft -= 1;
    }, 1000);
    
}

startBtn.onclick = Game;
