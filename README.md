# 📝 Minha Lista de Tarefas (MyList)

Uma aplicação web moderna, leve e intuitiva para gerenciar afazeres e organizar listas personalizadas em tempo real, com persistência de dados local e interface responsiva.

---

## 🚀 Sobre o Projeto

O **Minha Lista** foi desenvolvido para oferecer uma experiência ágil e agradável no gerenciamento de tarefas diárias. O projeto conta com arquitetura orientada a estado (*State-Driven*), persistência de dados no navegador, barra de adição inteligente com rolagem fixa (*sticky*) e trava de segurança para exclusão de itens com modal nativo.

---

## ✨ Funcionalidades

- 💾 **Persistência com `localStorage`**: Suas tarefas e o título personalizado da sua lista ficam salvos no navegador. Pode fechar ou recarregar a página (<kbd>F5</kbd>) sem perder nada.
- 📌 **Barra de Entrada Fixa (*Sticky*)**: O campo de criar tarefas e o botão de adicionar travam suavemente no topo da tela durante a rolagem, permitindo adicionar itens mesmo com listas extensas.
- 🛡️ **Trava de Segurança na Exclusão (Modal)**: Popup de confirmação nativo (`<dialog>`) com fundo desfocado (*backdrop blur*), exibindo dinamicamente o nome da tarefa que está prestes a ser removida com opções de **"Sim"** e **"Não"**.
- 🏷️ **Título Dinâmico e Customizável**: Altere o nome da lista a qualquer momento com atualização instantânea e gravação automática.
- 🗑️ **Interface Visual com Bootstrap Icons**: Botões de ação estilizados com o ícone de lixeira e transições suaves de escala e cor.
- ⌨️ **Adição Prática & Foco Ágil**: Adicione itens clicando no botão ou simplesmente pressionando a tecla <kbd>Enter</kbd>; o campo é limpo e recebe foco automaticamente.
- 🎨 **Estilização Moderna com Variáveis CSS**: Paleta de cores padronizada via `:root`, tipografia *Google Fonts (Roboto)*, efeitos táteis de clique (*active*) e sombras refinadas.
- 🌐 **Otimização SEO & Open Graph**: Tags meta configuradas para pré-visualização ao compartilhar links em redes sociais e mensageiros.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Semântica web e uso da tag nativa `<dialog>` com acessibilidade (fecha com <kbd>Esc</kbd> e bloqueia foco).
- **CSS3**: Layout Flexbox, variáveis nativas (`:root`), `position: sticky`, pseudo-elemento `::backdrop`, desfoque (`backdrop-filter`) e microinterações de hover/active.
- **JavaScript (ES6+)**:
  - Arquitetura orientada a dados (*State-Driven UI*);
  - Manipulação nativa do DOM e tratamento de eventos de teclado/mouse;
  - Serialização e sincronização com `localStorage` (`JSON.stringify` e `JSON.parse`).
- **Bootstrap Icons**: Pacote de ícones vetoriais via CDN.
- **Google Fonts**: Tipografia moderna com a fonte *Roboto*.

---

## 📁 Estrutura de Arquivos

```text
mylist/
├── index.html    # Estrutura da página, formulários e modal de confirmação
├── style.css     # Estilização visual, variáveis CSS, sticky e responsividade
├── script.js     # Estado da aplicação, manipulação do DOM e LocalStorage
└── README.md     # Documentação detalhada do projeto
```

---

## 💻 Como Executar o Projeto

Como o projeto é construído 100% com tecnologias nativas do navegador, não há necessidade de instalar dependências ou rodar servidores complexos:

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
   - No VS Code, clique com o botão direito em `index.html` e escolha **"Open with Live Server"**.

---

## 💡 Próximas Melhorias (Roadmap)

- [x] Salvar tarefas e título no `localStorage` do navegador.
- [x] Barra de criação de tarefas fixa no topo (*sticky*).
- [x] Modal de confirmação seguro com nome dinâmico da tarefa antes de excluir.
- [ ] Opção de marcar tarefas como concluídas (efeito riscado / checkbox).
- [ ] Contador de tarefas pendentes e concluídas.
- [ ] Alternância entre tema claro e tema escuro (Dark Mode).
- [ ] Suporte a múltiplas listas simultâneas com abas.

---

## 📄 Licença

Este projeto é de código aberto sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se à vontade para utilizar, sugerir melhorias e compartilhar!
