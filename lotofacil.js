var aposta = new Set([1, 2, 3, 4, 05, 06, 08, 11, 12, 14, 15, 16, 20, 24, 25]);
var resultado = [];

resultado[1879] = new Set([02, 04, 05, 06, 08, 10, 11, 13, 15, 16, 19, 20, 21, 24, 25]);
resultado[1880] = new Set([01, 04, 05, 06, 07, 09, 11, 13, 15, 18, 19, 20, 22, 23, 24]);
resultado[1881] = new Set([01, 03, 04, 05, 10, 14, 15, 16, 17, 18, 19, 21, 23, 24, 25]);
resultado[1882] = new Set([01, 03, 04, 05, 08, 09, 11, 12, 13, 14, 15, 16, 22, 23, 24]);
resultado[1883] = new Set([01, 02, 03, 04, 05, 08, 11, 13, 15, 16, 17, 18, 21, 22, 23]);
resultado[1884] = new Set([01, 02, 03, 05, 06, 07, 08, 09, 11, 12, 14, 16, 17, 23, 25]);
resultado[1885] = new Set([01, 03, 05, 08, 09, 10, 11, 12, 14, 17, 18, 21, 22, 23, 25]);
resultado[1886] = new Set([01, 02, 03, 06, 09, 11, 12, 14, 15, 16, 19, 20, 21, 22, 25]);

var cont = 0;
for (let sorteio = 1879; sorteio < 1887; sorteio++) {
  cont = 0;
  for (let num of aposta) {
    if (resultado[sorteio].has(num)) cont++;
  }
  console.log(`Sorteio ${sorteio}: ${cont}`)
}