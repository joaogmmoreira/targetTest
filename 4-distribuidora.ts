const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentuais(faturamento: { [estado: string]: number }) {
  const totalFaturamento = Object.values(faturamento).reduce(
    (acc, valor) => acc + valor,
    0
  );

  const percentuais = Object.entries(faturamento).map(([estado, valor]) => {
    const percentual = (valor / totalFaturamento) * 100;
    return { estado, percentual: percentual.toFixed(2) };
  });

  return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);

percentuais.forEach((item) => {
  console.log(`Estado: ${item.estado} | Percentual: ${item.percentual}%`);
});
