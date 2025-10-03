
export async function obtenerProductos () {
    try{  
        const response = await fetch("https://fakestoreapi.com/products",{
            method: "GET"
        })

        const data = await response.json()
        console.log(`\n✅ Los productos de la tienda son: `)
      
        data.map((producto) => {
            console.log(producto)
        })
        
    }catch(error){
        console.error("❌ Error al obtener todos los productos:", error)
    }
}

export async function obtenerProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`,{
            method: "GET"
        })

        const data = await response.json()
        console.log(`\n✅ La información del producto solicitado es: `, data)
    }catch(error){
        console.error("❌ Error al obtener el producto:", error)
    }
}

export async function agregarProducto(producto) {
    try{
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
               "Content-Type" : "application/json" 
            },
            body: JSON.stringify(producto) 
        })

        const data = await response.json()
        console.log("\n✅ Producto agregado de manera exitosa (ID simulado por la API):", data)
    }catch(error){
        console.error("❌ Error al agregar el producto:", error)
    }
}

export async function eliminarProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`,{
            method: "DELETE"
        })
        const data = await response.json()
        console.log("\n✅ Producto eliminado con éxito (Objeto devuelto por la API):", data)
    }catch(error){
        console.error("❌ Error al eliminar el producto:", error)
    }
}

export async function actualizarProducto(producto) {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${producto.id}`,{
            method: "PUT",
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        })
        const data = await response.json()
        console.log("\n✅ Producto actualizado con éxito:", data)
    }catch(error){
        console.log("❌ Error al actualizar el producto:", error)
    }

}
