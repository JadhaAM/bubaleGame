var bubale = "";
var hitrn = 0;
var score = 0;



function incresSocre(params) {
    score += 10;
    console.log(score);
    document.querySelector("#score").innerHTML = score;
}
function resetScore(params) {
    score=0;
    document.querySelector("#score").innerHTML = score;
}

function getNewHit(params) {
    hitrn = Number(Math.floor(Math.random() * 10));

    document.querySelector("#hit").textContent = hitrn;
}
function makeBubale(params) {
    for (let index = 0; index < 180; index++) {
        var rn = Number(Math.floor(Math.random() * 10));
        bubale += ` <div class="buble">${rn}</div>`;

    }

    document.querySelector("#pbtm").innerHTML = bubale;
}

function gameOvere(params) {
    

    document.querySelector("#pbtm").innerHTML = `
    <div class="gameOver">
     <h1>game over </h1>
     <p>your socre :${score} </p>
     
    
     </div>`;


    setTimeout(() => {
        makeBubale();
        getNewHit();
        timeCount();

    }, 4000);
}

function timeCount(params) {
    var time = 60;
    let timedown = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else {
            clearInterval(timedown);
            document.querySelector("#pbtm").innerHTML = " ";
            gameOvere();
            resetScore();


        }
    }, 1000)
}

document.querySelector("#pbtm")
    .addEventListener("click", (detail) => {
        let clickNumber = Number(detail.target.textContent);
        if (hitrn === clickNumber) {
            incresSocre();
            makeBubale();
            getNewHit();
        }
    })


timeCount();
makeBubale();
getNewHit();

