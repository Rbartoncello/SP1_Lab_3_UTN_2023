class People {
    constructor(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    toString() {
        return `ID: ${this.id}, nombre: ${this.nombre}, apellido: ${this.apellido}, edad: ${this.edad}`;
    }

    update(data){
        this.id = Number(data.id);
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.edad = Number(data.edad);
    }
}  