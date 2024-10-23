function suma(a, b) {
    try {
        a = parseFloat(a);
        b = parseFloat(b);
        return a + b;
    } catch (error) {
        return "error23hola";
    }
}

// Ejemplo de uso
console.log(suma(5, 10)); // 15
console.log(suma("5", "10")); // 15
console.log(suma("abc", 10)); // NaN (en caso de error, se podría manejar esto)
