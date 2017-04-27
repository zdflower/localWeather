function convertirC2F(celsius){
	return (celsius * 1.8 + 32);
}
$(document).ready( function(){
  $.getJSON("https://cors-anywhere.herokuapp.com/http://ipinfo.io/", function(position) {
 			  console.log(position);
 			  var location = position.loc.split(",");
	    	var latitud = location[0];
	    	var longitud = location[1];
  	    var unidad = "metric";
	      var idioma = "es";
	      var c1 = "38fca250282f6fb95f6cbc49d295ea26";
	      //Weather API
	      var api = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+ latitud +"&lon="+ longitud + "&units="+ unidad + "&lang="+ idioma + "&APPID=" + c1;

		    $.getJSON(api, function(data){
			    console.log(data);
			    var temperaturaC = Math.floor(data["main"]["temp"]);
			    var temperaturaF = Math.floor(convertirC2F(temperaturaC));
			    var cielo = data["weather"][0]["description"];
			    var viento = data["wind"]["speed"];
			    var ciudad = data["name"];
			    var icono = data["weather"][0]["icon"];
			    $("#ciudad").html("<p>"+ciudad+"</p>");
			    $("#temperatura").html("<p>"+temperaturaC+"</p>");
			    $("#viento").html("<p>Velocidad del viento: " + viento + " m/s </p>");
			    $("#cielo").html("<p>" + cielo + " <img src='http://openweathermap.org/img/w/" + icono +".png'>" + " </p>");
			/////////////PARTE A MEJORAR//////////////
			//Falta que los well tengan todos la misma altura y que la temperatura y la unidad estén en la misma línea
			////////////////////////////////////////
			//evento botón grados//
			    $("#CelsiusFa").on("click", function(){
				    if ($("#CelsiusFa").attr("value") == "c"){
					    $( "#CelsiusFa").attr("value", "f");
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