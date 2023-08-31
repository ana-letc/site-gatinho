let meuBody = document.getElementById("meuBody");
meuBody.style.margin = "20px";
meuBody.style.padding = "0";
meuBody.style.display = "grid";
meuBody.style.gridTemplateColumns = "1fr 1fr 1fr";
meuBody.style.alignItems = "center";
meuBody.style.backgroundColor = "#EFD3D7";



const addCat = (name) => {
  let count = 0;
  let minhaLista = document.createElement("li");
  minhaLista.className = "lista";
  minhaLista.classList.add("container");
  minhaLista.style.background = "rgba( 255, 255, 255, 0.30 )";
  minhaLista.style.backdropFilter = "blur(16px)";
  minhaLista.style.width = "20vw";
  minhaLista.style.display = "flex";
  minhaLista.style.flexDirection = "column";
  minhaLista.style.justifyContent = "center";
  minhaLista.style.alignItems = "center";
  minhaLista.style.gap = "2px";
  minhaLista.style.padding = "15px";
  minhaLista.style.margin = "10px";
  minhaLista.style.borderRadius = "10px";


  /*let meuContainer = document.createElement("div");
  meuContainer.classList.add("container");
  meuContainer.style.background = "rgba( 255, 255, 255, 0.30 )";
  meuContainer.style.backdropFilter = "blur(16px)";
  meuContainer.style.width = "20vw";
  meuContainer.style.display = "flex";
  meuContainer.style.flexDirection = "column";
  meuContainer.style.justifyContent = "center";
  meuContainer.style.alignItems = "center";
  meuContainer.style.gap = "2px";
  meuContainer.style.padding = "15px";
  meuContainer.style.margin = "10px";*/

  let minhaImg = document.createElement("img");
  minhaImg.src = `https://loremflickr.com/320/240/cat?random=${getRandomInt(0, 2000)}`;
  minhaImg.style.width = "150px";
  minhaImg.style.height = "150px";
  minhaImg.style.borderRadius = "50%";
  minhaImg.style.gap = "10px";
  minhaLista.appendChild(minhaImg);

  let quantcliques = document.createElement("h4");
  quantcliques.textContent = "0";
  minhaLista.appendChild(quantcliques);

  let resultadoGato = document.createElement("h3");
  resultadoGato.id = "resultadoGato";
  resultadoGato.textContent = name;
  minhaLista.appendChild(resultadoGato);

  let gatoescolhido = document.createElement("p");
  gatoescolhido.textContent = gatos[gatos.length - 1];
  minhaLista.appendChild(gatoescolhido);

  let meuBotao = document.createElement("button");
  meuBotao.className = "meuBotao";
  meuBotao.textContent = "Doe aqui!";
  meuBotao.style.backgroundColor = "black";
  meuBotao.style.color = "white";
  meuBotao.style.alignContent = "center";
  meuBotao.style.alignItems = "center";
  meuBotao.style.borderRadius = "5px";
  meuBotao.style.border = "none";
  meuBotao.style.width = "100px";
  meuBotao.style.height = "40px";

  minhaLista.appendChild(meuBotao);

  let meuBotao2 = document.createElement("button");
  meuBotao2.className = "meuBotao2";
  meuBotao2.textContent = "Quero ignorar";
  meuBotao2.style.backgroundColor = "#AF4680";
  meuBotao2.style.color = "white";
  meuBotao2.style.alignContent = "center";
  meuBotao2.style.alignItems = "center";
  meuBotao2.style.borderRadius = "5px";
  meuBotao2.style.border = "none";
  meuBotao2.style.width = "100px";
  meuBotao2.style.height = "40px";
  minhaLista.appendChild(meuBotao2);

  meuBotao.addEventListener("click", function () {
    count++;
    quantcliques.textContent = count;
  });


  meuBotao.addEventListener("click", () => {
    total++;
    meuTitulo.textContent = total;
  });
  

  meuBotao2.addEventListener("click", function () {
    let countcat = quantcliques.textContent;
    meuTitulo.textContent =
      parseInt(meuTitulo.textContent) - parseInt(countcat);
    total = meuTitulo.textContent;
    minhaLista.remove();
  });

  meuBody.appendChild(minhaLista);
};

let meuTitulo = document.getElementById("totalcliques");
// adicionarGato.addEventListener("click", addCat);
adicionarGato.addEventListener("click", function (e) {
  e.preventDefault();
  let resultadoGato = document.getElementById("resultadoGato");
  let inputNome = document.getElementById("input-nome");
  const novoInput = inputNome.value;
  // resultadoGato.textContent = novoInput;
  addCat(novoInput);
});

//para adicionar a característica
/*function cliqueiEmAdc(){
  const adicionar = document.querySelector(".adicionar-caract").value

}*/

// Função para gerar números inteiros aleatórios
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const caract = [
  "lindo",
  "charmoso",
  "fofo",
  "brincalhão",
  "carinhoso",
  "tímido",
  "Mega fofo",
  "Querendo um humano",
  "muito fofinho também",
  "Mais fofo ainda",
];
const gatos = [];
for (let i = 0; i < 10; i++) {
  gatos[i] = caract[getRandomInt(0, 10)];
}

let total =0;




const filterElement = document.getElementById("filter-name");

const listas = document.querySelectorAll(".lista h3");
filterElement.addEventListener('input', filterListas)



function filterListas(){
  if(filterElement.value !== ''){
    for (let lista of listas){

      let title = title.getElementById("resultadoGato");
      title = title.textContent.tolowerCase();
      let filterText = filterElement.value.tolowerCase();
      if(!title.includes(filterText)){
      lista.style.display="none";
      }
      else{
      lista.style.display="block";
      }
  }
} else {
  for (let lista of listas){
    lista.style.display="block";
   }
  }
}
