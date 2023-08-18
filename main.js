let meuBody = document.getElementById("meuBody");
meuBody.style.margin = "0";
meuBody.style.padding = "0";
meuBody.style.display = "flex";
// meuBody.style.justifyContent = "center";
meuBody.style.alignItems = "center";
meuBody.style.height = "100vh";
meuBody.style.backgroundColor = "#EFD3D7";
  
let meuTitulo = document.getElementById("totalcliques");
meuTitulo.style.display="grid";



for (let i = 0; i < 10; i++) {

  let count = 0;

  let meuContainer = document.createElement("div");

  meuContainer.classList.add("container");

  meuContainer.style.background ="rgba( 255, 255, 255, 0.30 )";

  meuContainer.style.backdropFilter ="blur (16px)";

  meuContainer.style.height = "auto";

  meuContainer.style.width = "100vw";

  meuContainer.style.display = "grid";

  meuContainer.style.gap = "20px";

  meuContainer.style.alignItems = "center";

  meuContainer.style.padding = "10px";

 

  let minhaImg = document.createElement("img");

  minhaImg.src = `https://loremflickr.com/320/240/cat/?random=${i}`;

  minhaImg.style.display = "grid";

  minhaImg.style.width = "200px";

  minhaImg.style.height = "200px";

  minhaImg.style.gap = "10px";

  meuContainer.appendChild(minhaImg);

 

  let quantcliques = document.createElement("p");
  quantcliques.className ="quantcliquestotais";

  quantcliques.textContent = "Doações: 0 ";

  meuContainer.appendChild(quantcliques);

 

  let meuBotao = document.createElement("button");

  meuBotao.className = "meuBotao";

  meuBotao.textContent = "Doe aqui!";

  meuBotao.style.backgroundColor = "black";

  meuBotao.style.color = "white";

  meuBotao.style.alignContent = "center";

  meuBotao.style.alignItems = "center";

  meuBotao.style.borderRadius = "5px";

  meuBotao.style.width = "100px";

  meuBotao.style.height = "40px";

  meuContainer.appendChild(meuBotao);

 

  let meuBotao2 = document.createElement("button");

  meuBotao2.className = "meuBotao2";

  meuBotao2.textContent = "Quero ignorar";

  meuBotao2.style.backgroundColor = "red";

  meuBotao2.style.color = "white";

  meuBotao2.style.alignContent = "center";

  meuBotao2.style.alignItems = "center";

  meuBotao2.style.borderRadius = "5px";

  meuBotao2.style.width = "100px";

  meuBotao2.style.height = "40px";

  meuContainer.appendChild(meuBotao2);

 

  meuBotao.addEventListener("click", function () {
    count++;
    quantcliques.textContent = count;
  });

  let botoes = document.querySelectorAll('.meuBotao');    
  let total = 0;
    botoes.forEach(meuBotao =>{
    meuBotao.addEventListener('click', () => {
        total++;    
        meuTitulo.textContent = total;
    });
  });

//   let botoes2 = document.querySelectorAll('.meuBotao2');    
//     botoes2.forEach(meuBotao2 =>{
//     meuBotao2.addEventListener('click', () => {
//         total--;    
//         meuTitulo.textContent = "Total: " + total--;
//     });
//   });
  
  meuBotao2.addEventListener("click", function () {

    let countcat = meuContainer.querySelector(".quantcliquestotais").innerHTML;
    meuTitulo.textContent = parseInt(meuTitulo.textContent) - parseInt(countcat);
    meuContainer.remove();

  });


  meuBody.appendChild(meuContainer);


}