function guardar(){
   
    var _nom = document.getElementById("nomb").value;
    
    var fila="<tr><td>"+_nom+"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}