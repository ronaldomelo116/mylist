# 📝 Anota Lista | Minha Lista

Uma aplicação web ágil, intuitiva e moderna para criação, priorização e organização de afazeres diários. Desenvolvida em JavaScript puro (Vanilla), conta com identidade visual própria, alternância entre esquemas claro e escuro (Dark Mode), captura inteligente de texto via câmera com OCR (Tesseract.js), persistência no navegador, interface responsiva, caixas de diálogo nativas, animações fluidas, reordenação via *Drag and Drop* e uma central de ajuda acessível.

---

## 🚀 Sobre o Projeto

O **Anota Lista** foi concebido para simplificar a produtividade pessoal através de uma experiência de uso leve, agradável e refinada. Adotando os princípios de arquitetura orientada a dados (*State-Driven UI*), semântica do HTML5 e estilização com CSS puro, a ferramenta integra inteligência visual para digitalização de notas físicas e entrega recursos modernos em um código enxuto, modular e livre de servidores backend.

---

## ✨ Funcionalidades Principais

- 📷 **Captura de Texto via Câmera com OCR (Tesseract.js)**:
  - Digitalização instantânea de anotações manuscritas, livros ou embalagens diretamente pela câmera do celular ou upload de arquivo.
  - Reconhecimento Óptico de Caracteres executado no próprio navegador (*client-side*) com modelo treinado para o idioma Português (`'por'`).
  - Indicador de status em tempo real (`"Lendo imagem, aguarde..."`) e envio automático do texto lido para o campo de digitação, permitindo ajustes antes da inclusão.

- 🌓 **Modos Claro e Escuro (Light & Dark Theme)**:
  - Alternância instantânea acionada no topo da página (<i class="bi bi-moon-fill"></i> / <i class="bi bi-sun-fill"></i>).
  - Paleta noturna balanceada (`#121212`, `#1e1e1e`), confortável para a visão em ambientes de baixa luminosidade.
  - Gravação automática da escolha do usuário no `localStorage` sob a chave `"theme"`.

- 🖐️ **Reordenação por Arrastar e Soltar (*Drag and Drop*)**:
  - Repriorize seus afazeres com facilidade clicando, segurando e movendo (`draggable`).
  - Resposta visual imediata durante o movimento (`.dragging`) e salvamento automático da nova disposição.

- 💾 **Armazenamento Local Contínuo (`localStorage`)**:
  - Preserva os registros, o estilo visual e o cabeçalho personalizado diretamente no navegador.
  - Liberdade para atualizar a página (<kbd>F5</kbd>) ou fechar a janela sem risco de perder informações.

- ✏️ **Modificação de Conteúdo (Itens e Título)**:
  - **Registros Individuais**: Janela interativa (`<dialog id="modal-edit">`) com campo pré-preenchido para alterar o texto com agilidade.
  - **Nome da Lista**: Interface rápida (`<dialog id="modal-edit-title">`) acionada pelo ícone de lápis (<i class="bi bi-pencil-fill"></i>) para renomear o projeto a qualquer momento.

- ℹ️ **Central de Ajuda e Instruções (`modal-info`)**:
  - Painel explicativo aberto pelo botão de informações (<i class="bi bi-info-circle"></i>).
  - Estrutura semântica (`<ul>`, `<li>`, `<kbd>`) com acessibilidade W3C (`aria-hidden` em ícones) e dados de autoria com microdados Schema.org (`itemprop="author"`).
  - Orientações claras sobre atalhos de teclado, privacidade e funcionamento do sistema.

- 🛡️ **Remoção Segura com Confirmação em Tempo Real**:
  - Evita perdas por engano utilizando o componente `<dialog id="modal-delete">`.
  - Apresenta na tela o nome exato do registro prestes a ser apagado.
  - **Saída Animada**: Ao autorizar o descarte, a linha desliza suavemente para a direita em *fade-out* antes de sumir do documento.

- 🚪 **Fechamento Inteligente de Janelas (*Click Outside* & <kbd>Esc</kbd>)**:
  - Todas as caixas de diálogo fecham sozinhas quando o usuário clica no fundo escurecido (*backdrop*) ou pressionar a tecla <kbd>Esc</kbd>.

- 📋 **Exportação Rápida (Clipboard API)**:
  - Transfira o conteúdo para a área de transferência com um só clique, já estruturado com cabeçalho e marcadores (`- item`), pronto para envio via WhatsApp, Telegram ou e-mail.

- 🔢 **Marcador de Volume**:
  - Indicador numérico atualizado a cada alteração (`Total: X`).

- 🎬 **Transições Fluidas (CSS Keyframes)**:
  - Entrada suave de novos elementos surgindo pela lateral com efeito de transparência (`@keyframes surgirSuave`).

