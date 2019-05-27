var scores, activeplayer, roundscores, gameplaying, maxnumber;

resetfunc();

function diceshower() {
    if (gameplaying) {
        var dice0 = Math.floor((Math.random() * 6) + 1);
        var dice1 = Math.floor((Math.random() * 6) + 1);
        document.querySelector('.dice0').style.display = 'block';
        document.querySelector('.dice1').style.display = 'block';
        document.querySelector('.dice0').src = 'dice-' + dice0 + '.png';
        document.querySelector('.dice1').src = 'dice-' + dice1 + '.png';
        console.log(dice0, dice1);
        if (dice1 !== dice0 || dice1 !== 6) {
            if (dice0 !== 1 && dice1 !== 1) {
                roundscores += dice0 + dice1;
                if (activeplayer === 0) {
                    document.querySelector('#current-0').textContent = roundscores;
                } else {
                    document.querySelector('#current-1').textContent = roundscores;
                }
            } else {
                roundscores = 0;
                if (activeplayer === 0) {
                    document.querySelector('#current-0').textContent = roundscores;
                } else {
                    document.querySelector('#current-1').textContent = roundscores;
                }
                if (activeplayer === 0) {
                    activeplayer = 1;
                    document.querySelector('.player-0-panel').classList.remove('active');
                    document.querySelector('.player-1-panel').classList.add('active');
                } else {
                    activeplayer = 0;
                    document.querySelector('.player-1-panel').classList.remove('active');
                    document.querySelector('.player-0-panel').classList.add('active');
                }
            }
        } else {
            roundscores = 0;
            if (activeplayer === 0) {
                document.querySelector('#current-0').textContent = roundscores;
            } else {
                document.querySelector('#current-1').textContent = roundscores;
            }
            if (activeplayer === 0) {
                activeplayer = 1;
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.add('active');
            } else {
                activeplayer = 0;
                document.querySelector('.player-1-panel').classList.remove('active');
                document.querySelector('.player-0-panel').classList.add('active');
            }
        }
    }
}


function holdscore() {
    if (gameplaying) {
        if (activeplayer === 0) {
            scores[0] += Number(document.querySelector('#current-0').textContent);
            roundscores = 0;
            document.querySelector('#current-0').textContent = 0;
            document.querySelector('#score-0').textContent = scores[0];
            activeplayer = 1;
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.dice0').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
            if (Number(document.querySelector('#score-0').textContent) >= maxnumber) {
                document.querySelector('#name-0').textContent = "Winner!";
                document.querySelector('.dice0').style.display = 'none';
                document.querySelector('.dice1').style.display = 'none';
                gameplaying = false;
            }

        } else {
            scores[1] += Number(document.querySelector('#current-1').textContent);
            roundscores = 0;
            document.querySelector('#current-1').textContent = 0;
            document.querySelector('#score-1').textContent = scores[1];
            activeplayer = 0;
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('.dice0').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
            if (Number(document.querySelector('#score-1').textContent) >= maxnumber) {
                document.querySelector('#name-1').textContent = "Winner!";
                document.querySelector('.dice0').style.display = 'none';
                document.querySelector('.dice1').style.display = 'none';
                gameplaying = false;
            }
        }
    }
}




function resetfunc() {
    scores = [0, 0];
    roundscores = 0;
    activeplayer = 0;
    gameplaying = true;
    document.querySelector('.dice0').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

function onInputChange() {
    maxnumber = Number(document.getElementById("maxnumber").value);
    console.log(maxnumber);
}

function onInutFocus() {
    document.getElementById("maxnumber").value = ""
}

document.querySelector('.btn-roll').addEventListener('click', diceshower);

document.querySelector('.btn-hold').addEventListener('click', holdscore);

document.querySelector('.btn-new').addEventListener('click', resetfunc);

