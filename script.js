var tentativas = 3;
var numeroSecreto = gerarNumeroSecreto();

var chute = document.getElementById("chute");
var botaoChutar = document.getElementById("chutar");
var resultado = document.getElementById("resultado");
var botaoRecomecar = document.getElementById("recomecar");

function gerarNumeroSecreto(){
    return parseInt(Math.random() * 11);
}

function chutar() {

    var valorChute = parseInt(chute.value);
    var mensagem = "";

    if (valorChute > 10 || valorChute < 0) {
        mensagem = "Digite um número de 0 a 10";
    } else if (valorChute == numeroSecreto) {
        mensagem= "Você está com Sorte!";
    } else if (valorChute > numeroSecreto) {
        tentativas = tentativas - 1;
        mensagem = "Ih, chutou muito alto! Tente mais uma vez, você tem mais " + tentativas + " tentativas.";
    } else if (valorChute < numeroSecreto) {
        tentativas = tentativas - 1;
        mensagem = "Xii, chutou baixo! Tente novamente! Você tem mais " + tentativas + " tentativas.";
    }
          
    if (tentativas <= 0) {
        botaoRecomecar.style.display = "";
        botaoChutar.disabled = true;
        mensagem = "Acabaram suas chances, o número da Sorte era " + numeroSecreto + ".";
    }

    resultado.innerHTML = mensagem;         
}

function reload(){
    tentativas = 3;
    numeroSecreto = gerarNumeroSecreto();

    chute.value = ""; //Limpar o valor do input   
    resultado.innerHTML = "";
    botaoChutar.disabled = false;
    botaoRecomecar.style.display = "none";
}
      
    