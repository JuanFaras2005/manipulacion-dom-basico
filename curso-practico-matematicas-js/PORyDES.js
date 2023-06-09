const inputPrice = document.querySelector('#price');
const inputCoupoun = document.querySelector('#coupoun')
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// const arrayUObjeto = undefined; // ['cupones': descuento] {}?

// const coupountObj = {
//   'Juan_es_Batman': 30,
//   'no_le_digas_a_nadie': 25
// };

const coupountArray = []; 
coupountArray.push({
  name: 'Juan_es_Batman',
  discount: 30,
});
coupountArray.push({
  name: 'Junior_tu_papá',
  discount: 25,
});
coupountArray.push({
  name: 'silencio_gay',
  discount: 15,
});

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupoun = inputCoupoun.value;

    if (!price  || !coupoun ) {
        pResult.innerText = 'Llena el formulario, por favor';
        return;
    }

    let discount;

    function isCoupounInArray (coupounElement) { // {name, discount}
      return coupounElement.name == coupoun;
    }

    const coupounInArray = coupountArray.find (isCoupounInArray); // {}

    if (coupounInArray) {
      discount = coupounInArray.discount;
    } else {
      pResult.innerText = 'El cupón no es válido';
      return;
    }

    console.log({
      coupoun,
      discount,
      coupounInArray,
      coupountArray,
    });

    // if (coupountObj [coupoun]) {
    //   discount = coupountObj [coupoun];
    // } else {
    //   pResult.innerText = 'El cupón no es válido';
    //         return;
    // }

    // switch (coupoun) {
    //     case 'Juan_es_Batman':
    //       discount = 30;
    //       break;
    //     case 'no_le_digas_a_nadie':
    //       discount = 25;
    //       break;
    //     default:
    //       pResult.innerText = 'El cupón no es válido';
    //       return;
    //   }
    
    // if (coupoun == 'Juan_es_Batman') {
    //     discount = 35;
    // } else if ( coupoun == 'Juan_no_es_Batman') {
    //     discount = 25;
    // } else {
    //     pResult.innerText = 'El cupón no es valido';
    //     return;
    // }
    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}