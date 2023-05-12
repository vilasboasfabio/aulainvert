let arr = [];
let contador = 0;

while (contador < 10) {
    var i = prompt("insira os dez números um por vez: ");

    if ( isNaN(i) ) {
        alert("digite apenas numeros")
    }

    else if (!isNaN(i)) {
        arr.push(Number(i));
        i.push = arr;
        contador ++;
    
    }
}
console.log(arr);