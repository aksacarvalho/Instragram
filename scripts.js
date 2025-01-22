/* 

[x] variáveis
 -É um pedacinho da memória do computador, que podemos guardar alguma coisa. Mas, temos que indentificar esse espacinho com um nome.

left + um nome = variável

 [x] funções
 -pedacinho código que..SÓ é executado, QUANNDO eu ordenar
 funcition +
[x] "tempo"
 setInterval - Ele chama uma função de tempos em tempos
 5 em 5 segundos.

 [x] If & ELse
  Se -> Faça isso
  SE NÃO -> faça isso

  = -> atribuir ou colocar um valor dentro
  == Comparando A com B

*/

 
let imagem = document.querySelector(".troca-imagem")

if(imagem.style.opacity == 0){
   imagem.style.opacity = 1
} 

else {
  imagem.style.opacity = 0
}

function trocaimagem(){
  imagem.style.opacity = 0

  // opacidade / 1 visível / 0 invisível
}

setInterval(trocaimagem, 3000)