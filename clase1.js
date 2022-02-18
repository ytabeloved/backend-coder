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
        this.mascotas =[];
        this.mascotas.push(String)       

    }

    countMascotas(){

    }

    addBook(String, String){

    }

    getBookNames(){

    }
}


const p = new User(`karla`, 'vergara', `edgar allan poe`, `perro`)

console.log(p.getFullName())
console.log(p.addMascota(`gato`))
console.log(p.mascotas);
