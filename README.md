# 📝 Minha Lista de Tarefas (MyList)

Uma aplicação web moderna, rápida e intuitiva para criação e gerenciamento de tarefas diárias, com persistência local, interface responsiva, modais nativos, animações fluidas e suporte a cópia de lista.

---

## 🚀 Sobre o Projeto

O **Minha Lista** é um gerenciador de afazeres completo construído com JavaScript Vanilla, priorizando boas práticas de desenvolvimento como arquitetura orientada a estado (*State-Driven UI*), separação de responsabilidades e foco total na experiência do usuário (UX).

O projeto conta com recursos avançados como edição de itens em modal, cópia da lista formatada para a área de transferência, contador de tarefas em tempo real, animações suaves de entrada/saída e exclusão segura com confirmação.

---

## ✨ Funcionalidades

- 💾 **Persistência Total no Navegador (`localStorage`)**:
  - Salva automaticamente as tarefas e o título personalizado da lista.
  - Os dados continuam intactos mesmo após recarregar (<kbd>F5</kbd>) ou fechar o navegador.

- ✏️ **Edição de Tarefas**:
  - Modal interativo (`<dialog id="modal-edit">`) para editar qualquer tarefa existente.
  - Campo pré-preenchido com o texto atual da tarefa, permitindo alterações rápidas sem recriar o item.

- 📋 **Copiar Lista para a Área de Transferência (Clipboard API)**:
  - Botão dedicado para copiar toda a lista com um clique (<i class="bi bi-copy"></i>).
  - A lista é copiada com formatação limpa (título + marcadores `- tarefa`), pronta para ser colada no WhatsApp, Telegram, e-mail ou bloco de notas.

- 🔢 **Contador de Tarefas em Tempo Real**:
  - Exibição dinâmica do total de tarefas cadastradas na lista (`Total: X`).

- 🛡️ **Trava de Segurança na Exclusão (Modal Nativo)**:
  - Previne exclusões acidentais com `<dialog id="modal-delete">`.
  - Exibe dinamicamente o nome exato do item selecionado para exclusão.
  - Fundo escurecido com desfoque elegante (*backdrop blur*).

- 🎬 **Animações Fluidas (CSS Keyframes)**:
  - **Entrada Suave**: As tarefas surgem com efeito de deslize da esquerda e fade-in (`@keyframes surgirSuave`).
  - **Saída Animada**: Ao confirmar a exclusão, o item desliza suavemente para a direita com fade-out antes de ser removido.

- 📌 **Barra de Adição Fixa (*Sticky*)**:
  - O campo de adicionar e o botão travam no topo da tela durante a rolagem, permitindo adicionar novos afazeres mesmo em listas extensas sem ter que rolar de volta ao topo.

- 🏷️ **Título Dinâmico e Customizável**:
  - Renomeie o título da lista em tempo real enquanto digita.

- 🎨 **Design Moderno & Variáveis CSS**:
  - Paleta de cores padronizada via variáveis CSS (`:root`).
  - Tipografia limpa com **Google Fonts (Roboto)**.
  - Ícones vetoriais modernos com **Bootstrap Icons** (lixeira, lápis de edição e cópia).
  - Microinterações de *hover* e *active* (efeito de clique tátil).

- 🌐 **Otimização SEO, Open Graph & Favicon**:
  - Favicon personalizado (`img/favicon.png`) e meta tags configuradas para compartilhamento com pré-visualização em redes sociais.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica, meta tags Open Graph/SEO e uso da tag nativa `<dialog>` para múltiplos modais acessíveis.
- **CSS3**:
  - Layout com Flexbox;
  - Variáveis de cores nativas (`:root`);
  - Posicionamento `sticky`;
  - Animações `@keyframes` e transições suaves de escala e opacidade;
  - Pseudo-elemento `::backdrop` com `backdrop-filter: blur()`.
- **JavaScript (ES6+)**:
  - Arquitetura *State-Driven* (fonte única de verdade nos dados);
  - Manipulação nativa do DOM e tratamento de eventos (`click`, `keydown`);
  - Armazenamento local via `localStorage` com `JSON.stringify` e `JSON.parse`;
  - Integração com a API nativa `navigator.clipboard`.
- **Bibliotecas Externas**:
  - [Bootstrap Icons](https://icons.getbootstrap.com/) via CDN;
  - [Google Fonts](https://fonts.google.com/) (Família Roboto).

---

## 📁 Estrutura de Arquivos

```text
mylist/
├── img/
│   └── favicon.png    # Ícone da aba do navegador
├── index.html         # Estrutura principal, formulários e modais
├── style.css          # Estilos visuais, variáveis CSS, animações e responsividade
├── script.js          # Lógica da aplicação, estado, LocalStorage e eventos
└── README.md          # Documentação detalhada do projeto
```

---

## 💻 Como Executar o Projeto

Por se tratar de uma aplicação front-end estática pura, você não precisa instalar nenhuma dependência ou gerenciador de pacotes:

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/mylist.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd mylist
   ```

3. **Abra no seu navegador:**
   - Dê um duplo clique no arquivo [index.html](file:///c:/Users/win10/Documents/PROJETOS/mylist/index.html), **ou**
   - No VS Code, clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

---

## 💡 Próximas Melhorias (Roadmap)

- [x] Persistência de dados com `localStorage`.
- [x] Barra de criação de tarefas fixa no topo (*sticky*).
- [x] Modal de confirmação seguro com nome dinâmico da tarefa antes de excluir.
- [x] Edição de tarefas com modal dedicado (`modal-edit`).
- [x] Botão para copiar a lista formatada para a área de transferência (`Clipboard API`).
- [x] Contador dinâmico de tarefas em tempo real.
- [x] Animações e microinterações de entrada (`keyframes`) e saída fluida.
- [ ] Opção de marcar tarefas como concluídas (checkbox com efeito riscado).
- [ ] Alternância entre tema claro e tema escuro (Dark Mode).
- [ ] Campo de busca para filtrar tarefas na lista.
- [ ] Arrastar e soltar para reordenar tarefas (*Drag and Drop*).

---

## 📄 Licença

Este projeto é open-source sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se à vontade para utilizar, sugerir melhorias e compartilhar!
