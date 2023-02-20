const intervalo = setInterval(() => {
  const diaAtual = "2023/02/20";
  const futureDay = "2023-11-07";
  const diffInMs = new Date(futureDay) - new Date(diaAtual);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  if (diffInDays < 0) {
    console.log("Feliz Aniversário");
  } else {
    console.log(`Faltam ${diffInDays} dias para o seu aniversário.`);
  }
}, 5000);
