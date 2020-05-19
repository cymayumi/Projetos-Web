let i = 0; 

function showMessage (message){
    document.getElementById('message').textContent = message;
}

function contarLikes(){
    i += 1;
    contador.innerHTML = i;
}

function esconder(){
    const comentario = document.getElementById('comentario');

    if (comentario.classList.contains('d-none')){
        comentario.classList.remove('d-none');
        btn_comentario.innerHTML = "Ocultar Comentários"
    }
    else{
        comentario.classList.add('d-none');
        btn_comentario.innerHTML = "Mostrar Comentários"
    }
    
}


// OBJETOS



/* objetos são estruturas deste tipo (temos um objeto 'person') e suas propriedades estão entre {}:
    let person = {
        firstName = "John",
        lastName = "Smith",
        age: 32,
        partTime: false,
        showInfo: function(){
            showMessage(this.fisrtName);
        }
    }; 
    para mostrar o primeiro nome fazemos (acessar as propriedades):
    showMessage(person.firstName); 
    para alterar uma propriedade:
    person.age = 44; */

/* métodos são como são chamadas as funções atreladas a objetos. No objeto acima temos a função showInfo
para usa-la fazemos person.showInfo() e teremos como retorno o nome 'John". Add o 'this' para indicar que é
uma propriedade do próprio objeto. */

/* a nossa webpage não deixa de ser um objeto com o qual iremos trabalhar. Ela é composta por objetos chamados
Document Object Model (DOM). Nas nossas functions usamos:
    document.getElementById().textContent
o 'document' representa a página web e é um objeto, o 'getElement' é o método/função deste objeto. Este método
retorna outro objeto que tem como função o 'textContent'. */



// ARRAYS



/* Arrays são objetos que podem guardar multiplos valores ou objetos.
    let values = [];   criamos um array vazio
    values = ['a', 'b', 3];   array inicializado 
    let valor = values[0]  teremos a variavel valor igual a 'a'. */

// push() add elemento no final do array (add um ou mais elementos).
// pop() remove o último elemento.

// shift() remove o primeiro elemento.
// unshift() add elemento no início do array (add um ou mais elementos).

// slice(inicio do slide, fim do slice) corta um pedaço do array e cria um novo array.
/* splice(posição no array, num de valores que queremos retirar) deleta os valores do intervalo definido, com um terceiro 
parametro (ou mais) definimos valores que serão add neste ponto do array.
    values.splice(1, 0, 'foo');
    values agora será: ['a', 'foo', 'b', 3] */