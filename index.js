import { agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "./api-manager.js"

const argumentos = process.argv.slice(2)
console.log("Argumentos recibidos:", argumentos)

if (argumentos[0] == "GET" && argumentos[1] == "products"){
    
    console.log("Comando reconocido: Obtener todos los productos.")
    obtenerProductos()

} else if(argumentos[0] == "GET" && argumentos[1] && argumentos[1].includes("products/")){
    
    console.log(`Comando reconocido: Obtener producto con ID en ${argumentos[1]}.`)
    obtenerProducto(argumentos[1])

} else if (argumentos[0] == "POST" && argumentos[1] == "products" && argumentos.length == 5){
    
    console.log("Comando reconocido: Agregar un nuevo producto.")
    
   
    const producto = {
        title: argumentos[2],
        price: argumentos[3],
        category: argumentos[4]
    }

    agregarProducto(producto)

} else if (argumentos[0] == "DELETE" && argumentos[1] && argumentos[1].includes("products/")) {

    console.log(`Comando reconocido: Eliminar producto con ID en ${argumentos[1]}.`)
    eliminarProducto(argumentos[1])

} else {
    
    console.error("\n" + "=".repeat(46))
    console.error("⛔️ Comando erroneo o argumentos incompletos.")
    console.error("Los comandos válidos son:")
    console.error("  - Obtener Todos: GET products")
    console.error("  - Obtener Uno:   GET products/<id>")
    console.error("  - Crear:         POST products <title> <price> <category>")
    console.error("  - Eliminar:      DELETE products/<id>")
    console.error("=".repeat(46) + "\n")
}