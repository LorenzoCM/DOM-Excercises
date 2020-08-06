window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
    for (let x of countries) {
        let option = document.createElement("option");
        option.innerHTML = x;
        document.querySelector("#mySelect").appendChild(option);
    }

    function alerta(e) {
        for (let y of countries) {
            if (this.value === y) {
                alert(str(this.value));
            }
        }
    } 
    elem.addEventListener("change", alerta);
};
