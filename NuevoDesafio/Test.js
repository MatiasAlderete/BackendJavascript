const Contenedor = require('./Contenedor');

const miContenedor = new Contenedor('./Productos.json');

//console.log(miContenedor);

const misUtilesUsados = {
   utiles: 'Corrector Liquido',
   price: '896.80'
};

const main = async () => {
    const id = await miContenedor.save(misUtilesUsados);

    //const list = await miContenedor.getAll();
    //console.log(list);

    //await miContenedor.deleteAll();
};

main();