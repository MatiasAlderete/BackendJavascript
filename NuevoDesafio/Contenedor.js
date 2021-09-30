const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    async save(misUtiles) {
     try {
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
 
         let utiles = []; 
         if (contenido === '') {
            misUtiles.id = 1;
            utiles.push(misUtiles);
        } else {
          const listaUtiles = JSON.parse(contenido);

          misUtiles.id = listaUtiles[listaUtiles.length - 1].id +1;
          listaUtiles.push(misUtiles);
          utiles = listaUtiles;
        }

         const utilesString = JSON.stringify(utiles, null, 2);
         await fs.promises.writeFile(`./${this.file}` , utilesString);
         return misUtiles.id;
      }  catch (error) {
            console.error('error', error);
        };
    }

    async getAll() {
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
    } 

    async getById() {
        try {
         const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
         const listaUtiles = JSON.parse(contenido);

         id = 18;
         listaUtiles = contenido.getElementById(id);

            return listaUtiles;
      } catch (error) {
            console.error('Error:', error);
          };        
    }
}        

module.exports = Contenedor;