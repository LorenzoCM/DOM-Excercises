let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
    var nueva = document.createElement("DIV");    
    nueva.innerHTML = "Hello World";
    nueva.style.background = "yellow";
    document.body.appendChild(nueva);
});
