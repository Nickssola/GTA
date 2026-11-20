/*
   1)Lógica de Programação
     Saber a sequencia que o computador/projeto quer que você execute as coisas.

   2)Algoritmo
     Receita de bolo, passo a passo, para o computador entenda o que você quer que ele faça.
    
    ALGORITMO
    1) Entrada de dados
    2) Processamento
    3) Saída de dados

    ALGORITMO 1
    [x] Saber quem é quem (imagem, botão...)
    [x] Saber que o botão foi clicado
    [x] Trocar a foto e o nome do personagem
    
    
   3)Variaveis
      - É um pedacinho  da memória do computador que você pode guardar alguma coisas
      - Exemplo:
         let nome = "Lucia"
         let idade = 15
         let altura = 1.60
         let peso = 50

   4)Funções
      É um pedacinho do código que SÓ EXECUTA QUANDO VOCÊ CHAMA ELA

   HTML = document
   querySelector = selecionar ALGO no HTML
   () = entre parenteses você coloca o que você quer selecionar
   Quem? Classe = .nomeDaClasse 
   console.log() = mostrar no console do navegador
   innerHTML = colocar algo dentro do HTML 
  
  1) Criar uma variável para guardar o que eu quero
  2) Ir no HTML (com o document)
  3) Selecionar quem eu quero com o querySelector
  4) Colocar entre parenteses quem eu quero selecionar (classe)
   


alert("JS carregou!")

console.log(nome) 
console.log(personagem)

*/


let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

// () = Capsula teletransportadora

function escolherPersonagem(nomePersonagem, imagemPersonagem, cor){
    
   nome.innerHTML = nomePersonagem
   personagem.src = imagemPersonagem
   nome.style.color = cor
   // innerHTML = coloca algo dentro do HTML
   // src = coloca algo dentro do src da imagem 

}

/*

ALGORITMO 2
    [x] Pegar a imagem do usuario
    [] Enviar para a IA imagem + o que eu quero que ela faça
    [] Receber a imagem da IA
    [] Colocar a imagem no site

*/

function lerFoto(foto){

   /* let foto = foto.files[0] */

   //onchange() = quando mudar algo, faça algo
   //onclick() = quando clicar em algo, faça algo
   //onload() = quando carregar algo, faça algo´
   //toda vez que eu tenho que ir no SERVIDOR - ASYNC



   let leitor = new FileReader() // FileReader = Leitor de arquivos 
   leitor.readAsDataURL(foto.files[0]) // readAsDataURL = fiz a leitura da foto, e transformei em URL (link))
   
   leitor.onload = async function(){

     let desenho = await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo Totalmente transparente: sem cenário, sem chão e sem sombraa.",
         {
            model: "replicate:openai/gpt-image-2.5-flare",
            provider: "openai",
            input_image: leitor.result,
            quality: "medium",
            providerOptions: { background: "transparent"}
         })
      
      escolherPersonagem('Você', desenho, '#b9b604')

   }
          //Faça algo com a imagem lida
   }

