const url = "https://sebabarbitta.github.io/api-alternativo/Articulos.json";
const urla = "https://sebabarbitta.github.io/api-alternativo/Clientes.json";
const urlb = "https://sebabarbitta.github.io/api-alternativo/Distribuidora.json";
const urlc = "https://sebabarbitta.github.io/api-alternativo/Proveedor.json";
const urld = "https://sebabarbitta.github.io/api-alternativo/Vendedor.json";

function cargarDatos(url) {
    document.getElementById("listado").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
           
            datos.listado.forEach(integrante => {

                let row = "";
                row = `
                 

                <li> Nombre: `+ integrante.Nombre + `, Apellido: ` + integrante.Apellido + `, Edad: `+ integrante.Edad +`, Localidad ` +integrante.Localidad +`</li>`

                     document.getElementById("listado").innerHTML += row;
                     

            });

            

        })
        .catch(error => alert("Hubo un error: " + error));

        
}

