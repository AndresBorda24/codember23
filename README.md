# Codember 2023
Desafíos Codember 2023

### Challenge 01
Bien en la solución podría usar un ` Object.entries ` junto con un `forEach` y concatenar todo en una string. Sin embargo, quise probar otras cositas.
```JavaScript
  JSON
    .stringify(d)
    .replace(/[\{\}":,]/g, "")
```
<sub>Siendo *d* el objeto con el conteo de palabras</sub>
