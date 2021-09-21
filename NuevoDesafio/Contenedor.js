const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
        console.log('constructor: ', this);
    }

    save(mascota) {
        console.log('save: ', mascota);

        fs.promises.readFile(`./${this.file}` , '') {
          .then((contenido) => {
              console.log(contenido);
              if (contenido === '') {
                  mascota.id = 0;
                  return mascota;
              }
              const listaDeMascota = JSON.parsel(contenido);
              mascota.id = listaDeMascota.length;

              return mascota;
          })
          .then (mascota) => {
            const mascotaString = JSON.stringify(mascota, null, 2);
            console.log('LISTA PARA GUARDAR: ', mascotaString);
          }
          
        }
    } 
}

