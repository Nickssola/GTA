# GTA
Página web interativa de seleção de personagens, inspirada na estética do GTA VI. Seletor de personagens interativo em HTML, CSS e JavaScript. Escolha entre Lucia, Jason e CJ, ou envie uma selfie e use IA (Puter.js) para virar um personagem de videogame. Projeto de estudo de lógica de programação, manipulação do DOM e integração com IA.

## Funcionalidades

- **Ao clicar no avatar, a imagem, o nome e a cor do nome mudam na hora.
- **Vire um personagem:** clique no botão 📸, envie uma foto e a IA transforma você em um personagem de videogame (contorno preto grosso, cores vivas, meio corpo e fundo transparente).


## Tecnologias

- **HTML5**: estrutura da página, menu de avatares e campo de upload escondido
- **CSS3**: posicionamento absoluto, Flexbox, imagem de fundo e avatares circulares
- **JavaScript**: manipulação do DOM, `FileReader` e funções assíncronas
- **[Puter.js](https://developer.puter.com/)**: acesso à IA geradora de imagens (`txt2img`) sem backend próprio
- **Google Fonts**: Bangers

## Estrutura do projeto

```
├── index.html
├── styles.css
├── scripts.js
└── img/
    ├── background2.jpg
    ├── lucia.png
    ├── jason.png
    └── cj.png
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador (ou use a extensão Live Server do VS Code).

> É necessário ter conexão com a internet para carregar a fonte e a biblioteca Puter.js.

## O que este projeto pratica

- Lógica de programação e algoritmos
- Variáveis e funções
- Manipulação do DOM (`querySelector`, `innerHTML`, `src`, `style`)
- Eventos (`onclick`, `onchange`, `onload`)
- Programação assíncrona (`async`/`await`) e integração com IA

## 📄 Licença

Projeto de estudo. Sinta-se à vontade para usar como referência.
