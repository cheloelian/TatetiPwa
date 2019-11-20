var boton=document.getElementsByTagName("button")[0]; /*traemos el boton*/
boton.onclick=ocultar;

var conte=document.getElementsByTagName("div");


var turno=true; /*  */

/// Vectores para las jugadas de cada jugador, y para guardar la secuencia de jugadas

var jugador1 = new Array (5);
var jugador2 = new Array (5);


/*   Matriz para las jugadas ganadores*/
var ganar0 = new Array (3);
var ganar1 = new Array (3);
var ganar2 = new Array (3);
var ganar3 = new Array (3);
var ganar4 = new Array (3);
var ganar5 = new Array (3);
var ganar6 = new Array (3);
var ganar7 = new Array (3);

var ganar = new Array (8)
ganar[0] = ganar0;
ganar[1] = ganar1;
ganar[2] = ganar2;
ganar[3] = ganar3;
ganar[4] = ganar4;
ganar[5] = ganar5;
ganar[6] = ganar6;
ganar[7] = ganar7;

/* Matriz para las llevar las jugadas */
var jugadas1 = new Array (3);
var jugadas2 = new Array (3);
var jugadas3 = new Array (3);

var jugadas = new Array (3)
jugadas[0] = jugadas1;
jugadas[1] = jugadas2;
jugadas[2] = jugadas3;

var ganaX,ganaO;
var p,i,cantjugadas;
var PuntoX,PuntoO;
PuntoX=0;
PuntoO=0;
ganaX=false;
ganaO=false;
/*  */
function ocultar()
	{
		var modal=document.getElementsByClassName("modal")[0];
		modal.className+=" oculto"; /* agrego clase oculto*/
		/// Este ciclo borra todo el contenido del tablero
		for(i=0; i<conte.length; i++)
		{
			conte[i].innerHTML="";
			conte[i].setAttribute("onclick","escribir("+i+")");	
			conte[i].className="";
		}
		boton.setAttribute("onclick","ocultar()");
		///modal.className="modal oculto"; otra forma
		///Inicia matriz de las jugadas 0 si todavia el casillero no fue elegido. 1 si es X - 2 si es O 
		jugadas[0][0]= 0;/// tambien a futuro para q el jugador juegue con la PC
		jugadas[1][0]= 0;
		jugadas[2][0]= 0;
		jugadas[0][1]= 0;
		jugadas[1][1]= 0;
		jugadas[2][1]= 0;
		jugadas[0][2]= 0;
		jugadas[1][2]= 0;
		jugadas[2][2]= 0;
		/* Jugadas Ganadoras */
		ganar[0][0]=1; ganar[0][1]=2; ganar[0][2]=3;
		ganar[1][0]=4; ganar[1][1]=5; ganar[1][2]=6; // Horizontales
		ganar[2][0]=7; ganar[2][1]=8; ganar[2][2]=9;
	
		ganar[3][0]=1; ganar[3][1]=4; ganar[3][2]=7;
		ganar[4][0]=2; ganar[4][1]=5; ganar[4][2]=8; // Verticales
		ganar[5][0]=3; ganar[5][1]=6; ganar[5][2]=9;
	
		ganar[6][0]=1; ganar[6][1]=5; ganar[6][2]=9; // Diagonales
		ganar[7][0]=7; ganar[7][1]=5; ganar[7][2]=3;
		/* ------------------- */
		jugador1[0]=0;
		jugador1[1]=0;
		jugador1[2]=0;
		jugador1[3]=0;
		jugador1[4]=0;
		jugador2[0]=0;
		jugador2[1]=0;
		jugador2[2]=0;
		jugador2[3]=0;
		jugador2[4]=0;
		
		ganaX=false;
		ganaO=false;
		p=0;
		i=0;
		cantjugadas=1;
		turno=true;
	}

function mostrar()
	{
	var modal=document.getElementsByClassName("modal")[0];
	modal.className="modal"; /* agrego clase oculto*/

	jugadas[0][0]= 0;/// tambien a futuro para q el jugador juegue con la PC
	jugadas[1][0]= 0;
	jugadas[2][0]= 0;
	jugadas[0][1]= 0;
	jugadas[1][1]= 0;
	jugadas[2][1]= 0;
	jugadas[0][2]= 0;
	jugadas[1][2]= 0;
	jugadas[2][2]= 0;
		
	jugador1[0]=0;
	jugador1[1]=0;
	jugador1[2]=0;
	jugador1[3]=0;
	jugador1[4]=0;
	jugador2[0]=0;
	jugador2[1]=0;
	jugador2[2]=0;
	jugador2[3]=0;
	jugador2[4]=0;
		
	ganaX=false;
	ganaO=false;
	p=0;
	i=0;
	cantjugadas=1;
	turno=true;
	}
/*conte[0].setAttribute("onclick","escribir(0)");
conte[1].setAttribute("onclick","escribir(1)");
conte[2].setAttribute("onclick","escribir(2)");
conte[3].setAttribute("onclick","escribir(3)");
conte[4].setAttribute("onclick","escribir(4)");
conte[5].setAttribute("onclick","escribir(5)");
conte[6].setAttribute("onclick","escribir(6)");
conte[7].setAttribute("onclick","escribir(7)");
conte[8].setAttribute("onclick","escribir(8)");*/

