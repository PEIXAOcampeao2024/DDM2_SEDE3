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


         <style>
            .destacado {
                background-color: yellow;
         }
        </style>

        <p id="paragrafo">Este parágrafo pode ser destacado.</p>
        <button id="botaoDestacar">Destacar Parágrafo</button>
    
        <script>
            const botaoDestacar = document.querySelector('#botaoDestacar');
            const paragrafo = document.querySelector('#paragrafo');
    
            botaoDestacar.addEventListener('click', () => {
                // Verifica se o parágrafo tem a classe "destacado"
                if (paragrafo.classList.contains('destacado')) {
                    // Se tiver, remove a classe
                    paragrafo.classList.remove('destacado');
                    botaoDestacar.textContent = 'Destacar Parágrafo';
                } else {
                    // Se não tiver, adiciona a classe
                    paragrafo.classList.add('destacado');
                    botaoDestacar.textContent = 'Remover Destaque';
                }
            });
        </script>
        
// 4) Descreva e crie exemplos com suas formas diferente eventos no javascript,segue alguns exemplo:
            
      . onmouseover:

            <style>
                .destaque {
                    background-color: yellow;
                }
            </style>


            <div id="divDestaque" onmouseover="destacar()">Passe o mouse aqui para destacar</div>
            
             <script>
                function destacar() {
                    document.getElementById('divDestaque').classList.add('destaque');
                }
            </script>

                Nesse exemplo, quando o cursor do mouse passa sobre a <div>, a função destacar() é acionada, 
            adicionando a classe "destaque" à <div>, alterando seu estilo.
                
      . onfocus:

            <input type="text" id="campoTexto" onfocus="destacarCampo()" placeholder="Clique aqui para destacar">

            <script>
                function destacarCampo() {
                    document.getElementById('campoTexto').style.backgroundColor = 'yellow';
                }
            </script>

                Nesse exemplo, quando o campo de texto ganha foco, a função destacarCampo() é 
            acionada, alterando seu estilo de fundo para amarelo.
                
      . onchange:

            <select id="selectOpcao" onchange="mostrarSelecao()">
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
            </select>
            <p id="opcaoSelecionada"></p>
        
            <script>
                function mostrarSelecao() {
                    const select = document.getElementById('selectOpcao');
                    const opcaoSelecionada = document.getElementById('opcaoSelecionada');
                    opcaoSelecionada.textContent = "Opção selecionada: " + select.value;
                }
            </script>

                Nesse exemplo, quando o usuário seleciona uma opção no <select>, a função mostrarSelecao() 
            é acionada, exibindo a opção selecionada em um parágrafo abaixo do <select>.

// 5)  De exemplo de os tipos de funções:
                
    . Função Nomeada;

        function soma(a, b) {
            return a + b;
        }

        console.log(soma(3, 5)); // Saída: 8

    . Função Nomeada com argumento(parametro) e retorno;

        function calcularAreaRetangulo(altura, largura) {
            return altura * largura;
        }

        console.log(calcularAreaRetangulo(5, 8)); // Saída: 40

    . Função com Construtor;

        var saudacao = new Function('nome', 'return "Olá!, " + nome + "!";');

        console.log(saudacao('Professor')); // Saída: Olá, João!

    . Função Literal (variável);

        var multiplicacao = function(a, b) {
            return a * b;
        };

        console.log(multiplicacao(4, 6)); // Saída: 24

    . Função de Flecha(Arrow functions);
        var quadrado = (x) => {
            return x * x;
        };

        console.log(quadrado(4)); // Saída: 16


//  6)  Desenvolva um script qua ao clicar no botão conta o numero de vezes clicado, em que seja separado o HTML e o JavaScript.

    HTML:
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contador de Cliques</title>
    </head>
    <body>
        <button id="botaoContador">Clique Aqui</button>
        <p id="contador">0</p>
    
        <script src="script.js"></script>
    </body>
    </html>

    JavaScript:
        const botaoContador = document.getElementById('botaoContador');
        const contadorElemento = document.getElementById('contador');

        let contador = 0;

        botaoContador.addEventListener('click', () => {

            contador++;
            
            contadorElemento.textContent = contador.toString();
        });

//    7) Crie uma função que receba uma string como parâmetro
//    e retorne a mesma string com todas as letras em caixa alta.
//    Utilize essa função para converter diferentes strings.

        function converterParaMaiusculas(str) {
            return str.toUpperCase();
        }
 
        console.log(converterParaMaiusculas("Olá, Mundo!")); // Saída: Aula de DDM2!
        console.log(converterParaMaiusculas("JavaScript é incrível!")); // Saída: Atividade.js!
        console.log(converterParaMaiusculas("Eu amo programar!")); // Saída: SANTOS FUTEBOL CLUBE!


//    8) Crie uma função que receba dois números como parâmetros e retorne a soma deles.
//    Utilize essa função para realizar somas diferentes.

        function somarNumeros(num1, num2) {
            return num1 + num2;
        }

        console.log(somarNumeros(5, 3)); // Saída: 8
        console.log(somarNumeros(-10, 20)); // Saída: 10
        console.log(somarNumeros(2.5, 1.5)); // Saída: 4




      
