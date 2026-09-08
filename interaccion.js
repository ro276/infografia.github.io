const musica = document.getElementById("musica");
const imagen = document.getElementById("imagenMusica");

let reproduciendo = true;

imagen.addEventListener("click", function() {

    if (reproduciendo) {

        musica.pause();
        imagen.src = "data/mute_sonido.png";
        reproduciendo = false;

    } else {

        musica.play();
        imagen.src = "data/unmute_sonido.png";
        reproduciendo = true;

    }

});

document.addEventListener("DOMContentLoaded", function () {
	var imagen = Array.prototype.find.call(document.querySelectorAll("img"), function (img) {
		var referencia = decodeURIComponent(img.getAttribute("src") || "").toLowerCase();
		var texto = (img.getAttribute("alt") || "").toLowerCase();
		return referencia.indexOf("datos de bots.png") !== -1 || texto === "datos de bots.png";
	});

	if (imagen) {
		imagen.addEventListener("click", function () {
			window.location.href = "nucleo1.html";
		});
		imagen.style.cursor = "pointer";
	}
});
