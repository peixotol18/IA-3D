const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
    alternativas:[
        {
        texto:"Sim",
        afirmativa:"Afirmativa da alernativa 1"}
        {
        texto:"Não",
        afirmativa:"Afirmativa da alternativa 2"
        }
    ]
    },
    {
        enunciado: "Você acha que a IA afeta nos etudos?",
        alternativas:[
        {
        texto:"Sim",
        afirmativa:"Afirmativa da alterntiva 1"}
        {
         texto:"Não",
         afirmativa:"Afirmativa da alternativa 2"}
    ]
    },
    {
        enunciado: "Vocẽ usa muito a IA?",
        alternativas:[
        {
        texto:"Sim",
        afirmativa:"Afirmativa da alterntiva 1"}
        {
         texto:"Não",
         afirmativa:"Afirmativa da alternativa 2"}
    ]     
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
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}