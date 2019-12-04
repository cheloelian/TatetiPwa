const nombreCache="sitio-cache";

const elementos=["/","/index.html","/ejer6ok0711.css","/ejer6ok0711.js"];

// Instalar el service worker
self.addEventListener("install", evt =>
{
	//console.log("El Service Worker se instalo");
	evt.waitUntil(
		caches.open(nombreCache).then((cache)=> 
		{
			console.log("Definimos el Cache Predeterminado.");
			cache.addAll(elementos);
		})
		);
});
//Activar el service worker
self.addEventListener("activate", evt =>{console.log("El Service Worker se activo");});

//Eventos Fetch - fetch request o pedido de busqueda
self.addEventListener("fetch", evt =>{console.log("Se Atrapo el Evento: ", evt);});

