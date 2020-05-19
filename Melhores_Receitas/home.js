
let name = 'Mayumi';
let welcome = `Olá ${name.toUpperCase()}! Aqui você irá encontrar as receitas mais deliciosas e suas histórias!`;

showMessage(welcome);



// DECLARAÇÃO DE VARIÁVEIS



/* usamos 'let' para declarar variáveis em JS, quando são números não precisa ser colocado as aspas (núm entre aspas serão entendidos 
como string). */
// variáveis NÃO PODEM COMEÇAR COM NÚMERO!! O melhor é usar CAMMEL CASE.
// geralmente variáveis que iniciam com under score serão private.

/* let price = 100.99,
       textProduto = "arroz",
       discount = false; */

/* usamos 'const' para declarar uma constante, seu valor não poderá ser modificado ao longo do código. Se tentarmos
modificar teremos um erro. */

// O método antigo era declarar as variáveis com 'var' e não com 'let', mas não é mais uma boa prática utiluzá-la.

/* se fizermos showMessage(price++) o resultado ainda será 100,99 pois o JS só irá somar depois que imprimir na tela, para arrumar 
temos que fazer showMessage(++price) */

// 'undefined' mensagem quando uma variável é declarada, mas não é inicializada com um valor (Ex.: let save;)
// 'null' (Ex.: let save = null;) quando queremos apagar um valor antigo da variável e deixar ela vazia.
// console.log(welcome) mostra o valor de welcome no console do navegador.



// OPERAÇÕES LÓGICAS E MATEMÁTICAS



// multiplicação e divisão são realizadas antes de somas ou subtrações, o que está entre parenteses ganha precedência sob qlq outra regra.
// concatenamos as strings ao usar o sinal de mais (+).

/* let amount = 123;
   amount = amount.toString();  converte núm em string. */

/* let amount = Number.parseFloat("123.65");   converte string em float. Se tiver um caractere não numérico logo no começo (Ex.: "A122.69") o JS 
não vai conseguir converter e mostrará como resultado NaN. Se o caractere estiver após os núm (Ex.: "122.69A") o núm retornado será 122.69  */

/* let save = true;
   save = !(save);  variável 'save' agora terá o valor falso. */

// (1.4 + 1.2).toFixed(2)  fixa a soma com duas casas decimais - CUIDADO COM OPERAÇÕES MATEMÁTICAS DE JS!!!
// === compara valor e tipo de variável, já == compara só o valor.



// ESTRUTURAS DE REPETIÇÃO



/* resumir estrutura if/else com o OPERADOR TERNÁRIO:
    let message = (price > 10) ? 'expensive' : 'cheap';
    (cpndition) ? 'true-statement' : 'false-statement'; */

/* variaveis declaradas dentro de um bloco {} só podem ser usadadas dentro desse bloco. Se usarmos 'var', dá pra acessar fora do bloco, 
mas como mencionado anteriormente, não é boa prática. As funções tem acesso às variáveis declaradas fora delas. */

/* for(let i=0; i<3; i++){
    console.log(i);
    } 
console mostrará 0, 1 e 2 até finalizar o loop for. */

/* let count = 1;
   while (count<5){
       console.log(count);
       count++;
   }
console costrará 1, 2, 3 e 4. */

// usamos o return nas funções para que seja retornado o resultado e ele possa ser utilizado no outro script.
