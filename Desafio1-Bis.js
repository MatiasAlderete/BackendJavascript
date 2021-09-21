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

    addBook (autor, libro) {
        this.libros.push({autor, libro})
    }

    getBookNames() {
         let nombres = [];
         this.libros.forEach(nombreLibro => {
            nombres.push(nombreLibro.libro);
         });
         return nombres;
    }
}

const Nusuario = new Usuario('Joaquin', 'Rodriguez', 
['Perro'], [{libro: 'Lo que el viente se llevo', Autor: 'Victor Fleming'}]);


console.log('Los usuarios son:');
const PrimerUsuario = Nusuario.getFullName();


Nusuario.addMascota('Buho');

console.log('Cantidad de Mascotas: ', Nusuario.countMascotas());

Nusuario.addBook('Gustavo Cerati', 'Ahi Vamos');

console.log(Nusuario.getBookNames());

