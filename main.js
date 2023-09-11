class Tarefa {
  constructor(id, descricao, onUpdate, onDelete) {
    this.id = id;
    this.descricao = descricao;
    this.concluido = false;
    this.favorito = false;
    this.onUpdate = onUpdate;
    this.onDelete = onDelete;
  }

  concluir() {
    this.concluido = true;
    this.onUpdate(this);
  }
  reverter() {
    this.concluido = false;
    this.onUpdate(this);
  }

  favoritar() {
    this.favorito = true;
    this.onUpdate(this);
  }
  
  desfavoritar() {
    this.favorito = false;
    this.onUpdate(this);
  }

  remove() {
    this.onDelete(this);
  }

  render() {
    let meuUl = document.createElement("ul");
    meuUl.className = "meuUl";

    let minhaLista = document.createElement("li");
    minhaLista.className = "lista";
    minhaLista.classList.add("container");
    minhaLista.style.background = "rgba( 255, 255, 255, 0.30 )";
    if (this.concluido) {
      minhaLista.style.background = "rgba( 255, 255, 255, 0.10 )";
    }
    if (this.favorito) {
      minhaLista.style.background = "rgba( 255, 20, 147, 0.30 )";
    }
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
    // o texto que será exibido dentro do h4 será igual ao valor de state.qtd
    let resultadoGato = document.createElement("h3");
    resultadoGato.id = "resultadoGato";
    resultadoGato.textContent = this.descricao;
    console.log(resultadoGato.textContent);

    minhaLista.appendChild(resultadoGato);

    /*let gatoescolhido = document.createElement("p");
      gatoescolhido.textContent = gatos[gatos.length - 1];
      minhaLista.appendChild(gatoescolhido);*/

    let meuBotao = document.createElement("button");
    meuBotao.className = "meuBotao";
    meuBotao.dataset.dataid = this.id;
    meuBotao.textContent = this.concluido ? "Reverter" : "Concluir!";
    meuBotao.style.backgroundColor = "black";
    meuBotao.style.color = "white";
    meuBotao.style.alignContent = "center";
    meuBotao.style.alignItems = "center";
    meuBotao.style.borderRadius = "5px";
    meuBotao.style.border = "none";
    meuBotao.style.width = "80px";
    meuBotao.style.height = "30px";
    minhaLista.appendChild(meuBotao);

    let meuBotao2 = document.createElement("button");
    meuBotao2.className = "meuBotao2";
    meuBotao2.textContent = "remover";
    meuBotao2.style.backgroundColor = "#AF4680";
    meuBotao2.style.color = "white";
    meuBotao2.style.alignContent = "center";
    meuBotao2.style.alignItems = "center";
    meuBotao2.style.borderRadius = "5px";
    meuBotao2.style.border = "none";
    meuBotao2.style.width = "80px";
    meuBotao2.style.height = "30px";
    minhaLista.appendChild(meuBotao2);

    let meuBotaoFavorito = document.createElement("button");
    meuBotaoFavorito.className = "meuBotaoFavorito";
    meuBotaoFavorito.textContent = this.favorito ? "Desfavoritar" : "Favoritar";
    meuBotaoFavorito.style.backgroundColor = "#ff1493";
    meuBotaoFavorito.style.color = "white";
    meuBotaoFavorito.style.alignContent = "center";
    meuBotaoFavorito.style.alignItems = "center";
    meuBotaoFavorito.style.borderRadius = "5px";
    meuBotaoFavorito.style.border = "none";
    meuBotaoFavorito.style.width = "80px";
    meuBotaoFavorito.style.height = "30px";
    minhaLista.appendChild(meuBotaoFavorito);

    let self = this;
    meuBotao.addEventListener("click", () => {
      if (self.concluido) {
        self.reverter();
      } else {
        self.concluir();
      }
    });
    meuBotao2.addEventListener("click", () => {
      self.remove();
    });

    meuBotaoFavorito.addEventListener("click", () => {
      if (self.favorito) {
        self.desfavoritar();
      } else {
        self.favoritar();
      }
    });

    document.addEventListener("DOMContentLoaded", function(){
      const mostrarFavoritos = document.getElementById("mostrarFavoritos");

      mostrarFavoritos.addEventListener("click", function(){
        list.mostrarFavoritos();
      });
    });

    meuUl.appendChild(minhaLista);
    meuBody.appendChild(meuUl);
  }
}

class TarefaList {
  constructor() {
    this.tarefas = [];
    this.filtered = [];
    const filterElement = document.getElementById("filter-name");
    let self = this;
    filterElement.addEventListener("input", (e) => {
      self.filtrar(e.target.value);
    });
  }

  notify(c) {
    this.render(); // render será executada quando for chamada notify()
  }
  // definição de um método chamado filter. O método usa um parâmetro 'filtered', para aplicar um filtro a uma lista de gatos.
  //o valor do parâmetro é atribuído à propriedade filtered do objeto state. Isso implica que o método filter é utilizado para atualizar o estadi do aplicativo com uma lista de gatos filtrada. a propriedade filtered será utilizada para armazenar a lista de gatos após aplicar um filtro específico.
  //depois de atualizar o estado com o filtro
  filtrar(text) {
    this.filtered = this.tarefas.filter((g) => g.descricao.includes(text));
    this.render();
  }
  add(name) {
    let self = this;

    // aqui um novo gato foi adicionado à lista de gatos representados por state.tarefas. é utilizado o método push() para adicionar um elemento ao final da matriz
    this.tarefas.push(
      new Tarefa(
        this.tarefas.length,
        name,
        (cat) => {
          self.notify();
        },
        (cat) => {
          self.removeCat(cat.id);
        }
      )
    );
    //agora ele atualiza a propriedade filtered do objeto state
    this.filtered = this.tarefas;
    //após adicionar um novo gato, a lista filtrada será atualizada para incluir todos os gatos, sem aplicar nenhum filtro
    this.render();
  }

  removeCat(id) {
    this.tarefas = this.tarefas.filter((cat) => cat.id != id);
    this.filtered = this.tarefas;
    this.render();
  }

  render() {
    let uls = document.querySelectorAll(".meuUl");
    uls.forEach((ul) => ul.remove()); // para cada elemento ul encontrada, chama-se o método remove() nesse elemento.Isso elimina todos os elementos ul da classe meulUl do doc DOM

    this.filtered.forEach((gato) => {
      gato.render();
    });
  }

  mostrarFavoritos(){
    this.filtered = 
  }
}

const App = () => {
  const list = new TarefaList();
  list.render();

  function render() {
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
      const descricao = inputNome.value;
      list.add(descricao);
    });
  }

  return {
    render: render,
  };
};

const app = App();
app.render();
