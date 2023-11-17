class Professional extends People {
    constructor(id, nombre, apellido, edad, titulo, facultad, añoGraduacion) {
        super(id, nombre, apellido, edad);
        this.titulo = titulo;
        this.facultad = facultad;
        this.añoGraduacion = añoGraduacion;
    }

    update(data){
        super.update(data);
        this.titulo = data.titulo;
        this.facultad = data.facultad;
        this.añoGraduacion = Number(data.añoGraduacion);
    }
}