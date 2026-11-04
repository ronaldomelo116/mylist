const buttonAdd = document.getElementById("button-add");
const newTarefa = document.getElementById("nova-tarefa");
const listTarefa = document.getElementById("list-tarefas");
const inputTitle = document.getElementById("input-title");
const listTitle = document.getElementById("list-title");

inputTitle.addEventListener("input", () => {
  if (inputTitle.value.trim() !== "") {
    listTitle.textContent = inputTitle.value;
  } else {
    listTitle.textContent = "Minha Lista";
  }
});

// 1. Criamos uma função única para adicionar a tarefa
function adicionarTarefa() {
  const textInput = newTarefa.value.trim();

  if (textInput !== "") {
    const newLi = document.createElement("li");

    newLi.textContent = textInput + " ";

    const buttonDel = document.createElement("button");
    buttonDel.textContent = "x";
    buttonDel.classList.add("btn-del");
    buttonDel.style.marginLeft = "10px";

    buttonDel.addEventListener("click", () => {
      newLi.remove();
    });

    newLi.appendChild(buttonDel);

    listTarefa.appendChild(newLi);

    // Limpa o input e devolve o foco
    newTarefa.value = "";
    newTarefa.focus();
  } else {
    // Se estiver vazio, exibe o alerta
    alert("adicione o valor");
  }
}

// 2. Ouvinte para o CLIQUE do botão
buttonAdd.addEventListener("click", adicionarTarefa);

// 3. Ouvinte para a tecla ENTER dentro do input
newTarefa.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});

