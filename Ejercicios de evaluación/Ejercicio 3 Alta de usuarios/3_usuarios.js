let usersTable = localStorage.getItem("tablaUsuariosStorage");
usersTable = JSON.parse(usersTable);
if(usersTable == null){
     usersTable = [];
}

listar();

function listar() {
    console.log("INGRESANDO A LISTAR...");

    let dataFila = '';

    if(usersTable.length > 0){
        for(const i in usersTable){
            let user = JSON.parse(usersTable[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+user.id+"</td>";
            dataFila += "<td>"+user.name +"</td>";
            dataFila += "<td>"+user.fecha+"</td>";
            dataFila += "<td>"+user.usuario+"</td>";
            dataFila += "<td>"+user.password+"</td>";
            dataFila += "<td>"+
                        "<button type='button' class='btn btn-warning' onclick='abrirForm("+user.id+")'>Editar</button>"+
                        "<button type='button' class='btn btn-danger' onclick='eliminarItem("+user.id+")'>Eliminar</button>"+
                        "</td>";
            dataFila += "</tr>";

        }
        document.getElementById("dataUsuarios").innerHTML = dataFila;
    }
    else{
        document.getElementById("dataUsuarios").innerHTML = "<tr><td colspan='7'>No hay datos</td></tr>";
    }
}


function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("3_index_alta_usuarios.html");
}

//Eliminar
function eliminarItem(idItem){
    for(const i in usersTable){
        user = JSON.parse(usersTable[i]);
        if(user.id == idItem){
            usersTable.splice(i,1);
            localStorage.setItem("tablaUsuariosStorage", JSON.stringify(usersTable));
        }
    }
    listar()
}