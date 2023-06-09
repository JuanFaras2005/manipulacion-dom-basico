const PlatziMath = {};

// [1,2,3,4,5...] (aqui es la funcion que hace el for i)
PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
  }
PlatziMath. esImpar = function esImpar(lista) {
    return lista.length % 2;
  }
  
PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {

    }
    for (let i = 0; i < lista.length; i++) {
      const elemento = lista[i];

      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
    const listaArray = Object.entries (listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaUltimateOrdenada = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaUltimateOrdenada[0];
    return moda;
    // console.log({listaCount, listaArray, listaOrdenada, listaUltimateOrdenada});
    
  }

  PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);
  
    if (listaEsPar) {
      const indexMitad1ListaPar = (lista.length / 2) - 1;
      const indexMitad2ListaPar = lista.length / 2;
      const listaMitades = [];
      listaMitades.push(lista[indexMitad1ListaPar]);
      listaMitades.push(lista[indexMitad2ListaPar]);
  
      const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
      return medianaListaPar;
    } else {
      const indexMitadListaImpar = Math.floor(lista.length / 2);
      const medianaListaImpar = lista[indexMitadListaImpar];
      console.log(indexMitadListaImpar);
      console.log(medianaListaImpar);
      return medianaListaImpar;
    }
  }

  PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
      return valorAcumulado - nuevoValor;
    }
    // const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
  
    return lista;
  }

PlatziMath.calcularPromedio = function calcularPromedio (lista) {
    function sumarTodosElementos (valorAcomulado, nuevoValor) {
        return valorAcomulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
    // lista.lenght    
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional (listaDesordenada, i) {
  function listaOrdenadaSort (valorAcomulado, nuevoValor) {
    return valorAcomulado[i] - nuevoValor[i];
    }

  const lista = listaDesordenada.sort(listaOrdenadaSort); 
  return lista;
}


