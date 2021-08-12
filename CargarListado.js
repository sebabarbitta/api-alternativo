const url = "https://sebabarbitta.github.io/api-alternativo/Articulos.json";
const urla = "https://sebabarbitta.github.io/api-alternativo/Clientes.json";
const urlb = "https://sebabarbitta.github.io/api-alternativo/Distribuidora.json";
const urlc = "https://sebabarbitta.github.io/api-alternativo/Proveedor.json";
const urld = "https://sebabarbitta.github.io/api-alternativo/Vendedor.json";

function cargarDatos(url) {
    document.getElementById("articulos").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
           
            datos.Articulos.forEach(integrante => {

                let row = "";
                row = `
                 

                <li> CodigoBarra: `+ integrante.Codigobarra +
                 `, Nombre: ` + integrante.Nombre +
                  `, Precio: `+ integrante.Precio +`</li>`

                     document.getElementById("articulos").innerHTML += row;
                     

            });

            

        })
        .catch(error => alert("Hubo un error: " + error));

        
}

