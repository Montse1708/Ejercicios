let upload = document.getElementById('cargar_archivo'); //Cargar archivo desde el input
let read = document.getElementById('leer_archivo'); //Leer el contendo del archivo

upload.addEventListener("change", ()=>{ //Funcion flecha para cargar el contenio del archivo
     let txt = new FileReader();
     txt.readAsText(upload.files[0]); 
     txt.onload = function() {
          read.innerHTML = txt.result;
     };
});