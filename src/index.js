const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nickname;
let somaTotal = 0;

function fazerPergunta1() {
  rl.question('Escolha o caminho entre 1 e 9 para saber os XPs coletados por seu Herói na sala de Treinamento: ', (caminhoUm) => {
    if (!isNaN(caminhoUm) && caminhoUm >= 1 && caminhoUm <= 9) {
      switch (caminhoUm) {
        case '1':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 500) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
        case '2':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 0) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
        case '3':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 10) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
        case '4':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 100) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
        case '5':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 1) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
        case '6':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 1000) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
        case '7':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 2500) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
        case '8':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 2000) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
        case '9':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoUm = 1500) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoUm);
          fazerPergunta2();
          break;
      }
    } else {
      console.log("Número de caminho não reconhecido. Tente novamente.");
      fazerPergunta1();
    }
  });
}

function fazerPergunta2() {
  rl.question('Escolha um caminho de 1 a 9 para saber o XP obtido durante a aventura na MarioKartIndustries: ', (caminhoDois) => {
    if (!isNaN(caminhoDois) && caminhoDois >= 1 && caminhoDois <= 9) {
      switch (caminhoDois) {
        case '1':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 50) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
        case '2':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 100) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
        case '3':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 1) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
        case '4':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 0) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
        case '5':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 3500) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
        case '6':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 30) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
        case '7':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 350) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
        case '8':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 8000) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
        case '9':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoDois = 75) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoDois);
          fazerPergunta3();
          break;
      }
    } else {
      console.log("Número de caminho não reconhecido. Tente novamente.");
      fazerPergunta2(); 
    }
  });
}

function fazerPergunta3() {
  rl.question('Escolha um caminho de 1 a 9 para saber o XP Obtido na Jornada de conhecimento na Ilha das Amazonas: ', (caminhoTres) => {
    if (!isNaN(caminhoTres) && caminhoTres >= 1 && caminhoTres <= 9) {
      switch (caminhoTres) {
        case '1':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 850) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
        case '2':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 5) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
        case '3':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 30) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
        case '4':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 10000) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
        case '5':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 1000) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
        case '6':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 150) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
        case '7':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 250) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
        case '8':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 25) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
        case '9':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoTres = 2500) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoTres);
          fazerPergunta4();
          break;
      }
    } else {
      console.log("Número de caminho não reconhecido. Tente novamente.");
      fazerPergunta3(); 
    }
  });
}

function fazerPergunta4() {
  rl.question('Escolha um caminho para saber o XP obtido ao chegar nos Salões de Valhalla e concluir sua Jornada: ', (caminhoQuatro) => {
    if (!isNaN(caminhoQuatro) && caminhoQuatro >= 1 && caminhoQuatro <= 9) {
      switch (caminhoQuatro) {
        case '1':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 0) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
        case '2':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 2000) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
        case '3':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 100) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
        case '4':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 150) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
        case '5':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 250) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
        case '6':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 5000) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
        case '7':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 50) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
        case '8':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 1500) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
        case '9':
          console.log(("Parabéns nesse nível seu heroí obteve ") + (caminhoQuatro = 750) + (" de XP e sua aventura foi um sucesso! " ));
          somaTotal += parseInt(caminhoQuatro);
          break;
      }
      
    } else {
      console.log("Número de caminho não reconhecido. Tente novamente.");
      fazerPergunta4(); 
    }

    imprimirSomaTotal();
console.log("Soma Total:", somaTotal);

  });

}

function imprimirSomaTotal() {
  if (somaTotal <= 1000) {
    console.log("Parabéns seu herói de nome", nickname, "atingiu um total de XP:", somaTotal, "e está no nível de Ferro");
  } else if (somaTotal <= 2000) {
    console.log("Parabéns seu herói de nome", nickname, "atingiu um total de XP:", somaTotal, "e está no nível de Bronze");
  } else if (somaTotal <= 3000) {
    console.log("Parabéns seu herói de nome", nickname, "atingiu um total de XP:", somaTotal, "e está no nível de Prata");
  } else if (somaTotal <= 4000) {
    console.log("Parabéns seu herói de nome", nickname, "atingiu um total de XP:", somaTotal, "e está no nível de Ouro");
  } else if (somaTotal <= 5000) {
    console.log("Parabéns seu herói de nome", nickname, "atingiu um total de XP:", somaTotal, "e está no nível de Platina");
  } else if (somaTotal <= 8500) {
    console.log("Parabéns seu herói de nome", nickname, "atingiu um total de XP:", somaTotal, "e está no nível de Ascendente");
  } else if (somaTotal <= 1000) {
    console.log("Parabéns seu herói de nome", nickname, "atingiu um total de XP:", somaTotal, "e está no nível de Radiante");
  } else {
    console.log("Parabéns seu herói de nome", nickname, "atingiu um total de XP:", somaTotal, "e está no nível de Imortal");
  }
  
  rl.close();
}

rl.on('close', () => {
    process.exit(0);
  }
);

function escolherJogador() {
  rl.question('Digite o número do jogador desejado: 1 - Clayton O Bom de Guerra / 2 - Mario O Comedor de Cogumelos / 3 - Detetive Pikachu:  ', (escolha) => {
    escolha = parseInt(escolha);

    if (!isNaN(escolha) && escolha >= 1 && escolha <= 3) {
      switch (escolha) {
        case 1:
          nickname = "Clayton O Bom de Guerra";
          console.log("Você escolheu", nickname, "e irá iniciar sua jornada na Sala de Treinamentos. Boa sorte!");
          fazerPergunta1();
          break;
        case 2:
          nickname = "Mario O Comedor de Cogumelos";
          console.log("Você escolheu", nickname, "e irá iniciar sua jornada na Sala de Treinamentos. Boa sorte!");
          fazerPergunta1();
          break;
        case 3:
          nickname = "Detetive Pikachu";
          console.log("Você escolheu", nickname, "e irá iniciar sua jornada na Sala de Treinamentos. Boa sorte!");
          fazerPergunta1();
          break;
      }
    } else {
      console.log("Número de jogador não reconhecido. Tente novamente.");
      escolherJogador(); 
    }
  });
}

escolherJogador();


