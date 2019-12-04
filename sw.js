// Instalar el service worker
self.addEventListener("install", evt =>{console.log("El Service Worker se instalo");});

//Activar el service worker
self.addEventListener("activate", evt =>{console.log("El Service Worker se activo");});

//Eventos Fetch - fetch request o pedido de busqueda