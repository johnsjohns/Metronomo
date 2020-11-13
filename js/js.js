
var liga = true;
var BMP;
var velocidade = document.getElementById('display').value;
function som(){
    if(liga){
    tocar(velocidade, './sons/Clicks/Metronome Hi.wav');
    liga = false;
    } else {
        clearInterval(BMP);
        liga = true;
    }

}


function tocar(interval, som){
    var audio = new Audio(som);
    BMP = setInterval(() => {
        audio.play();
    }, ([60/interval*1000]));
}

function mais(){
    if(velocidade < 260){
        velocidade = parseInt(velocidade) + 1; 
        document.getElementById('display').value = velocidade;
    }
}


function menos(){
    if(velocidade > 40){
        velocidade = parseInt(velocidade) - 1; 
        document.getElementById('display').value = velocidade;
    }
}