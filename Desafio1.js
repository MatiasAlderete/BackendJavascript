class Usuario {
    constructor (nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }
    
    getFullName() {
        console.log(this.nombre, this.apellido);
        return this.nombre;
    }

    addMascota(nuevaMascota) {
        console.log(this.mascotas);
        this.mascotas.push(nuevaMascota);
    }

    countMascotas() {
        console.log(this.mascotas.length);
        return this.mascotas.length;
    }

    addBook (id, libro) {
        this.libros.push({id, libro})
    }

     getBookNames() {
         let nombres = [];
         //let nombreLibro = this.libros;
         this.libros.forEach(nombreLibro => {
            console.log(nombreLibro); 
            nombres.push(nombreLibro.libros);
         });
         return(nombres);
     }
}

const Nusuario = new Usuario('Joaquin', 'Rodriguez', 
['Perro'], [{id:0, libros: 'Lo que el viente se llevo', Autor: 'Victor Fleming'}]);
const NusuarioD = new Usuario('Abril', 'Martinez', 
['Canario'], [{id: 1, libros: 'Guerra Mundial Z', Autor: 'Marc Forster'}]);
const NusuarioT = new Usuario('Carlos', 'Zarate', 
['Coballo'], [{id: 2, libros: 'Nightmare', Autor: 'Avenged Sevenfold'}]);
const NusuarioC = new Usuario('Carla', 'Ramirez', 
['Gato'], [{id: 3, libros: 'Me Veras Volver', Autor: 'Soda Stereo'}]);


console.log('Los usuarios son:');
const PrimerUsuario = Nusuario.getFullName();
//const SegundoUsuario = NusuarioD.getFullName();
//const TercerUsuario = NusuarioT.getFullName();
//const CuartoUsuario = NusuarioC.getFullName();


Nusuario.addMascota('Buho');
//NusuarioD.addMascota('Raton');
//NusuarioT.addMascota('Serpiente');
//NusuarioC.addMascota('Mono');

console.log('Cantidad de Mascotas: ', Nusuario.countMascotas());
//console.log('Cantidad de Mascotas: ', NusuarioD.countMascotas());
//console.log('Cantidad de Mascotas: ', NusuarioT.countMascotas());
//console.log('Cantidad de Mascotas: ', NusuarioC.countMascotas());

Nusuario.addBook([{id: 8, Libro: 'Ahi Vamos', Autor: 'Gustavo Cerati'}]);
//NusuarioD.addBook([{id: 10, Libro: 'Inhumano', Autor: 'Attaque 77'}]);
//NusuarioT.addBook([{id: 12, Libro: 'Paradojas', Autor: 'Las Pastillas del Abuelo'}]);
//NusuarioC.addBook([{id: 14, Libro: 'Bleach', Autor: 'Nirvana'}]);

Nusuario.getBookNames();
//NusuarioD.getBookNames();
//NusuarioT.getBookNames();
//NusuarioC.getBookNames();
