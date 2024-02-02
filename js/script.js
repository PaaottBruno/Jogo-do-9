

// var num1 = 1
// var num2 = 2
// var num3 = 3
// var num4 = 4
// var num5 = 5
// var num6 = 6
// var num7 = 7
// var num8 = 8
// var num0 = 0
var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;
var num8;
var num0;

// Criando numeros aleatorios

function sortearNumeros(qtdNumeros, minimo, maximo) {
    // Cria um array com todos os números disponíveis
    var numerosDisponiveis = [];
    for (var i = minimo; i <= maximo; i++) {
        numerosDisponiveis.push(i);
    }

    // Verifica se há números suficientes disponíveis para sortear
    if (qtdNumeros > numerosDisponiveis.length) {
        console.log("Não há números suficientes disponíveis para sortear.");
        return;
    }

    // Array para armazenar os números sorteados
    var numerosSorteados = [];

    // Sorteia os números
    for (var j = 0; j < qtdNumeros; j++) {
        // Escolhe um índice aleatório dentro do array de números disponíveis
        var indiceSorteado = Math.floor(Math.random() * numerosDisponiveis.length);

        // Remove o número sorteado do array de disponíveis e adiciona ao array de sorteados
        numerosSorteados.push(numerosDisponiveis.splice(indiceSorteado, 1)[0]);
    }

    return numerosSorteados;
}

var numerosSorteados = sortearNumeros(8, 1, 8);

// Fim da criação de numeros


// Adicionando o numero no array necessario para o jogo inicial em posições aleatorias

// console.log(numerosSorteados)

var array = [[num1],[num2],[num3],
             [num4],[num5],[num6],
             [num7],[num8],[num0]];     

numerosSorteados.forEach(function(valor, index) {
    array[index][0] = valor;
    array[8][0] = parseInt(0);
    // console.log(array[0][0]);
});

var numero1 = document.getElementById("num1");
var numero_1 = numero1.innerHTML = array[0][0];

var numero2 = document.getElementById("num2");
var numero_2 = numero2.innerHTML = array[1][0];

var numero3 = document.getElementById("num3");
var numero_3 = numero3.innerHTML = array[2][0];

var numero4 = document.getElementById("num4");
var numero_4 = numero4.innerHTML = array[3][0];

var numero5 = document.getElementById("num5");
var numero_5 = numero5.innerHTML = array[4][0];

var numero6 = document.getElementById("num6");
var numero_6 = numero6.innerHTML = array[5][0];

var numero7 = document.getElementById("num7");
var numero_7 = numero7.innerHTML = array[6][0];

var numero8 = document.getElementById("num8");
var numero_8 = numero8.innerHTML = array[7][0];


// Fim da adicão dos numeros


// Verificando se pode se mover e mover

function mover(origem, destino) {
    if (array[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array[origem][0];
        array[origem][0] = 0;
        array[destino][0] = numeroOrigem;

        var numeroOrigemElement = document.getElementById("num" + (origem + 1));
        numeroOrigemElement.innerHTML = " ";

        var numeroDestinoElement = document.getElementById("num" + (destino + 1));
        numeroDestinoElement.innerHTML = numeroOrigem;
    }
}

function mover_1() {
    mover(0, 1);
    mover(0, 3);
}

function mover_2() {
    mover(1, 0);
    mover(1, 2);
    mover(1, 4);
}
function mover_3() {
    mover(2, 1);
    mover(2, 5);
}

function mover_4() {
    mover(3, 0);
    mover(3, 4);
    mover(3, 6);
}
function mover_5() {
    mover(4, 1);
    mover(4, 3);
    mover(4, 5);
    mover(4, 7);
}

function mover_6() {
    mover(5, 2);
    mover(5, 4);
    mover(5, 8);
}
function mover_7() {
    mover(6, 3);
    mover(6, 7);
}

function mover_8() {
    mover(7, 4);
    mover(7, 6);
    mover(7, 8);
}

function mover_9() {
    mover(8, 5);
    mover(8, 7);
}

// Fim da vereficação de mover e mover


//  CONFIRMANDO QUE TODOS ESTÃO IGUAIS OU SEJA TODOS ESTÃO NOS DEVIDOS LUGARES
//  VERIFICAÇÃO 
function pronto() {
    var array_confirm = [[1],[2],[3],
                        [4],[5],[6],
                        [7],[8],[0]];

    var todosConfirmados = true;  

    array_confirm.forEach(function(valor, index) {
        if (array_confirm[index][0] !== array[index][0]) {
            todosConfirmados = false;
        }
    });

    if (todosConfirmados) {
        alert("Você Ganhou");
    } else {
        alert("Todos os numeros deve estar em sequencia pedida")
    }
    
}
//  FIM DA VERIFICAÇÃO  

function recarregar() {
    location.reload();
};
