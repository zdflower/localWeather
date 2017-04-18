
//Show Local Weather App

//cuando el documento esté cargado
//obtener y mostrar información sobre el clima local actual

//cuando se clickee el botón de unidad de temperatura, pase de Celsius a Farenheit y viceversa según el estado del botón

function cambiarUnidades(){
	//si el botón está en celsius, poner el nombre del botón a Farenheit y pasar a farenheit la temperatura que está en #temperatura
	//si el atributo value es "c", entonces lo cambiamos a "f" y también cambiamos el html
	if ($("#CelsiusFa").attr("value") == "c"){
		$("#CelsiusFa").attr("value", "f");
		$("#CelsiusFa").html("ºF");
		//tomar el valor de temperatura y convertirlo
		//$("#temperatura").html("temperatura en Farenheit"); //convertir de uno a otro
	} else{
		//pasar de farenheit a celsius
		$("#CelsiusFa").attr("value", "c");
		$("#CelsiusFa").html("ºC");
		//tomar el valor de temperatura y convertirlo
		//$("#temperatura").html("temperatura en Celsius"); //convertir de uno a otro
	}
}

$(document).ready( function(){
	//evento botón grados//
	$("#CelsiusFa").on("click", cambiarUnidades);
	
	//falta la parte de obtener el json

	//supongamos que lo tenés
	//después para el nombre de la ciudad accedes a la propiedad name
	//para el viento tenés la propiedad wind que a su vez tiene speed y deg
	//para la temperatura tenés main y después temp

	$.getJSON('weather2.json', function(data){//este ejemplo tiene la temperatura en Celsius (metric)
		//console.log(data);
		var temperatura = data["list"][0]["main"]["temp"];
		var cielo = data["list"][0]["weather"][0]["main"];
		var viento = data["list"][0]["wind"]["speed"];
		var ciudad = data["list"][0]["name"];
		$("#ciudad").html(ciudad);
		$("#temperatura").html(temperatura);
		$("#viento").html("Velocidad del viento (en ...): " + viento);
		$("#cielo").html(cielo);

		//si la temperatura es mayor a 26 grados mostrar una imagen "de verano"
		//si 19 <=  temperatura < 26, mostrar imagen primavera (u otoño, depende de la época del año y el hemisferio)
		//si la temperatura es menor de 19 grados mostrar imagen de invierno

		//vamos a empezar con algo simplificado

		if (temperatura >= 18) {
			//mostrar imagen calor
			$('body').css('background', 'url(cereals-480691_1920.jpg)');
		} else {
			//mostrar imagen frío
			$('body').css('background', 'url(thunder-2063728_1920.jpg)');
		}
	});

});