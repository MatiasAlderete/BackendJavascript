const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    async save(utiles) {
     try {
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
        
         let utiles = []; 
         if (contenido === '') {
            utiles.id = 1;
            utiles.push(utiles);
        } else {
          const utiles = JSON.parse(contenido);

          util.id = listaUtiles[listaUtiles.length -1].id +1;
          listaUtiles.push(utiles);
          utiles = listaUtiles
        }

         const utilesString = JSON.stringify(utiles, null, 2);
         await fs.promises.writeFile(`./${this.file}` , utilesString);
         return util.id;
      }  catch (error) {
            console.error('error', error);
        };
    }

/*     async getAll() {
    try {
          const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
          const listaUtiles = JSON.parse(contenido);

          return listaUtiles;
    } catch (error) {
          console.error('Error:', error);
        };
    }    

    async deleteAll() {
        try {
            await fs.promises.writeFile(`./${this.file}`, '');    
        } catch (error) {
            console.error('Error:', error);
        };
    } */
}        

module.exports = Contenedor;