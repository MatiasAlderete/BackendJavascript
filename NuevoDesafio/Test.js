const Contenedor = require('./Contenedor');

const miContenedor = new Contenedor('./Productos.json');

//console.log(miContenedor);

const misUtilesUsados = {
   utiles: 'Regla',
   price: '468.80'
};

const main = async () => {
    const id = await miContenedor.save(misUtilesUsados);

    //const list = await miContenedor.getAll();
    //console.log(list);

    //await miContenedor.deleteAll();
};

main();