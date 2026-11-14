# Explicação do código – Sistema de Quiz Educativo

## 1. Visão geral do projeto

O projeto consiste em um jogo de perguntas e respostas desenvolvido em JavaScript. O sistema possui sete matérias: Matemática, Português, Geografia, História, Física, Química e Filosofia.

Cada matéria possui três níveis de dificuldade com perguntas já cadastradas. Além disso, existe um quarto nível, destinado às questões adicionadas pelo próprio usuário.

O objetivo do programa é permitir que o jogador teste seus conhecimentos, acompanhe seu desempenho e adicione novas perguntas.

## 2. Classe `Quiz`

A classe `Quiz` é responsável pelo funcionamento principal do jogo. Dentro dela, o método `jogar()` inicia o programa, apresenta as boas-vindas e solicita o nome e a idade do jogador, criando seu perfil.

Em seguida, o programa apresenta um menu com quatro opções:

- **Jogar:** permite escolher uma matéria e um nível de dificuldade.
- **Ver médias:** mostra o desempenho do jogador nas matérias.
- **Adicionar questão:** permite cadastrar novas perguntas.
- **Sair:** encerra o jogo.

O menu utiliza uma estrutura de repetição `while`, que mantém o programa funcionando até que o usuário escolha sair.

Quando o jogador escolhe uma matéria, o código utiliza estruturas condicionais `if` e `else if` para identificar a opção selecionada e carregar as perguntas correspondentes.

Durante o jogo, as perguntas e alternativas são apresentadas com `console.log()`, enquanto o jogador responde utilizando `prompt()`. O programa verifica se a alternativa digitada existe e se corresponde à resposta correta. Quando o jogador acerta, a variável responsável pela contagem de acertos é incrementada com `++`.

A classe também possui métodos, como `comecarMatematica1()`, que retornam as listas da classe Questoes correspondentes para que possam ser utilizadas durante o jogo.

## 3. Sistema de médias

O programa também possui um sistema para calcular e apresentar as médias do jogador.

Cada matéria possui médias individuais para os três primeiros níveis e uma média geral. O cálculo da média geral de cada matéria é feito somando os acertos dos três níveis e dividindo o resultado por três.

Também existe uma média geral, calculada a partir das médias dos sete conteúdos, considerando os três primeiros níveis de cada matéria.

## 4. Classe `Perfil`

A classe `Perfil` é responsável por armazenar as informações do jogador.

Ela possui um construtor que recebe o nome e a idade informados no início do jogo. Também contém as variáveis responsáveis por armazenar as médias.

Dessa forma, as informações do jogador ficam organizadas em um único objeto.

## 5. Classe `Questoes`

A classe `Questoes` é responsável por organizar e armazenar todas as perguntas do jogo.

Ela contém listas de questões separadas por matéria e nível de dificuldade. Cada pergunta é armazenada como um objeto com três propriedades principais:

- `enunciado`: contém o texto da pergunta.
- `alternativas`: armazena as cinco opções de resposta.
- `resposta`: indica qual alternativa é a correta.

Além disso, existem métodos para adicionar novas questões, como `adicionarMatematica()`. Eles solicitam ao usuário o enunciado, as alternativas e a resposta correta, criando um novo objeto e adicionando-o à lista da matéria escolhida.

## 6. Normalização dos textos

O código também utiliza alguns métodos para facilitar a identificação das respostas digitadas pelo usuário.

São utilizados `toLowerCase()`, `trim()` e `normalize("NFD")`, além de `replace()` para remover acentos.

Isso permite que o programa reconheça os nomes das matérias mesmo quando o usuário digita letras maiúsculas, espaços desnecessários ou palavras sem acentuação.

## 7. Conclusão

De maneira geral, o projeto utiliza diversos recursos da linguagem JavaScript, como classes, objetos, métodos, variáveis, arrays, estruturas condicionais e estruturas de repetição.

Cada classe possui uma responsabilidade específica, deixando o código mais organizado e facilitando o funcionamento do sistema.

O resultado é um quiz educativo que permite responder perguntas de diferentes matérias, acompanhar o desempenho por meio das médias e adicionar novas questões.
