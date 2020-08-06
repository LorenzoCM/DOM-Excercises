// Your code here
//Crear botones e insertarlos en el HTML:

const addToDo = document.getElementById("addToDo");

const button = document.createElement("button"); // Crea un boton #1
button.type = "submit"; //Agrega el atributo (type) submit al boton #1.
button.innerHTML = "Add a Task"; // Escribe en el boton #1 la tarea a realizar.

const button2 = document.createElement("button"); // Crea un boton #2.
button2.type = "submit"; //Agrega el atributo (type) submit al boton #2.
button2.innerHTML = "Delete a Task" //Escribe en el boton #2 la tarea a realizar.
button2.setAttribute("class", "delete"); //Agrega una clase "delete" al botón para poder seleccionarlo.

document.querySelector("div").appendChild(button); //Anexa el boton #1 al body y al documento HTML en general.
document.querySelector("div").appendChild(button2); ////Anexa el boton #2 al body y al documento HTML en general.

var listaUl = document.querySelector("ul");
listaUl.setAttribute("id", "lista");

// Agregar una nueva tarea:

button.addEventListener("click", () => {
    let addTask = addToDo.value;
    if (addTask === "") {
        alert("¡No has ingresado una nueva tarea!");
    } else {        
        var itemLista = document.createElement("LI"); //Crea un elemento li.
        var tarea = document.createElement("SPAN"); //Crea un elemento p.
        var icono = document.createElement("I"); //Crea un elemento icon.
        icono.setAttribute("class", "fa fa-trash"); // asigna la clase necesaria al icono para convertirlo en trash.  
        icono.onclick = function () {        
            icono.parentNode.parentNode.remove();
        }              
        var texto = document.createTextNode(" " + addTask); // Crea el texto que se agregará a la lista con el valor escrito en el input.
        tarea.appendChild(icono); //Incluye el texto dentro del p.
        itemLista.appendChild(tarea); //Incluye el icono dentro del LI antes del texto.
        itemLista.appendChild(texto); //Incluye el contenido de en el li.
        listaUl.appendChild(itemLista);
        addToDo.value = "";       
    }        
});

// Crear la función de borrar tareas:

var basuras = document.querySelectorAll(".fa-trash");
basuras.forEach(basura => {
    basura.onclick = function () {        
        basura.parentNode.parentNode.parentNode.removeChild();
    }
})