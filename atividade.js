// 1) Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação qualquer.

    <script>
        var mensagem = "Se não puder fazer tudo, faça nada!";
        alert(mensagem);
    </script>

// 2) Crie um  script em que o usuário clicará com o botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.

    <button id="button">Clique</button>
  
    <script>
        var button = document.getElementById('button');
  
         button.addEventListener('click', function() {
            var mensagem = "As vezes a gente precisa refletir.";
            alert(mensagem);
          });
      </script>

// 3)  De exemplo dos seguintes formas de trabalhar com DOM(Document Object Model), e explique:
          
     . document.getElementById();
        <h1 id="titulo">Título da Página</h1>
        <p id="paragrafo">Este é um parágrafo de exemplo.</p>
        <button id="botao">Clique aqui</button>
    
        <script>
            var titulo = document.getElementById("titulo");
    
            titulo.innerText = "Novo Título";
    
            var paragrafo = document.getElementById("paragrafo");
    
            paragrafo.classList.add("destaque");
    
            var botao = document.getElementById("botao");
    
            botao.addEventListener("click", function() {
                alert("Parabéns!!! Você clicou no botão!");
            });
        </script>

            Explicação:  Esse método retorna uma referência para o elemento HTML que possui o atributo id 
        especificado. No exemplo acima, estamos selecionando os elementos com os ids "titulo", "paragrafo" e "botao".
            Depois de selecionar os elementos, podemos manipulá-los como quisermos. No exemplo, alteramos o texto do <h1>,
        adicionamos uma classe ao <p> e adicionamos um evento de clique ao <button>.
            
     . document.getElementsByTagName();
        <h1>Título da Página</h1>
        <p>Este é o primeiro parágrafo.</p>
        <p>Este é o segundo parágrafo.</p>
        <p>Este é o terceiro parágrafo.</p>
    
        <script>
            var paragrafos = document.getElementsByTagName("p");
    
            for (var i = 0; i < paragrafos.length; i++) {
                paragrafos[i].innerText = "Parágrafo " + (i + 1);
                paragrafos[i].classList.add("destaque");
            }
        </script>

            Explicação:  Este método retorna uma coleção (nodelist) contendo todos os elementos HTML que correspondem 
        à tag especificada. No exemplo acima, estamos selecionando todos os elementos <p> na página.
            Podemos então iterar sobre essa coleção usando um loop, neste caso, um loop for.
            Dentro do loop, podemos manipular cada elemento individualmente. No exemplo, estamos alterando o texto de 
        cada parágrafo e adicionando uma classe CSS para destacá-los.
            
     . document.getElementsByClassName();

        <div class="container">
            <h2 class="titulo">Título 1</h2>
            <p class="paragrafo">Este é o primeiro parágrafo.</p>
        </div>
    
        <div class="container">
            <h2 class="titulo">Título 2</h2>
            <p class="paragrafo">Este é o segundo parágrafo.</p>
        </div>
    
        <script>
            var containers = document.getElementsByClassName("container");
            
            for (var i = 0; i < containers.length; i++) {
                var container = containers[i];
                container.style.backgroundColor = "lightblue";
            }
        </script>

            Explicação: document.getElementsByClassName("container") seleciona todos 
        os elementos com a classe "container" e retorna uma lista de nós. Em seguida, 
        iteramos sobre essa lista usando um loop for e fazemos algo com cada elemento, 
        como mudar sua cor de fundo para lightblue.
            
     . document.querySelector();
     . document.querySelectorAll();

      
