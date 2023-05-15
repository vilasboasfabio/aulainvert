// let nomes = ['ana', ];
// let numeros = ['1,7,11,16,24,31'];
// let comp = ['24,4,3,37,16,15'];

// let prom = prompt("Digite o número desejado:");

// console.log(nomes[prom - 1]);
// console.log(numeros[prom - 1]);
// console.log(comp[prom - 1]);

// Obtenha os nomes do usuário
// var nomes = prompt("Digite os nomes separados por vírgula:");

// // Separe os nomes em um array
// var nomesArray = nomes.split(",");

// // Inicialize um array vazio para armazenar os nomes que começam com "A"
// var nomesComA = [];

// // Percorra cada nome no array
// for (var i = 0; i < nomesArray.length; i++) {
//     var nome = nomesArray[i].trim();
//     // Verifique se o nome começa com "A"
//     if (nome.charAt(0).toUpperCase() === 'A') {
//         // Adicione o nome ao array de nomes com "A"
//         nomesComA.push(nome);
//     }
// }

// // Exiba os nomes com "A" na mesma formatação original
// console.log("Nomes que começam com A:");
// console.log(nomesComA.join(", "));

// let valor = Number(prompt("Digite o valor do produto"));

// if(valor < 0 || isNaN(valor)){
//     alert("Digite um valor válido")
// }else if(valor <= 30){
//     let taxa = valor * 0.4
//     console.log("O valor do produto é: " + `${valor}`)
//     console.log("O lucro será: " + taxa)
// }else{

//     let taxa2 = valor * 0.3;
//     console.log("O valor do produto é" + `${valor}`)
//     console.log("O lucro será: " + taxa2.toFixed(2))

// }

// let mes = prompt("Digite o mês desejado:");

// switch (mes) {
//     case "janeiro":
//         alert("Verão")
//         break;
//     case  "fevereiro":
//         alert("Verão")
//         break;
//     case "março":
//         alert("Verão/Outono")
//         break;
//     case "abril":
//         alert("Outono")
//         break;
//         case "maio":
//         alert("Outono")
//         break;
//     case "junho":
//         alert("Outono/Inverno")
//         break;
//         case "julho":
//         alert("Inverno")
//         break;
//     case "agosto":
//         alert("Inverno")
//         break;
//     case "setembro":
//         alert("Inverno/Primevera")
//         break;
//     case "outubro":
//         alert("Primavera")
//         break;
//         case "novembro":
//         alert("Primavera")
//         break;
//     case "dezembro":
//         alert("Primaver/Verão")
//         break;
//     default:
//         alert("Digite um mês existente!")
//         break;
// }

// let num1 = Number(prompt("Digite a base"));
// let num2 = Number(prompt("Digite o seu expoente"));

// for (let i = 0; i <= num2; i++) {

//     if (isNaN(num1) || isNaN(num2)) {
//         alert('Digite um número válido')
//     } else {
//         let mult = 0;
//         mult = num1 ** num2;

//         console.log(mult);
//     }

// }
// let trabalha = prompt("Voce trabalha?");
// let nome;
// let salario;
// let totalsalario = [];
// let numEstagiarios = 0;
// let media = 0;

// let mediasalario;
// let i = 0;
// let nomes = [];
// let continuar;

// do {
//     trabalha = prompt("você trabalha? (S/N)");
//     if (trabalha == "S") {
//         nome = prompt("Digite seu nome:");
//         salario = Number(prompt("Digite seu salário atual:"));
//         totalsalario.push(salario);
//         numEstagiarios++;
//         mediasalario += totalsalario;
//         media = mediasalario / totalsalario.length;
//         continuar = prompt("Deseja continuar? (S/N)");

//     } else if (trabalha == "N") {
//         alert("obrigado por responder nosso formulario");
//     }
//     else {
//         alert("opção invålida. Tente novamente.");

//     }
// } while (continuar == "s");
// console.log(mediasalario)
// console.log(media);

var senha = prompt("Digite sua senha:");
var Maiuscula = false;


 do {
  for (var i = 0; i < senha.length; i++) {
    if (senha[i] == senha[i].toUpperCase() && senha[i] !== senha[i].toLowerCase()) {
      Maiuscula = true;
    }
  }

  if (!Maiuscula) {
    alert("A senha deve conter pelo menos uma letra maiúscula!");
    senha = prompt("Digite sua senha novamente:");
  }
}while (!Maiuscula)

alert("Senha válida!");
console.log(senha);
