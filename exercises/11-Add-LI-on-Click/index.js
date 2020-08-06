let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
    var agrega = document.createElement("LI");
    agrega.innerHTML = "Fourth element";
    var lista = document.querySelector("#myList");
    document.lista.appendChild(agrega);
});