- 📌 **Cabeçalho de Entrada Fixo (*Sticky*)**:
  - O campo de digitação e o botão de inclusão permanecem acessíveis no topo da tela durante a rolagem de registros extensos.

- 🎨 **Identidade Visual & Responsividade**:
  - Logotipo oficial em vetor SVG (`img/logo.svg`) e favicons customizados.
  - Cores centralizadas em variáveis CSS (`:root`).
  - Tipografia nítida com **Google Fonts (Roboto)**.
  - Ícones vetoriais modernos via **Bootstrap Icons**.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**:
  - Marcação semântica e acessível (`<dialog>`, `<header>`, `<main>`, `<section>`, `<ul>`, `<li>`, `<kbd>`);
  - Atributos ARIA (`aria-hidden="true"`) e microdados (`itemprop="author"`);
  - Atributos para captura de câmera mobile (`capture="environment"`, `accept="image/*"`);
  - Metadados completos para motores de busca e pré-visualização em redes sociais (Open Graph).
- **CSS3**:
  - Alinhamento responsivo com Flexbox;
  - Variáveis nativas (`:root`) e classes dedicadas para o modo escuro (`body.dark-mode`);
  - Posicionamento `sticky` e pseudo-elemento `::backdrop` com desfoque de fundo (`backdrop-filter: blur()`);
  - Botão flutuante estilizado para a câmera dentro do input (`.input-wrapper`);
  - Animações com `@keyframes` e microinterações de clique tátil.
- **JavaScript (ES6+)**:
  - Arquitetura orientada a estado (*State-Driven*);
  - API nativa de **HTML5 Drag and Drop**;
  - Processamento assíncrono com `async/await` e tratamento com `try/catch/finally`;
  - Integração com a área de transferência (`navigator.clipboard`);
  - Gerenciamento e serialização no `localStorage`;
  - Detecção geométrica de cliques externos aos modais (`getBoundingClientRect`).
- **Bibliotecas & Recursos Externos**:
  - [Tesseract.js v5](https://tesseract.projectnaptha.com/) (Motor de OCR em JavaScript e WebAssembly);
  - [Bootstrap Icons](https://icons.getbootstrap.com/) via CDN;
  - [Google Fonts](https://fonts.google.com/) (Família Roboto).

---

## 📁 Estrutura de Arquivos

```text
anota-lista/
├── img/
│   ├── favicon.png    # Ícone da aba do navegador
│   ├── favicon2.png   # Variação alternativa do favicon
│   └── logo.svg       # Logotipo oficial em vetor
├── index.html         # Marcação principal, formulários, leitor de câmera e caixas de diálogo
├── style.css          # Estilização visual, modo escuro, variáveis CSS e animações
├── script.js          # Lógica da aplicação, integração OCR (Tesseract), Drag & Drop e LocalStorage
└── README.md          # Documentação detalhada do projeto
```

---

## 💻 Como Executar o Projeto

A aplicação roda inteiramente no navegador e não exige a instalação de pacotes locais ou servidores de backend:

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/anota-lista.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd anota-lista
   ```

3. **Abra no seu navegador:**
   - Dê um duplo clique no arquivo [index.html](file:///c:/Users/win10/Documents/PROJETOS/mylist/index.html), **ou**
   - No VS Code, utilize a extensão **Live Server** (clique com o botão direito em `index.html` > *Open with Live Server*).

---

## 💡 Próximas Melhorias (Roadmap)

- [x] Armazenamento contínuo dos dados, configurações de tema e cabeçalho no `localStorage`.
- [x] Alternância entre esquemas claro e escuro (Dark Mode) com botão reativo.
- [x] Captura e extração de texto via câmera com OCR (**Tesseract.js** em Português).
- [x] Identidade visual própria com logotipo vetorial em SVG.
- [x] Reordenação interativa via arrastar e soltar (**Drag and Drop**).
- [x] Ajuste pontual de itens e renomeação do cabeçalho com caixas de diálogo próprias.
- [x] Central informativa sobre recursos, atalhos e privacidade (`modal-info`).
- [x] Fechamento ágil de popups ao tocar no fundo sombreado (*backdrop*).
- [x] Janela de confirmação preventiva exibindo o nome exato do item selecionado.
- [x] Transições e microinterações de entrada (`keyframes`) e saída fluida.
- [x] Cópia formatada para a área de transferência com um clique (`Clipboard API`).
- [x] Marcador numérico indicando o total de registros ativos.
- [ ] Marcação de afazeres concluídos (efeito tachado via checkbox).
- [ ] Campo de pesquisa para filtrar itens em tempo real.
- [ ] Visualização segmentada por estado (todas, pendentes e finalizadas).

---

## 👨‍💻 Autor

Desenvolvido por **Ronaldo Melo**  
Versão: `1.2.2`

---

## 📄 Licença

Este projeto é de código aberto sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se livre para usar, estudar e compartilhar!
