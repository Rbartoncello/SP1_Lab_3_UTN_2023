const inputsDefault = [
  { name: "Id", id: "id", type: "number"},
  { name: "Nombre", id: "nombre", type: "text" },
  { name: "Apellido", id: "apellido", type: "text"},
  { name: "Edad", id: "edad", type: "number", min: 15},
];

const inputsPlayer = [
  { name: "Equipo", id: "equipo", type: "text" },
  { name: "Posicion", id: "posicion", type: "text" },
  { name: "Cantidad de goles", id: "cantidadGoles", type: "number", min: -1 },
];

const inputsProfessional = [
  { name: "Titulo", id: "titulo", type: "text" },
  { name: "Facultad", id: "facultad", type: "text" },
  { name: "Año de graduacion", id: "añoGraduacion", type: "number", min: 1950 },
];

const inputsActions = [
  { name: "Modificar", id: "edit"},
  { name: "Eliminar", id: "delete"},
];

const hearderActions = [
  { name: "Acciones", id: "actions"},
];
