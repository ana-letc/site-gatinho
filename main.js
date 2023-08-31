let meuBody = document.getElementById("meuBody");
meuBody.style.margin = "20px";
meuBody.style.padding = "0";
meuBody.style.display = "grid";
meuBody.style.gridTemplateColumns = "1fr 1fr 1fr";
meuBody.style.alignItems = "center";
meuBody.style.backgroundColor = "#EFD3D7";

// const Cat = (name, image, qtd) => {
//   return { name: name, image: image, qtd: qtd };
// };

class Cat {
  constructor(id, name, image, qtd) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.qtd = qtd;
  }
}

let gatos = [];

const addCat = (name) => {
  let image = `https://loremflickr.com/320/240/cat?random=${getRandomInt(
    0,
    2000
  )}`;
  console.log(name);
  gatos.push(new Cat(gatos.length, name, image, 0));
};

const renderCat = (cat) => {
  let count = 0;

  let meuUl = document.createElement("ul");
  meuUl.className = "meuUl";

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

  let minhaImg = document.createElement("img");
  minhaImg.src = cat.image;
  minhaImg.style.width = "150px";
  minhaImg.style.height = "150px";
  minhaImg.style.borderRadius = "50%";
  minhaImg.style.gap = "10px";
  minhaLista.appendChild(minhaImg);

  let quantcliques = document.createElement("h4");
  quantcliques.textContent = cat.qtd;
  minhaLista.appendChild(quantcliques);

  let resultadoGato = document.createElement("h3");
  resultadoGato.id = "resultadoGato";
  resultadoGato.textContent = cat.name;
  console.log(resultadoGato.textContent);

  minhaLista.appendChild(resultadoGato);

  let gatoescolhido = document.createElement("p");
  gatoescolhido.textContent = gatos[gatos.length - 1];
  minhaLista.appendChild(gatoescolhido);

  let meuBotao = document.createElement("button");
  meuBotao.className = "meuBotao";
  meuBotao.dataset.dataid = cat.id;
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

  meuBotao.addEventListener("click", function (e) {
    gatos[e.target.dataset.dataid].qtd++;

    let qtdTotal = 0;
    gatos.forEach((element) => {
      qtdTotal += element.qtd;
    });

    document.getElementById("totalcliques").innerHTML = qtdTotal;
    renderListCats(gatos);
  });

  meuBotao.addEventListener("click", () => {});

  meuBotao2.addEventListener("click", function () {
    gatos = gatos.filter((g) => g.id != cat.id);
    renderListCats(gatos);
    document.getElementById("totalcliques").innerHTML = gatos.reduce(
      (prev, curr) => (prev.qtd || 0) + (curr.qtd || 0)
    );
  });
  meuUl.appendChild(minhaLista);
  meuBody.appendChild(meuUl);
};

const renderListCats = (gatos) => {
  let uls = document.querySelectorAll(".meuUl");
  uls.forEach((ul) => ul.remove());
  gatos.forEach((gato) => {
    renderCat(gato);
  });
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
  renderListCats(gatos);
});

//para adicionar a característica
/*function cliqueiEmAdc(){
  const adicionar = document.querySelector(".adicionar-caract").value

}*/

// Função para gerar números inteiros aleatórios
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// const caract = [
//   "lindo",
//   "charmoso",
//   "fofo",
//   "brincalhão",
//   "carinhoso",
//   "tímido",
//   "Mega fofo",
//   "Querendo um humano",
//   "muito fofinho também",
//   "Mais fofo ainda",
// ];

// for (let i = 0; i < 10; i++) {
//   gatos[i] = caract[getRandomInt(0, 10)];
// }

// let total = 0;

const filterElement = document.getElementById("filter-name");
filterElement.addEventListener("input", filterListas);

function filterListas(e) {
  let gatosFiltrados = gatos.filter((g) => g.name.includes(e.target.value));
  renderListCats(gatosFiltrados);
}
