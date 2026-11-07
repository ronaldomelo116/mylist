// Variáveis para os elementos do DOM
const buttonAdd = document.getElementById("button-add");
const newTask = document.getElementById("nova-tarefa");
const listTask = document.getElementById("list-tarefas");

// Variáveis para o modal de edição do título
const btnEditTitle = document.getElementById("btn-edit-title");
const modalEditTitle = document.getElementById("modal-edit-title");
const inputEditTitle = document.getElementById("input-edit-title");
const btnCancelTitle = document.getElementById("btn-cancel-title");
const btnSaveTitle = document.getElementById("btn-save-title");

// Variáveis para o título da lista e contador de tarefas
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

//Variáveis para o modal de informações
const btnInfo = document.getElementById("btn-info");
const modalInfo = document.getElementById("modal-info");
const btnCloseInfo = document.getElementById("btn-close-info");

// Variáveis para o tema
const btnTheme = document.getElementById("btn-theme");
const body = document.body;

// Variáveis para o OCR
const btnCamera = document.getElementById("btn-camera");
const cameraInput = document.getElementById("camera-input");

// Variáveis de controle
let indexToDelete = null;
let indexForEditing = null;
let dragStartIndex = null;
// Recupera as tarefas do localStorage ou inicializa como um array vazio
let tasks = JSON.parse(localStorage.getItem("my_tasks")) || [];

// Função para salvar as tarefas no localStorage
function saveTasks() {
  localStorage.setItem("my_tasks", JSON.stringify(tasks));
};


// Recupera o título salvo do localStorage ao carregar a página
const titleSave = localStorage.getItem("title_list");
if (titleSave) {
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

    //ativa o recurso de arrastar e soltar para cada item da lista
    newLi.setAttribute("draggable", true);

    newLi.addEventListener("dragstart", () => {
      dragStartIndex = index;
      newLi.classList.add("dragging");
    });

    newLi.addEventListener("dragover", (evento) => {
      evento.preventDefault();
    });

    newLi.addEventListener("drop", () => {
      const dragEndIndex = index;
      const itemMoved = tasks.splice(dragStartIndex, 1)[0];

      tasks.splice(dragEndIndex, 0, itemMoved);
      saveTasks();
      renderTasks();
    });

    const divButtons = document.createElement("div");
    divButtons.classList.add("div-buttons");
    divButtons.style.display = "flex";
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

    const itemVisual = listTask.children[indexToDelete];
    itemVisual.classList.add("item-apagado");

    modalDelete.close();

    setTimeout(() => {
      tasks.splice(indexToDelete, 1);
      saveTasks();
      renderTasks();
      indexToDelete = null;
    }, 400);
  }
});

// Função para cancelar a exclusão da tarefa

btnN.addEventListener("click", () => {
  modalDelete.close(); // Fecha o popup sem fazer nada
});

// Função para copiar a lista de tarefas para a área de transferência
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

inputEditTask.addEventListener("keydown", (evento) => {
  if(evento.key == "Enter") {
    evento.preventDefault();
    btnSaveEdit.click();
  }
});

// Funções para editar o título da lista
btnEditTitle.addEventListener("click", () => {
  inputEditTitle.value = listTitle.textContent;
  modalEditTitle.showModal()
});

btnCancelTitle.addEventListener("click", () => {
  modalEditTitle.close();
});

btnSaveTitle.addEventListener("click", () => {
  const newTitle = inputEditTitle.value.trim();

  if (newTitle !== "") {
    listTitle.textContent = newTitle;
    localStorage.setItem("title_list", newTitle);
    modalEditTitle.close();
  } else {
    alert("O titulo da lista não pode esta vazio.");
  }
});

inputEditTitle.addEventListener("keydown", (evento) => {
  if(evento.key == "Enter") {
    evento.preventDefault();
    btnSaveTitle.click();
  }
});

// Função para o modal de informações
btnInfo.addEventListener("click", () => {
  modalInfo.showModal();
});

btnCloseInfo.addEventListener("click", () => {
  modalInfo.close();
});

btnTheme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    btnTheme.innerHTML = `<i class="bi bi-sun-fill"></i>`;
    localStorage.setItem("theme", "dark");
  } else {
    btnTheme.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    localStorage.setItem("theme", "light");
  }
});

const themeSave = localStorage.getItem("theme");
if (themeSave === "dark") {
  body.classList.add("dark-mode");
  btnTheme.innerHTML = `<i class="bi bi-sun-fill"></i>`;
}

// Função para fechar o modal se clicar fora dele
function closeIfClickOutside(evento, modalElement) {

    const dimensions = modalElement.getBoundingClientRect();

    if (
      evento.clientX < dimensions.left ||
      evento.clientX > dimensions.right ||
      evento.clientY < dimensions.top ||
      evento.clientY > dimensions.bottom
    ) {
      modalElement.close();
    }
  }

modalInfo.addEventListener("click", (evento) => closeIfClickOutside(evento, modalInfo));
modalEdit.addEventListener("click", (evento) => closeIfClickOutside(evento, modalEdit));
modalDelete.addEventListener("click", (evento) => closeIfClickOutside(evento, modalDelete));
modalEditTitle.addEventListener("click", (evento) => closeIfClickOutside(evento, modalEditTitle));

btnCamera.addEventListener("click", () => {
  cameraInput.click();
});

// O evento 'change' ocorre quando a foto é confirmada pelo utilizador
cameraInput.addEventListener("change", async (evento) => {
  // Pega o ficheiro da imagem que está dentro do input
  const photoFile = evento.target.files[0];
  
  // Se o utilizador tirou mesmo a foto (não cancelou)
  if (photoFile) {
    // Dá um feedback visual para o utilizador saber que não travou
    newTask.placeholder = "Lendo imagem, aguarde...";
    
    // O bloco try/catch é uma boa prática de segurança para lidar com erros sem quebrar a aplicação
    try {
      // Chama o Tesseract (que colocamos no HTML) para ler a foto. O 'por' é para o dicionário em Português.
      const result = await Tesseract.recognize(photoFile, 'por');
      
      // O Tesseract devolve o texto. O replace(/\n/g, ' ') troca quebras de linha por espaços normais.
      const extractedText = result.data.text.trim().replace(/\n/g, ' ');
      
      // Coloca o texto lido com sucesso direto dentro do input para o utilizador editar ou salvar
      newTask.value = extractedText;
      
    } catch (erro) {
      // Se a imagem for muito ruim ou houver falha, avisa o utilizador de forma amigável
      console.error(erro);
      alert("Não foi possível ler o texto. Tente aproximar a câmera ou melhorar a iluminação.");
    } finally {
      // O finally sempre executa no final, dando erro ou não.
      // Ele devolve o texto original do input e limpa a memória da câmera.
      newTask.placeholder = "Digite uma nova tarefa...";
      cameraInput.value = ""; 
    }
  }
});

// Renderiza as tarefas ao carregar a página
renderTasks();

