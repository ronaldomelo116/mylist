const buttonAdd = document.getElementById("button-add");
const newTask = document.getElementById("nova-tarefa");
const listTask = document.getElementById("list-tarefas");
const inputTitle = document.getElementById("input-title");
const listTitle = document.getElementById("list-title");
const modalDelete = document.getElementById("modal-delete");
const btnY = document.getElementById("btn-y");
const btnN = document.getElementById("btn-n");
const itemNomeModal = document.getElementById("item-nome-modal");

let indexParaApagar = null;
let tasks = JSON.parse(localStorage.getItem("my_tasks")) || [];

function saveTasks() {
  localStorage.setItem("my_tasks", JSON.stringify(tasks));
}

inputTitle.addEventListener("input", () => {
  const title = inputTitle.value.trim();
  listTitle.textContent = title || "Minha Lista";
  localStorage.setItem("title_list", title); // Salva o título
});

const titleSave = localStorage.getItem("title_list");
if (titleSave) {
  inputTitle.value = titleSave;
  listTitle.textContent = titleSave;
}

// 1. Criamos uma função única para adicionar a tarefa
function addTask() {
  const textInput = newTask.value.trim();


  if (textInput !== "") {
    tasks.push(textInput);

    saveTasks();
    renderTasks();

    newTask.value = "";
    newTask.focus();
  } else {
    // Se estiver vazio, exibe o alerta
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
  //limpa a lista atual na tela para não duplicar itens
  listTask.innerHTML = "";

  //percorre cada tarefa do array

  tasks.forEach((taskText, index) => {
    const newLi = document.createElement("li");
    newLi.textContent = taskText + " ";

    const buttonDel = document.createElement("button");
    buttonDel.innerHTML = `<i class="bi bi-trash-fill"></i>`;
    buttonDel.classList.add("btn-del");
    buttonDel.style.marginLeft = "10px";

    buttonDel.addEventListener("click", () => {
      
      indexParaApagar = index;

       itemNomeModal.textContent = `"${taskText}"`;
     
      modalDelete.showModal();
    });

    newLi.appendChild(buttonDel);
    listTask.appendChild(newLi);
  });
}

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

renderTasks();

