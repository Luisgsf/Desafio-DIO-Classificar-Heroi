const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite seu nome, bravo herói: ', (nome) => {
  readline.question('Informe sua quantidade de experiência (XP): ', (xpStr) => {
    const exp = Number(xpStr);
    if (isNaN(exp)) {
      console.log('XP inválido.');
    } else {
      let nivel;
      if (exp < 1000) nivel = 'Ferro';
      else if (exp <= 2000) nivel = 'Bronze';
      else if (exp <= 5000) nivel = 'Prata';
      else if (exp <= 7000) nivel = 'Ouro';
      else if (exp <= 8000) nivel = 'Platina';
      else if (exp <= 9000) nivel = 'Ascendente';
      else if (exp <= 10000) nivel = 'Imortal';
      else nivel = 'Radiante';

      console.log(`O Herói de nome ${nome} está no nível de ${nivel}!`);
    }
    readline.close();
  });
});

/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/