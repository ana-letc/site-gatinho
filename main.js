let meuBody = document.getElementById("meuBody");
meuBody.style.margin = "20px";
meuBody.style.padding = "0";
meuBody.style.display = "grid";
meuBody.style.gridTemplateColumns = "1fr 1fr 1fr";
meuBody.style.alignItems = "center";
meuBody.style.backgroundColor = "#EFD3D7";
  
let meuTitulo = document.getElementById("totalcliques");


//let meuh2 = document.getElementById("meuTitulo");


// Função para gerar números inteiros aleatórios
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const caract = ["lindo", "charmoso", "fofo", "brincalhão"];
const gatos = [];
for (let i=0; i<10; i++){
  gatos[i] = caract[getRandomInt(0, 4)];
}

let total = 0;
for (let i = 0; i < 10; i++) {
  let count = 0;
  let meuContainer = document.createElement("div");
  meuContainer.classList.add("container");
  meuContainer.style.background ="rgba( 255, 255, 255, 0.30 )";
  meuContainer.style.backdropFilter ="blur(16px)";
  meuContainer.style.width = "20vw";
  meuContainer.style.display = "flex";
  meuContainer.style.flexDirection="column";
  meuContainer.style.justifyContent="center";
  meuContainer.style.alignItems="center";
  meuContainer.style.gap = "2px";
  meuContainer.style.padding = "15px";
  meuContainer.style.margin = "10px";
 
 
 
  let minhaImg = document.createElement("img");
  minhaImg.src = `https://loremflickr.com/320/240/cat/?random=${i}`;
  minhaImg.style.width = "150px";
  minhaImg.style.height = "150px";
  minhaImg.style.borderRadius="50%";
  minhaImg.style.gap = "10px";
  meuContainer.appendChild(minhaImg);


  let quantcliques = document.createElement("h4");
  //quantcliques.className ="quantcliquestotais";
  quantcliques.textContent = "0";
  meuContainer.appendChild(quantcliques);

  let gatoescolhido = document.createElement("p");
  gatoescolhido.textContent = gatos[i];
  meuContainer.appendChild(gatoescolhido);
  console.log(gatoescolhido.textContent);
 
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

  meuContainer.appendChild(meuBotao);


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
  meuContainer.appendChild(meuBotao2);


  meuBotao.addEventListener("click", function () {
    count++;
    quantcliques.textContent = count;
  });
  

  let botoes = document.querySelectorAll('.meuBotao');    
  meuBotao.addEventListener("click", () => {
      total++;    
      meuTitulo.textContent = total;
  });

  meuBotao2.addEventListener("click", function () {
    //let countcat = meuContainer.querySelector(".quantcliquestotais").innerHTML;
    let countcat = quantcliques.textContent;
    meuTitulo.textContent = parseInt(meuTitulo.textContent) - parseInt(countcat);
    total = meuTitulo.textContent;
    meuContainer.remove(); 
  
  });

  meuBody.appendChild(meuContainer);
  
}

