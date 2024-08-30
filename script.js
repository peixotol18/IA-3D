const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "VOCÊ USA MUITO IA",
        alternativas:["SIM","NÃO"]
    },
    {
        enunciado: "VOCÊ CONSIDERA IA ALGO BOM PARA A EDUCAÇÃO",
        alternativas:["NÃO","SIM"]
    },
    {
        enunciado: "VOCÊ CONCORDA QUE A IA ETÁ DEIXANDO TUDO MAIS FÁCIL NO APRENDIZADO",
        alternativas:["SIM","NÃO"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa;
    }
}