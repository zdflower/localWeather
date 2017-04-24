
//Show Local Weather App

//cuando el documento esté cargado
//obtener y mostrar información sobre el clima local actual

//cuando se clickee el botón de unidad de temperatura, pase de Celsius a Farenheit y viceversa según el estado del botón

function convertirC2F(celsius){
	return (celsius * 1.8 + 32);
}

$(document).ready( function(){
	var longitud;
	var latitud;
	var unidad = "metric";
	var idioma = "es";
	var c1 = "38fca2502";
	var c2 = "82f6fb95f6cbc49d295ea26";

	//Obtener longitud y latitud
	$.getJSON('https://crossorigin.me/http://ip-api.com/json/?callback=?', function(data){
		//console.log(data);
		longitud = data["lon"];
		latitud = data["lat"];

		//Weather API
		var api = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat="+ latitud +"&lon="+ longitud + "&units="+ unidad + "&lang="+ idioma + "&APPID=" + c1 + c2;
		//var api = "http://api.openweathermap.org/data/2.5/weather?lat="+ latitud +"&lon="+ longitud +"&APPID=" + clave;
		$.getJSON(api, function(data){//este ejemplo tiene la temperatura en Celsius (metric)
			console.log(data);
			var temperaturaC = data["main"]["temp"];
			var temperaturaF = convertirC2F(temperaturaC);
			var cielo = data["weather"][0]["description"];
			var viento = data["wind"]["speed"];
			var ciudad = data["name"];
			var icono = data["weather"][0]["icon"];
			$("#ciudad").html("<p>"+ciudad+"</p>");
			$("#temperatura").html("<p>"+temperaturaC+"</p>");
			$("#viento").html("<p>Velocidad del viento: " + viento + " m/s </p>");
			$("#cielo").html("<p>" + cielo + " <img src='https://crossorigin.me/http://openweathermap.org/img/w/" + icono +".png'>" + " </p>");


			/////////////PARTE A MEJORAR//////////////
			//Falta que los well tengan todos la misma altura y que la temperatura y la unidad estén en la misma línea
			////////////////////////////////////////

			//evento botón grados//
			$("#CelsiusFa").on("click", function(){
				if ($("#CelsiusFa").attr("value") == "c"){
					$("#CelsiusFa").attr("value", "f");
					$("#CelsiusFa").html("ºF");
					$("#temperatura").html("<p>"+temperaturaF+"</p>");
				} else{
					//pasar de farenheit a celsius
					$("#CelsiusFa").attr("value", "c");
					$("#CelsiusFa").html("ºC");
					$("#temperatura").html("<p>"+temperaturaC+"</p>");
				}
			});
		});
	});
});