///conte[0].onclick=function(){escribir(0);};
function escribir(num)
	{
		var f=0;
		var c=0;
		switch (num)
			{
				case 0: f=0;c=0;break;
				case 1: f=0;c=1;break;
				case 2: f=0;c=2;break;
				case 3: f=1;c=0;break;
				case 4: f=1;c=1;break;
				case 5: f=1;c=2;break;
				case 6: f=2;c=0;break;
				case 7: f=2;c=1;break;
				case 8: f=2;c=2;break;
			}
		var h2=document.createElement("h2");
		var h1=document.getElementsByTagName("h1");
		if(jugadas[f][c]==0 && !ganaX && !ganaO)/// Si la jugada todavia no se hizo se agrega
			{
				if(turno==true)
					{
					jugadas[f][c]=cantjugadas;/// guardamos un valor para q sea distinto de 0
					h2.innerHTML="X";
					h2.className="X";
					turno=false;
					jugador1[i]=num+1; // guardamos la jugada en vector del jugador 1
					conte[num].appendChild(h2);
					conte[num].className="elegido";
					conte[num].removeAttribute("onclick");
					ganaX=ganador(ganar,jugador1);
					i=i+1;
					if (ganaX)
						{
						PuntoX=PuntoX+1;
						h1[0].innerHTML="X: "+ PuntoX;
						var modal=document.getElementsByTagName("section")[0];
                 		if(PuntoX<5)
                 			{
                 				modal.childNodes[0].innerHTML="Gano  X !!!! ";   
                      			modal.childNodes[2].innerHTML="Jugar otra vez"; 
                 			}
                 			else
                 				{
                 					modal.childNodes[0].innerHTML="Campeon Definitivo X";                  			
                 					modal.childNodes[2].innerHTML="Reiniciar"; 
                 					modal.childNodes[2].setAttribute("onclick","reiniciar()");
                 				}
                 		mostrar();
						}
					}
					else
						{
						jugadas[f][c]=cantjugadas;
						h2.innerHTML="O";
						h2.className="O";
						turno=true;
						jugador2[p]=num+1; // guardamos la jugada en vector del jugador 2
						conte[num].appendChild(h2);
						conte[num].className="elegido";
						conte[num].removeAttribute("onclick");
						ganaO=ganador(ganar,jugador2);
						p=p+1;
						if (ganaO)
							{
							PuntoO=PuntoO+1;
							h1[1].innerHTML="O: "+ PuntoO;
							var modal=document.getElementsByTagName("section")[0];
							if(PuntoO<5)
                 			{
                 				modal.childNodes[0].innerHTML="Gano  O !!!! ";   
                      			modal.childNodes[2].innerHTML="Jugar otra vez"; 
                 			}
                 			else
                 				{
                 					modal.childNodes[0].innerHTML="Campeon Definitivo O";                  			
                 					modal.childNodes[2].innerHTML="Reiniciar";    
                 					modal.childNodes[2].setAttribute("onclick","reiniciar()");
                 				}
							mostrar();
							}
						}
			cantjugadas=cantjugadas+1;
			}
			else /// Si no mensaje de Jugada ya Ingresada
				{
					alert("Jugada Ya Ingresada");
				}
			if (ganaX || ganaO) /// Si hubo ganadores juego Terminado
				{
				alert(" Juego Terminado");
				mostrar();
				}
				else 
					{
					if(cantjugadas==10)
						{ 
				 			var modal=document.getElementsByTagName("section")[0];
                 			modal.childNodes[0].innerHTML=" EMPATE !!!! ";                  			
                 			modal.childNodes[2].innerHTML="Jugar otra vez"; 
							mostrar();
						}
					}


function ganador(ganar,jugador)
	{// Devuelve TRUE si el jugador gana si suma es= 3 y si no ha ganado devuelve FALSE;
	var salida;
	var z,j,ind,suma;
	ind=0;
	suma=0;
	z=0;
	salida=false;
	do
	{
		ind=0;//Indice de vector de jugadas del jugador 1 u 2, empieza en 0
		suma=0;
		do
		{
			for(j=0;j<3;j++)///recorro la columna - z de la matriz ganar
				{
					if(jugador[ind] == ganar[z][j])//compara vector de jugadas dl Judador con matriz de ganar
					{		
						suma=suma+1; // suma las coincidencias
					}
				}
			ind=ind+1; /// voy a siguiente pocicion del vector
			if (suma==3)//si hubo tres coincidencias es ganador
				{
				salida=true; // sale del bucle
				}
		}
		while( !salida && (ind<5)); // sale del bucle si hay ganador o se termina el vector del jugador
		z=z+1; // se va a la siguiente fila de la matriz de formas de ganar
	}
	while((z<8)&& (!salida)); //sale del bucle si hay ganador o si recorre toda la matriz de formas de ganar
	return salida;
	}
	function punto(anotar)
    {
        h1=document.getElementsByTagName("h1");
        if (anotar=="X")
            {
                PuntoX+=1;
                h1[0].innerHTML="X: "+PuntoX;
			}
            else
                {
                	PuntoO+=1;
                    h1[1].innerHTML="O: "+PuntoO;
                 }
        var modal=document.getElementsByTagName("section")[0];
        modal.childNodes[0].innerHTML="Gano "+anotar+"!!!"; 
        modal.childNodes[2].innerHTML="Jugar otra vez"; 
        ///mostrar();    
    }
    
	}
	function reiniciar()
		{
        PuntoO=0;
		PuntoX=0;
		h1=document.getElementsByTagName("h1");
		h1[0].innerHTML="X: ";
		h1[1].innerHTML="O: ";
		ocultar();
	}