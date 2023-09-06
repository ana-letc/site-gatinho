function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// a função cat com 5 parâmetros cria um objeto que representa um gato
const Cat = (parent, id, name, image, qtd) => {
  const state = { // cria um objeto state e armazena informações sobre o gato. Cada uma dessas propriedades é inicializada com o valor correspondente passado como argumento para a função. Quando chamo a função Cat com os argumentos apropriados, ela cria um objeto com as informações do gato e o armazena no objeto state. O objeto state representa o estado do gato e pode ser usado posteriormente para realizar ações e renderizar o gato.
    id: id, // define a propriedade 'id' do objeto state e a inicializa com o valor da variável 'id' que foi passada como argumento para a função. Basicamente, está atribuindo o valor da variável 'id' à propriedade "id" do objeto.
    name: name,
    image: image,
    qtd: qtd,
  };
// actions é um objeto e define uma função chamanda increment. A função não tem argumentos, mas é executada quando é chamada actions.increment()
  const actions = {
    increment() { 
      state.qtd = state.qtd + 1;
      parent.render(); // aqui a função notify é chamada. A mesma está definida no objeto actions, que é um objeto de parent.
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

    // o texto que será exibido dentro do h4 será igual ao valor de state.qtd
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

    // dentro da função anônoma, chama-se a função removeCat() encontrada no objeto actions do objeto parent. A função removeCat toma um argumento state.id e é usada para remover um gato de uma lista, o mesmo está identificado por state.id
    meuBotao2.addEventListener("click", function () {
      parent.actions.removeCat(state.id);
    });

    meuUl.appendChild(minhaLista);
    meuBody.appendChild(meuUl);
  }

  // este objeto tem três propriedades. Return é utilizado para sair da função e para trazer um valor de retorno. Esses elementos estão relacionados a um objeto maior e devolvendo esse objeto como resultado de uma função.
  // a declaração return é utilizada para sair da função e fornecer um valor de retorno
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
// actions possui como propriedades: notify e render; Notify não recebe argumnetos, mas será executada quando for chamada actions.notify()
  const actions = {
    notify() {
      render(); // render será executada quando for chamada notify() 
    },
    // definição de um método chamado filter. O método usa um parâmetro 'filtered', para aplicar um filtro a uma lista de gatos.
    //o valor do parâmetro é atribuído à propriedade filteredCats do objeto state. Isso implica que o método filter é utilizado para atualizar o estadi do aplicativo com uma lista de gatos filtrada. a propriedade filteredCats será utilizada para armazenar a lista de gatos após aplicar um filtro específico.
    //depois de atualizar o estado com o filtro 
    filter(filtered) {
      state.filteredCats = filtered;
      render();
    },
    addCat(name) {
      let image = `https://loremflickr.com/320/240/cat?random=${getRandomInt(
        0,
        2000
      )}`;
// aqui um novo gato foi adicionado à lista de gatos representados por state.catList. é utilizado o método push() para adicionar um elemento ao final da matriz 
      state.catList.push(
        Cat({ state, actions }, state.catList.length, name, image, 0)
      );
      //agora ele atualiza a propriedade filteredCats do objeto state
      state.filteredCats = state.catList;
      //após adicionar um novo gato, a lista filtrada será atualizada para incluir todos os gatos, sem aplicar nenhum filtro
      render();
    },
    removeCat(id) {
      state.catList = state.catList.filter((cat) => cat.state.id != id);
      state.filteredCats = state.catList;
      render();
    },
  };
// filter está chamando a função CatFilter e passando um objeto como argumento, contendo duas propriedades state e actions
  const filter = CatFilter({ state, actions });
  filter.render();

  function render() {
    let uls = document.querySelectorAll(".meuUl");
    uls.forEach((ul) => ul.remove()); // para cada elemento ul encontrada, chama-se o método remove() nesse elemento.Isso elimina todos os elementos ul da classe meulUl do doc DOM
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
