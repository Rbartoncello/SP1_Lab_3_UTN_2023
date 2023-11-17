const inputsDefault = [
  { name: "Id", id: "id", type: "text" },
  { name: "Nombre", id: "name", type: "text" },
  { name: "Apellido", id: "lastname", type: "text"},
  { name: "Edad", id: "years", type: "number", min: 0 },
];

const inputsEmployer = [
  { name: "Salario", id: "salary", type: "number", min: 0 },
  { name: "Ventas", id: "sales", type: "number", min: 0 },
];

const inputsClient = [
  { name: "Compras", id: "shoppings", type: "number", min: 0 },
  { name: "Telefono", id: "phone", type: "number", min: 0 },
];

const inputsActions = [
  { name: "Modificar", id: "edit"},
  { name: "Eliminar", id: "delete"},
];

const hearderActions = [
  { name: "Acciones", id: "actions"},
];
