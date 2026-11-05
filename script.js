const buttonAdd = document.getElementById("button-add");
const newTask = document.getElementById("nova-tarefa");
const listTask = document.getElementById("list-tarefas");
const inputTitle = document.getElementById("input-title");
const listTitle = document.getElementById("list-title");
const taskCounter = document.getElementById("task-counter");
const btnCopy = document.getElementById("btn-copy");
// Variáveis para o modal de exclusão
const modalDelete = document.getElementById("modal-delete");
const btnY = document.getElementById("btn-y");
const btnN = document.getElementById("btn-n");
const itemNomeModal = document.getElementById("item-nome-modal");
// Variáveis para o modal de edição
const modalEdit = document.getElementById("modal-edit");
const inputEditTask = document.getElementById("input-edit-task");
const btnCancelEdit = document.getElementById("btn-cancel-edit");
const btnSaveEdit = document.getElementById("btn-save-edit");

let indexParaApagar = null;
let indexParaEditar = null;
let tasks = JSON.parse(localStorage.getItem("my_tasks")) || [];

function saveTasks() {
  localStorage.setItem("my_tasks", JSON.stringify(tasks));
};

inputTitle.addEventListener("input", () => {
  const title = inputTitle.value.trim();
  listTitle.textContent = title || "Minha Lista";
  localStorage.setItem("title_list", title); // Salva o título
});

const titleSave = localStorage.getItem("title_list");
if (titleSave) {
  inputTitle.value = titleSave;
  listTitle.textContent = titleSave;
};

// 1. Criamos uma função única para adicionar a tarefa
function addTask() {
  const textInput = newTask.value.trim();

  if (textInput !== "") {

    if (indexParaEditar === null) {

      tasks.push(textInput);
    } else {

      tasks[indexParaEditar] = textInput;

      indexParaEditar = null;
      buttonAdd.textContent = "Adicionar";
    }

    saveTasks();
    renderTasks();
    newTask.value = "";
    newTask.focus();

  } else {
    alert("adicione o valor");
  }
}

// 2. Ouvinte para o CLIQUE do botão
buttonAdd.addEventListener("click", addTask);
// 3. Ouvinte para a tecla ENTER dentro do input
newTask.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    addTask();
  }
});

//função de Renderização
function renderTasks() {


  taskCounter.textContent = `Total: ${tasks.length}`;
  //limpa a lista atual na tela para não duplicar itens
  listTask.innerHTML = "";
  //percorre cada tarefa do array
  tasks.forEach((taskText, index) => {

    const newLi = document.createElement("li");
    newLi.textContent = taskText + " ";

    const divButtons = document.createElement("div");
    divButtons.classList.add("div-buttons");

    const buttonDel = document.createElement("button");
    buttonDel.innerHTML = `<i class="bi bi-trash-fill"></i>`;
    buttonDel.classList.add("btn-del");
    buttonDel.style.marginLeft = "10px";
    buttonDel.title = "Excluir item";

    buttonDel.addEventListener("click", () => {
      indexParaApagar = index;
      itemNomeModal.textContent = `"${taskText}"`;
      modalDelete.showModal();
    });

    const buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = `<i class="bi bi-pencil-fill"></i>`;
    buttonEdit.classList.add("btn-edit");
    buttonEdit.style.marginLeft = "10px";
    buttonEdit.title = "Editar item";

    buttonEdit.addEventListener("click", () => {
      indexParaEditar = index;
      inputEditTask.value = taskText;
      modalEdit.showModal();
    });

    divButtons.appendChild(buttonEdit);
    divButtons.appendChild(buttonDel);

    newLi.appendChild(divButtons);

    listTask.appendChild(newLi);
  });
};

btnY.addEventListener("click", () => {
  if (indexParaApagar !== null) {
    tasks.splice(indexParaApagar, 1);
    saveTasks();
    renderTasks();
    modalDelete.close(); // Fecha o popup
  }
});

btnN.addEventListener("click", () => {
  modalDelete.close(); // Fecha o popup sem fazer nada
});

btnCopy.addEventListener("click", () => {
  let textToCopy = listTitle.textContent + "\n\n";
  tasks.forEach((tarefaAtual) => {
    textToCopy += "- " + tarefaAtual + "\n";
  });
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Lista copiada com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar a lista: ", err);
    });
});

btnCancelEdit.addEventListener("click", () => {
  modalEdit.close(); // Fecha o popup sem fazer nada
  indexParaEditar = null; // Limpa o índice de edição
});

btnSaveEdit.addEventListener("click", () => {
  const editedText = inputEditTask.value.trim();
  if (editedText !== "" && indexParaEditar !== null) {
    tasks[indexParaEditar] = editedText;
    saveTasks();
    renderTasks();
    modalEdit.close(); // Fecha o popup após salvar
    indexParaEditar = null; // Limpa o índice de edição
  } else {
    alert("O campo de edição não pode estar vazio.");
  }
});

// Renderiza as tarefas ao carregar a página

renderTasks();

