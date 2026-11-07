# 📝 Minha Lista de Tarefas (Coletta)

Uma aplicação web completa, moderna, rápida e intuitiva para criação, priorização e gerenciamento de tarefas diárias. Desenvolvida em JavaScript puro (Vanilla), conta com persistência local, interface responsiva, modais nativos, animações fluidas, reordenação via *Drag and Drop* e uma central de ajuda semântica e acessível.

---

## 🚀 Sobre o Projeto

O **Minha Lista** foi projetado para elevar a produtividade pessoal através de uma experiência de usuário (UX) fluida e refinada. Seguindo os princípios de arquitetura orientada a dados (*State-Driven UI*), boas práticas semânticas do HTML5 e design moderno com CSS nativo, a aplicação reúne os principais recursos dos melhores gerenciadores de tarefas do mercado em um código leve e sem dependências pesadas.

---

## ✨ Funcionalidades Principais

- 🖐️ **Reordenação por Arrastar e Soltar (*Drag and Drop*)**:
  - Reorganize e repriorize suas tarefas intuitivamente clicando, segurando e arrastando (`draggable`).
  - Feedback visual imediato durante o arraste (`.dragging`) e salvamento automático da nova ordem.

- 💾 **Persistência Completa no Navegador (`localStorage`)**:
  - Salva automaticamente as tarefas e o título personalizado da sua lista.
  - Pode recarregar a página (<kbd>F5</kbd>) ou fechar o navegador sem perder nenhum dado.

- ✏️ **Edição Completa (Tarefas e Título)**:
  - **Edição de Tarefas**: Modal dedicado (`<dialog id="modal-edit">`) com input pré-carregado para ajustar qualquer afazer rapidamente.
  - **Edição do Título da Lista**: Modal exclusivo (`<dialog id="modal-edit-title">`) com botão dedicado (<i class="bi bi-pencil-fill"></i>) para renomear sua lista a qualquer momento.

- ℹ️ **Central de Ajuda e Informações Semântica (`modal-info`)**:
  - Modal explicativo acessado pelo botão de informações (<i class="bi bi-info-circle"></i>).
  - Estrutura semântica (`<ul>`, `<li>`, `<kbd>`) com acessibilidade W3C (`aria-hidden` em ícones) e dados de autoria com microdados Schema.org (`itemprop="author"`).
  - Orientações claras sobre atalhos, privacidade e recursos do sistema.

- 🛡️ **Exclusão Segura com Confirmação Dinâmica**:
  - Previne exclusões acidentais através do `<dialog id="modal-delete">`.
  - Exibe dinamicamente o nome exato do item selecionado para exclusão.
  - **Saída Animada**: Ao confirmar a exclusão, o item desliza suavemente para a direita com efeito *fade-out* antes de ser removido da tela.

- 🚪 **Fechamento Inteligente de Janelas (*Click Outside* & <kbd>Esc</kbd>)**:
  - Todos os modais fecham automaticamente se o usuário clicar no fundo escuro (*backdrop*) ou pressionar a tecla <kbd>Esc</kbd>.

- 📋 **Copiar Lista Formatada (Clipboard API)**:
  - Copie com um clique toda a lista com título e marcadores organizados (`- item`), pronta para ser compartilhada no WhatsApp, Telegram, e-mail ou notas.

- 🔢 **Contador Dinâmico de Tarefas**:
  - Indicador em tempo real do volume total de afazeres cadastrados (`Total: X`).

- 🎬 **Animações Fluidas (CSS Keyframes)**:
  - Efeito suave de entrada lateral com transparência (`@keyframes surgirSuave`) para novos itens.

- 📌 **Barra de Adição Fixa (*Sticky*)**:
  - O campo de adicionar e o botão travam no topo da tela durante a rolagem de listas longas.

- 🎨 **Design Moderno, Responsivo e Modular**:
  - Paleta de cores gerenciada via variáveis CSS (`:root`).
  - Tipografia limpa com **Google Fonts (Roboto)**.
  - Ícones vetoriais modernos via **Bootstrap Icons**.
  - Favicon personalizado incluído (`img/favicon.png`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**:
  - Marcação semântica e acessível (`<dialog>`, `<header>`, `<main>`, `<section>`, `<dl>`, `<ul>`, `<kbd>`);
  - Atributos ARIA (`aria-hidden="true"`) e microdados (`itemprop="author"`);
  - Meta tags completas para SEO e Open Graph (redes sociais).
- **CSS3**:
  - Flexbox e alinhamento responsivo;
  - Variáveis nativas (`:root`);
  - Posicionamento `sticky` e pseudo-elemento `::backdrop` com desfoque (`backdrop-filter: blur()`);
  - Animações com `@keyframes` e transições de clique tátil.
- **JavaScript (ES6+)**:
  - Arquitetura orientada a estado (*State-Driven*);
  - API nativa de **HTML5 Drag and Drop**;
  - API de Área de Transferência (`navigator.clipboard`);
  - Manipulação de `localStorage` (`JSON.stringify` / `JSON.parse`);
  - Detecção geométrica de clique fora do modal (`getBoundingClientRect`).
- **Recursos Externos**:
  - [Bootstrap Icons](https://icons.getbootstrap.com/) (CDN);
  - [Google Fonts](https://fonts.google.com/) (Roboto).

---

## 📁 Estrutura de Arquivos

```text
coletta/
├── img/
│   └── favicon.png    # Ícone da aba do navegador
├── index.html         # Marcação principal, formulários, lista e múltiplos modais
├── style.css          # Estilização visual, variáveis CSS, animações e responsividade
├── script.js          # Lógica da aplicação, Drag & Drop, modais, eventos e LocalStorage
└── README.md          # Documentação detalhada do projeto
```

---

## 💻 Como Executar o Projeto

A aplicação é puramente estática e não exige instalação de pacotes ou servidores backend:

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/coletta.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd coletta
   ```

3. **Abra no seu navegador:**
   - Dê um duplo clique no arquivo [index.html](file:///c:/Users/win10/Documents/PROJETOS/mylist/index.html), **ou**
   - No VS Code, utilize a extensão **Live Server** (clique com botão direito em `index.html` > *Open with Live Server*).

---

## 💡 Próximas Melhorias (Roadmap)

- [x] Persistência total de tarefas e título com `localStorage`.
- [x] Reordenação interativa de itens com **Drag and Drop**.
- [x] Edição de tarefas individuais e do título da lista com modais dedicados.
- [x] Central de ajuda e dicas de usabilidade semântica (`modal-info`).
- [x] Fechamento inteligente de modais ao clicar no fundo escuro (*backdrop*).
- [x] Modal de confirmação seguro com nome dinâmico da tarefa antes de excluir.
- [x] Animações e microinterações de entrada (`keyframes`) e saída suave.
- [x] Botão para copiar lista formatada para a área de transferência (`Clipboard API`).
- [x] Contador dinâmico de tarefas em tempo real.
- [ ] Opção de marcar tarefas como concluídas (checkbox com texto riscado).
- [ ] Alternância entre tema claro e tema escuro (Dark Mode).
- [ ] Filtro de busca para pesquisar tarefas na lista.

---

## 👨‍💻 Autor

Desenvolvido por **Ronaldo Melo**  
Versão: `1.2.0`

---

## 📄 Licença

Este projeto é de código aberto sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se livre para usar, estudar e compartilhar!
