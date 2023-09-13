console.log("------------ Tarefa 1 ------------")

let meuNome = "Juan Silveira";
let num1 = 27;
let num2 = 86;
let num3 = num1 + num2;
let num4 = num1 * num2;

console.log("Nome: ", meuNome);
console.log("Soma: ", num3);
alert("Multiplicação: " + num4)

console.log("------------ Tarefa 2 ------------")

const multiplica = (num1, num2) => {

    if(num2 == 0) {
        console.log("Divida " + num1 + " por " + num2 + ":")
        return console.log("Não é possível dividir por zero!")
    }
    console.log(`Resultado da divisão de ${num1} por ${num2} é ${num1 / num2}`)
    console.log(`Sendo que o valor inteiro é ${Math.floor(num1 / num2)} e o resto da divisão é ${num1 % num2}`)
}

multiplica(2455,25);
multiplica(134,12);
multiplica(123,0);
