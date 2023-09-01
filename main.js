function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// a função cat cria um gato com esses parâmetros/ cada cat tem um estado/cada cat tem a ação de incremento no contador/ eu entendi que o render mostra o Cat
const Cat = (parent, id, name, image, qtd) => {
  const state = {
    id: id,
    name: name,
    image: image,
    qtd: qtd,
  };

  const actions = {
    increment() {
      state.qtd = state.qtd + 1;
      parent.actions.notify();
    },
  };

  function render() {
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
    minhaImg.src = state.image;
    minhaImg.style.width = "150px";
    minhaImg.style.height = "150px";
    minhaImg.style.borderRadius = "50%";
    minhaImg.style.gap = "10px";
    minhaLista.appendChild(minhaImg);

    let quantcliques = document.createElement("h4");
    quantcliques.textContent = state.qtd;
    minhaLista.appendChild(quantcliques);

    let resultadoGato = document.createElement("h3");
    resultadoGato.id = "resultadoGato";
    resultadoGato.textContent = state.name;
    console.log(resultadoGato.textContent);

    minhaLista.appendChild(resultadoGato);

    /*let gatoescolhido = document.createElement("p");
      gatoescolhido.textContent = gatos[gatos.length - 1];
      minhaLista.appendChild(gatoescolhido);*/

    let meuBotao = document.createElement("button");
    meuBotao.className = "meuBotao";
    meuBotao.dataset.dataid = state.id;
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
      actions.increment();
    });

    meuBotao2.addEventListener("click", function () {
      parent.actions.removeCat(state.id);
    });

    meuUl.appendChild(minhaLista);
    meuBody.appendChild(meuUl);
  }

  return {
    state: state,
    actions: actions,
    render: render,
  };
};

//Cada novo Cat vai ser adicionado na CatList/ Catlist possui dois atributos no estado, uma lista para receber os gatos e filteredcats para receber gatos filtrados
const CatList = () => {
  const state = {
    catList: [],
    filteredCats: [],
  };

  const actions = {
    notify() {
      render();
    },
    filter(filtered) {
      state.filteredCats = filtered;
      render();
    },
    addCat(name) {
      let image = `https://loremflickr.com/320/240/cat?random=${getRandomInt(
        0,
        2000
      )}`;

      state.catList.push(
        Cat({ state, actions }, state.catList.length, name, image, 0)
      );
      state.filteredCats = state.catList;
      render();
    },
    removeCat(id) {
      state.catList = state.catList.filter((cat) => cat.state.id != id);
      state.filteredCats = state.catList;
      render();
    },
  };

  const filter = CatFilter({ state, actions });
  filter.render();

  function render() {
    let uls = document.querySelectorAll(".meuUl");
    uls.forEach((ul) => ul.remove());
    state.filteredCats.forEach((gato) => {
      gato.render();
    });

    let qtdTotal = 0;
    state.filteredCats.forEach((element) => {
      qtdTotal += element.state.qtd;
    });

    document.getElementById("totalcliques").innerHTML = qtdTotal;
  }

  return {
    state: state,
    actions: actions,
    render: render,
  };
};

const CatFilter = (parent) => {
  const state = {
    text: "",
    filteredCats: [],
  };

  const actions = {
    search(catList, text) {
      state.filteredCats = catList.filter((g) => g.state.name.includes(text));
      parent.actions.filter(state.filteredCats);
    },
  };

  function render() {
    const filterElement = document.getElementById("filter-name");
    filterElement.addEventListener("input", (e) => {
      actions.search(parent.state.catList, e.target.value);
    });
  }

  return {
    state: state,
    actions: actions,
    render: render,
  };
};

const App = () => {
  function render() {
    const list = CatList();
    list.render();

    let meuBody = document.getElementById("meuBody");
    meuBody.style.margin = "20px";
    meuBody.style.padding = "0";
    meuBody.style.display = "grid";
    meuBody.style.gridTemplateColumns = "1fr 1fr 1fr";
    meuBody.style.alignItems = "center";
    meuBody.style.backgroundColor = "#EFD3D7";

    const adicionarGato = document.getElementById("adicionarGato");
    adicionarGato.addEventListener("click", function (e) {
      e.preventDefault();
      let inputNome = document.getElementById("input-nome");
      const catName = inputNome.value;
      list.actions.addCat(catName);
    });
  }

  return {
    render: render,
  };
};

const app = App();
app.render();
