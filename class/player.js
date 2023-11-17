class Player extends People {
    constructor(id, nombre, apellido, edad, equipo, posicion, cantidadGoles) {
        super(id, nombre, apellido, edad);
        this.equipo = equipo;
        this.posicion = posicion;
        this.cantidadGoles = cantidadGoles;
    }

    update(data){
        super.update(data);
        this.equipo = data.equipo;
        this.posicion = data.posicion;
        this.cantidadGoles = Number(data.cantidadGoles);
    }
}