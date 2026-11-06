
// Variáveis para os elementos do DOM
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
// Variáveis de controle
let indexToDelete = null;
let indexForEditing = null;
// Recupera as tarefas do localStorage ou inicializa como um array vazio
let tasks = JSON.parse(localStorage.getItem("my_tasks")) || [];

// Função para salvar as tarefas no localStorage
function saveTasks() {
  localStorage.setItem("my_tasks", JSON.stringify(tasks));
};

// Atualiza o título da lista e salva no localStorage
inputTitle.addEventListener("input", () => {
  const title = inputTitle.value;
  
  const textToRecord = title.trim();// Remove espaços em branco no início e no fim

  listTitle.textContent = textToRecord || "Minha Lista";
  localStorage.setItem("title_list", textToRecord); // Salva o título
});

// Recupera o título salvo do localStorage ao carregar a página
const titleSave = localStorage.getItem("title_list");
if (titleSave) {
  inputTitle.value = titleSave;
  listTitle.textContent = titleSave;
};

// 1. Criamos uma função única para adicionar a tarefa
function addTask() {
  const textInput = newTask.value.trim();

  if (textInput !== "") {

    if (indexForEditing === null) {

      tasks.push(textInput);
    } else {

      tasks[indexForEditing] = textInput;

      indexForEditing = null;
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
      indexToDelete = index;
      itemNomeModal.textContent = `"${taskText}"`;
      modalDelete.showModal();
    });

    const buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = `<i class="bi bi-pencil-fill"></i>`;
    buttonEdit.classList.add("btn-edit");
    buttonEdit.style.marginLeft = "10px";
    buttonEdit.title = "Editar item";

    buttonEdit.addEventListener("click", () => {
      indexForEditing = index;
      inputEditTask.value = taskText;
      modalEdit.showModal();
    });

    divButtons.appendChild(buttonEdit);
    divButtons.appendChild(buttonDel);

    newLi.appendChild(divButtons);

    listTask.appendChild(newLi);
  });
};

// Função para apagar a tarefa selecionada
btnY.addEventListener("click", () => {
  if (indexToDelete !== null) {
    
    // 1. Encontra a tag <li> exata no HTML
    const itemVisual = listTask.children[indexToDelete];
    
    // 2. Adiciona a classe que faz o item deslizar (que criámos no CSS)
    itemVisual.classList.add("item-apagado");
    
    // 3. Fecha o modal imediatamente
    modalDelete.close();

    // 4. Espera 400ms para apagar os dados reais
    setTimeout(() => {
      tasks.splice(indexToDelete, 1); // Apaga APENAS UMA VEZ aqui dentro
      saveTasks();
      renderTasks();
      indexToDelete = null;
    }, 400);
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
  indexForEditing = null; // Limpa o índice de edição
});

btnSaveEdit.addEventListener("click", () => {
  const editedText = inputEditTask.value.trim();
  if (editedText !== "" && indexForEditing !== null) {
    tasks[indexForEditing] = editedText;
    saveTasks();
    renderTasks();
    modalEdit.close(); // Fecha o popup após salvar
    indexForEditing = null; // Limpa o índice de edição
  } else {
    alert("O campo de edição não pode estar vazio.");
  }
});

// Renderiza as tarefas ao carregar a página

renderTasks();

