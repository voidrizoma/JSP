// Function.prototype.call, Function.prototype.apply, Function.prototype.bind
// mètodos parte del prototipo de function, ayudan a establecer el this del contexto de una llamada de una funciòn

// Establece `this` usando `call`
function saludar() {
    console.log(`Hola. Soy ${
        this.name
    } ${
        this.apellido
    }`);
}

const karen = {
    name: "Karen",
    apellido: "Molina"
};

// saludar.call(karen);

// Establece `this` usando `call` y pasar argumentos a la función.
// los argumentos de call van deparados con comas.
function caminar(metros, direccion) {
    console.log(`${
        this.name
    } camina ${metros} metros hacia ${direccion}.`);
}

caminar.call(karen, 400, "norte");

// Establece `this` usando `apply` y pasar argumentos a la función
// Los argumentos se colcoan como un array
const valores = [800, 'noreste'];
caminar.apply(karen, valores);


// Establecer `this` en una nueva función usando `bind`
const daniel = {
    name: 'Daniel',
    apellido: 'Sánchez'
};
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel, 2000);
danielCamina('oeste');

