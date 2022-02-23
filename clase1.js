class User {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre= nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    //methods

    getFullName(){
       return `nombre completo es ${this.nombre} ${this.apellido}`;
    }

    addMascota(String){
        this.mascotas.push(String);    

    }

    countMascotas(){
        return `tiene ${this.mascotas.length} mascotas`;
    }

    addBook(nombre, autor){
        let libro = new Object();
        libro.Nombre= nombre;
        libro.Autor = autor;

        this.libros.push(libro);
        
    }

    getBookNames(){
        let bookNames = this.libros.map(function(obj){
            let rObj = {}
            return rObj=obj.Nombre;
        })
        return bookNames;
    }
}


const p = new User(`karla`, 'vergara', [{Nombre: `escarabajo de oro`, Autor: `edgar allan poe`}] , [`perro`])

console.log(p.getFullName())
p.addMascota(`gato`)
console.log(p.mascotas);
console.log(p.countMascotas())
p.addBook(`the bible`,`god`)
console.log(p.libros)
console.log(p.getBookNames())

