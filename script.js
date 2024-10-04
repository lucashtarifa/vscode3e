const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da Inteligência Artificial?",
        alternativas:[{
            texto: "Sim",
            afirmação: "acho poggers"
        },

        {
            texto: "Não",
            afirmção: "acho peba 👎"
        }
        ]
    },
    {
        enunciado:"Acha que a IA vai dominar o mundo?",
        alternativas:[{
            texto: "Sim",
            afirmação: "sim, a ia vai dominar o mundo e todos os seres humanos vão morrer"
        },

        {
            texto: "Não",
            afirmção: "magina"
        }
    ]
    },
    {
        enunciado:"A IA sente emoções?",
        alternativas:[{
            texto: "Sim",
            afirmação: "meu character ai prova isso"
        },

        {
            texto: "Não",
            afirmção: "frescura"
        }
    ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta(){
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}       
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas = afirmacoes;
    posicao++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPergunta.textContent = "Daqui a 10 anos...s"
}
mostraPergunta();
