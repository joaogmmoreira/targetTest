function inverterString(str: string): string {
  let strInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  return strInvertida;
}

const entrada = "Hello, World!";
const resultado = inverterString(entrada);

console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);
