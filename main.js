
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
	

//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

//para obtener info a partir de latitud y longitud 
// ejemplo , la apikey es un ejemplo tb. http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1

	var longitud;
	var latitud;
	var unidad = "metric";
	var idioma = "es";
	var c1 = "38fca2502";
	var c2 = "82f6fb95f6cbc49d295ea26";

	//Obtener longitud y latitud
	$.getJSON('http://ip-api.com/json/?callback=?', function(data){
		//console.log(data);
		longitud = data["lon"];
		latitud = data["lat"];

		//Weather API
		var api = "http://api.openweathermap.org/data/2.5/weather?lat="+ latitud +"&lon="+ longitud + "&units="+ unidad + "&lang="+ idioma + "&APPID=" + c1 + c2;
		//var api = "http://api.openweathermap.org/data/2.5/weather?lat="+ latitud +"&lon="+ longitud +"&APPID=" + clave;
		$.getJSON(api, function(data){//este ejemplo tiene la temperatura en Celsius (metric)
			console.log(data);
			var temperatura = data["main"]["temp"];
			var cielo = data["weather"][0]["description"];
			var viento = data["wind"]["speed"];
			var ciudad = data["name"];
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
});