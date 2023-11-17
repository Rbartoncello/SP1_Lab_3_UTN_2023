class People {
    constructor(id, name, lastname, years) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.years = years;
    }
    
    mostrarInformacion() {
        console.log(`ID: ${this.id}`);
        console.log(`name: ${this.name}`);
        console.log(`lastname: ${this.lastname}`);
        console.log(`years: ${this.years}`);
    }
    
    toString() {
        return `ID: ${this.id}, name: ${this.name}, lastname: ${this.lastname}, years: ${this.years}`;
    }
    
    toJson() {
        return JSON.stringify({
            id: this.id,
            name: this.name,
            lastname: this.lastname,
            years: this.years
        });
    }

    update(data){
        this.id = Number(data.id);
        this.name = data.name;
        this.lastname = data.lastname;
        this.years = Number(data.years);
    }
}  