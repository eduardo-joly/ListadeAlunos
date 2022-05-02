let numerodeAlunos = 10;

for (let contador = 0; contador < numerodeAlunos; contador++) {

    // console.log(contador)

    if (contador == 0) {
        console.log("o número atual é zero")
    }
    else if (contador % 2 == 0) {
        console.log("o número" + contador + "é par")
    }
    else{
        console.log(`o número ${contador} é impar`)
    }
      
}

