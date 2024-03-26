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

      
