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
}

const Nusuario = new Usuario('Joaquin', 'Rodriguez', 
['Perro'], [{id:0, libro: 'Lo que el viente se llevo'}]);
const NusuarioD = new Usuario('Abril', 'Martinez', 
['Canario'], [{id: 1, libro: 'Guerra Mundial Z'}]);
const NusuarioT = new Usuario('Carlos', 'Zarate', 
['Coballo'], [{id: 2, libro: 'Nightmare'}]);
const NusuarioC = new Usuario('Carla', 'Ramirez', 
['Gato'], [{id: 3, libro: 'Me Veras Volver'}]);


console.log(Nusuario);
console.log(NusuarioD);
console.log(NusuarioT);
console.log(NusuarioC);

console.log('Los usuarios son:');
const PrimerUsuario = Nusuario.getFullName();
const SegundoUsuario = NusuarioD.getFullName();
const TercerUsuario = NusuarioT.getFullName();
const CuartoUsuario = NusuarioC.getFullName();


Nusuario.addMascota('Buho');
console.log(Nusuario);
NusuarioD.addMascota('Raton');
console.log(NusuarioD);
NusuarioT.addMascota('Serpiente');
console.log(NusuarioT);
NusuarioC.addMascota('Mono');
console.log(NusuarioC);

console.log('Cantidad de Mascotas: ', Nusuario.countMascotas());
console.log('Cantidad de Mascotas: ', NusuarioD.countMascotas());
console.log('Cantidad de Mascotas: ', NusuarioT.countMascotas());
console.log('Cantidad de Mascotas: ', NusuarioC.countMascotas());

Nusuario.addBook(8, 'Ahi Vamos');
console.log(Nusuario);
NusuarioD.addBook(10, 'Inhumano');
console.log(NusuarioD);
NusuarioT.addBook(12, 'Paradojas');
console.log(NusuarioT);
NusuarioC.addBook(14, 'Bleach');
console.log(NusuarioC);

