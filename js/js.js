
var liga = true;
var intervalId = 0;
var BMP;
var audio;
var arquivo = './sons/Clicks/Metronome Hi.wav'
var velocidade = document.getElementById('display').value;

function som(){
    if(liga){
    tocar(velocidade, arquivo );
    liga = false;
    } else {
        clearInterval(BMP);
        liga = true;
    }

}


function tocar(interval, som){
    audio = new Audio(som);
    BMP = setInterval(() => {
        audio.play();
    }, ([60/interval*1000]));
}

function mais(){
    if(velocidade < 260){
        //aumenta em um a velociadade 
        velocidade = parseInt(velocidade) + 1;
        //atualizar o display para velocidade atual 
        document.getElementById('display').value = velocidade;
    }
}

function aumentar() {
    mais();
    intervalId = setInterval(mais, 500);
}

function pararAumentar(){
    if(intervalId !== 0){
        clearInterval(intervalId);
        intervalId = 0;
    }
}


function menos(){
    if(velocidade > 40){
        velocidade = parseInt(velocidade) - 1; 
        document.getElementById('display').value = velocidade;
    }
}

function diminuir(){
    menos();
    intervalId = setInterval(menos, 500);
}

function pararDiminuir(){
    if(intervalId !== 0){
        clearInterval(intervalId);
        intervalId = 0;
    }
}

function volume(){
    // armazenando o valor atual da slide bar
    intensidade = document.getElementById('volume').value;

    // verifica primeiro se o audio já existe
    if(audio !== undefined){
        //volume varia de 1 a 0. para ajusta o som a 20% fazemos audio.volume = 0,2. como a slide bar vai de 1 a 100, dividimos esse numero por 100
        audio.volume = intensidade / 100;
    }
}