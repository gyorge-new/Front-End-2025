const layouts = ["logica","botão","img","div","login","responsivo","input","tabelatempo","tabeladofabio","lojadofabio","exemplosdejs","exerciciosdejs","funcao","for"];
const titulos = ["Logica","Botão","Imgs","Divs","Login","Responsivo","Input","Tabela de tempo","Tabela do Fabio","Loja do Fabio","Exemplos de scripts JS","Exercícios do Fabio", "Funções", "Fortificando"];
const divlayouts = document.getElementById("Layouts")
const descricao = {
    logica: "Primeiro layout que eu fiz na aula do Fabio, aula de logica da computação, em 2024",
    botão: "Primeiro layout que fiz para o Fabio em 2025, na aula de Front-end",
    img: "Layout com 2 imagens e 3 textos",
    div: "Layout onde tem 2 caixas flutuantes que passa por cima de outras 2 divs",
    login: "Site para login",
    responsivo: "Primeiro layout do 2º trimestre escolar de 2025, um layout responsivo",
    input: "Layout cheio de inputs, um site de formulario",
    tabelatempo: "Tabela da previsão do tempo",
    tabeladofabio: "Tabela cheio de rowspan e colspan",
    lojadofabio: "Site de uma loja de roupas, ultimo layout antes do recesso de 2025",
    exemplosdejs: "Todos os exemplos que fiz na sala",
    exerciciosdejs: "Mais exercicíos que o Fabio passou",
    funcao: "Fabio tentando ensinar funções",
    for: "Exercicíos de for"
};

console.log(layouts);
console.log(descricao["logica"]);

for (let i = 0; i < layouts.length; i++) {
    const id = layouts[i];
    
    divlayouts.innerHTML += `
        <div id="${id}" class="cadadiv">
            <span id="${id}" class="txt">${titulos[i]}</span>
            <img id="${id}" class="tumbs" src="./imgs/Tumbs/${id}.png">
            <div id="${id}" class="div">
                <a id="${id}" class="botao" href="./htmls/${id}.html">Veja o layout</a>
            </div>
            <span id="${id}" class="dsc">${descricao[id]}</span>
        </div>
    `;
}