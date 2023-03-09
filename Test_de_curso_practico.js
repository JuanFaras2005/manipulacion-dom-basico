let objeto = {
    nombre: 'Juan José',
    edad: 17,
    hobbie: 'Aprender',
};
  
  function showElement(objeto) 
  {
    return Object.entries(objeto).forEach((element) => {
        console.log(element);
      });
  }
  showElement(objeto);
  