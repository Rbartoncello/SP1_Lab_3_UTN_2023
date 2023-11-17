class Client extends People {
    constructor(id, name, lastname, years, shoppings, phone) {
        super(id, name, lastname, years);
        this.shoppings = shoppings;
        this.phone = phone;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`shoppings: ${this.shoppings}`);
        console.log(`Teléfono: ${this.phone}`);
    }

    toString() {
        return (
        super.toString() +
        `, shoppings: ${this.shoppings}, Teléfono: ${this.phone}`
        );
    }

    toJson() {
        const peopleJson = super.toJson();
        const clienteJson = JSON.stringify({
            shoppings: this.shoppings,
            phone: this.phone,
        });
        return Object.assign(JSON.parse(peopleJson), JSON.parse(clienteJson));
    }

    update(data){
        super.update(data);
        this.shoppings = Number(data.shoppings);
        this.phone = Number(data.phone);
    }
}