let matriz = [10, 20, 30, 15, 5]; // suma = 80

function callbackMatriz(matriz) {
  let total = matriz.reduce((a, b) => {
    if (b >= 20 && b % 2 == 0) {
      b = 20;
    }
    return a + b;
  }, 0);

  return function (callback) {
    return callback(total);
  };
}

callbackMatriz(matriz)((result) => result);
