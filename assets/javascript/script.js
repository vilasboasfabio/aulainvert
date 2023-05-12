var diasSemana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"];
var temperaturas = [];
var temperaturaDia;
var somaTemperaturas = 0;
var i = 0;

while (i < diasSemana.length) {
  temperaturaDia = Number(prompt("Digite a temperatura média de " + diasSemana[i]));

  if (isNaN(temperaturaDia)) {
    alert("Digite um valor válido");
  }else{

  temperaturas.push({
    dia: diasSemana[i],
    temperatura: parseFloat(temperaturaDia)
  });

  somaTemperaturas += temperaturas[i].temperatura;
  i++;
}
}
temperaturas.sort(function (a, b) {
  return a.temperatura - b.temperatura;
});

console.log("Temperaturas da semana (em ordem crescente):");
for (var x = 0; x < temperaturas.length; x++) {
  console.log(temperaturas[x].dia + ": " + temperaturas[x].temperatura);
}

var mediaSemana = somaTemperaturas / temperaturas.length;

console.log("Média da semana: " + mediaSemana.toFixed(2));