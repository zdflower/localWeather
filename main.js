
//Show Local Weather App

//cuando el documento esté cargado
//obtener y mostrar información sobre el clima local actual

//cuando se clickee el botón de unidad de temperatura, pase de Celsius a Farenheit y viceversa según el estado del botón

function cambiarUnidades(){
	//si el botón está en celsius, poner el nombre del botón a Farenheit y pasar a farenheit la temperatura que está en #temperatura
	//si el atributo value es "c", entonces lo cambiamos a "f" y también cambiamos el html
	if ($("#CelsiusFa").attr("value") == "c"){
		$("#CelsiusFa").attr("value", "f");
		$("#CelsiusFa").html("Fª");
		$("#temperatura").html("temperatura en Farenheit"); //convertir de uno a otro
	} else{
		//pasar de farenheit a celsius
		$("#CelsiusFa").attr("value", "c");
		$("#CelsiusFa").html("Cª");
		$("#temperatura").html("temperatura en Celsius"); //convertir de uno a otro
	}
}
$(document).ready( function(){
	//evento botón grados//
	$("#CelsiusFa").on("click", cambiarUnidades);
	}
	//falta la parte de obtener 
);