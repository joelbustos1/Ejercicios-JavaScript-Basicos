const carrito = [
    {
      articulo: 'Maceta',
      price: 500,
      cantidad: 1
    },
    {
      articulo: 'Tierra',
      price: 100,
      cantidad: 3
    }
  ]
  
  console.log("Hasta acá hay", carrito.length, "productos en el carrito");
  
  // suma un nuevo producto al carrito (recuerda utilizar length como vimos previamente)
  carrito[carrito.length] = {articulo: 'Planta', price: 200, cantidad: 1};
  
  // vuelve a imprimir el nuevo total de producto en el carrito
  console.log(`Hasta aca hay ${carrito.length} productos en el carrito`);
  