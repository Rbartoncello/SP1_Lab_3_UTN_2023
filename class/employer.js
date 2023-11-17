class Employer extends People {
    constructor(id, name, lastname, years, salary, sales) {
        super(id, name, lastname, years);
        this.salary = salary;
        this.sales = sales;
    }
    
    toString() {
        return (
            super.toString() + `, salary: ${this.salary}, Ventas: ${this.sales}`
        );
    }
    
    toJson() {
        const personaJson = super.toJson();
        const empleadoJson = JSON.stringify({
            salary: this.salary,
            sales: this.sales,
        });
        return Object.assign(JSON.parse(personaJson), JSON.parse(empleadoJson));
    }

    update(data){
        super.update(data);
        this.salary = Number(data.salary);
        this.sales = Number(data.sales);
    }
}