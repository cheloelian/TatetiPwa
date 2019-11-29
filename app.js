if("serviceWorker" in navigator) ///si navegador acepta serviceworker
	{
		console.log("Acepta service worker");
		navigator.serviceWorker.register("/sw.js")
		.then((reg) => console.log("Service Worker Registrado",reg))
		.catch((err) => console.log("Servide Worker NO Registrado",err));
	}