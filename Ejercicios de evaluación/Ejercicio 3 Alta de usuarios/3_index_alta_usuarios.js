let usersTable = localStorage.getItem("tablaUsuariosStorage");
usersTable = JSON.parse(usersTable);
if (usersTable == null) {
    usersTable = [];
}


let idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    idForm = 0;
}

cargarPagina();

function guardar() {
    Swal.fire({
        title: 'GUARDAR',
        html: 'DESEA GUARDAR LOS CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if (result.isConfirmed) {

                console.log("PRESIONO GUARDAR...");
                let objUsuario = JSON.stringify({
                    id: (idForm > 0) ? idForm : (usersTable.length + 1),
                    name: document.getElementById("nombreCom").value,
                    fecha: document.getElementById("fechaNac").value,
                    usuario: document.getElementById("user").value,
                    password: document.getElementById("password").value,
                });
                console.log(objUsuario);
                //Eitar usuarios
                if (idForm > 0) {
                    for (const i in usersTable) {
                        let user = JSON.parse(usersTable[i]);
                        if (user.id == idForm) {
                            usersTable[i] = objUsuario;
                            break;
                        }

                    }

                } else {
                    //Agregar nuevos usuarios
                    usersTable.push(objUsuario);
                }
                localStorage.setItem("tablaUsuariosStorage", JSON.stringify(usersTable));
                Swal.fire('CAMBIOS  GUARDADOS','','success').then(
                    (result)=>{
                        window.location.replace("3_usuarios.html");
                    }
                );
            }else if (result.isDenied){
                Swal.fire('CAMBIOS NO GUARDADOS','','info');
            }
        }
    );

}

function cargarPagina() {
    if (idForm > 0) {
        //Poner los datos de la tabla en el form para poder editar
        for (const i in usersTable) {
            let user = JSON.parse(usersTable[i]);
            if (user.id == idForm) {
                document.getElementById("idUsuario").value = user.id;
                document.getElementById("nombreCom").value = user.name;
                document.getElementById("fechaNac").value = user.fecha;
                document.getElementById("user").value = user.usuario;
                document.getElementById("password").value = user.password;
                break;
            }
        }
    }
}
