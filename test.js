const { suma } = require('./calculadora'); // Asegúrate de que la ruta sea correcta

test('suma sssssde enteros', () => {
    expect(suma(2, 3)).toBe(5);
});

test('suma de decimales', () => {
    expect(suma(2.5, 3.5)).toBe(6.0);
});

test('suma de entero y decimal', () => {
    expect(suma(2, 3.5)).toBe(5.5);
});

test('manejo error texto segundo parámetro', () => {
    expect(suma(2, "texto")).toBe("error23hola");
});

test('manejo error texto primer parámetro', () => {
    expect(suma("texto", 2)).toBe("error23hola");
});

test('manejo error texto ambos parámetros', () => {
    expect(suma("texto", "otro texto")).toBe("error23hola");
});

test('manejo error número mal formado', () => {
    expect(suma(2, "3.5abc")).toBe("error23hola");
});

test('suma de cadenas válidas', () => {
    expect(suma("4", "6")).toBe(10);
});

test('manejo error cadenas no numéricas', () => {
    expect(suma("cuatro", "seis")).toBe("error23hola");
});
