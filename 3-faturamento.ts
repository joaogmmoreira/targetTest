import * as fs from "fs";

function calcularFaturamento(
  dados: Array<{ dia: number; faturamento: number }>
) {
  const diasComFaturamento = dados.filter((d) => d.faturamento > 0);

  const menorFaturamento = Math.min(
    ...diasComFaturamento.map((d) => d.faturamento)
  );
  const maiorFaturamento = Math.max(
    ...diasComFaturamento.map((d) => d.faturamento)
  );

  const somaFaturamento = diasComFaturamento.reduce(
    (acc, d) => acc + d.faturamento,
    0
  );
  const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (d) => d.faturamento > mediaFaturamento
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

fs.readFile("faturamento.json", "utf8", (err, data) => {
  if (err) {
    console.log("Erro ao ler o arquivo", err);
    return;
  }

  const faturamentoData = JSON.parse(data);
  const resultados = calcularFaturamento(faturamentoData);

  console.log(`Menor Faturamento: R$ ${resultados.menorFaturamento}`);
  console.log(`Maior Faturamento: R$ ${resultados.maiorFaturamento}`);
  console.log(
    `Número de dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`
  );
});
