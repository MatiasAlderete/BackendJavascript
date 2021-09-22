const Contenedor = require('./Contenedor');

const miContenedor = new Contenedor('./Productos.json');

console.log(miContenedor);

const misUtiles = {
   utiles: 'Regla',
   price: '345.40'
};

const main = async () => {
    const id = await miContenedor.save(misUtiles);
    console.log(id);

//    const list = await miContenedor.getAll();
//    console.log(list);

//    await miContenedor.deleteAll();
};

main();