var aantalbier=0
var aantalfris=0
var aantalwijn=0
var aantalbitterbal=0
var prijzenhtml= document.getElementById("prijzen")

bestel()



//is eigenlijk alles 
function bestel(){
		while(bestelling != 'stop'){
		var bestelling=prompt('Welke bestelling wilt u toevoegen? [fris, bier, wijn, snack]')

		switch(bestelling){
			case 'fris':
				var fris=prompt('hoeveel fris wil je?')
				aantalfris=parseInt(aantalfris) + parseInt(fris)
			break;
			case 'bier':
				var bier=prompt('hoeveel bier wil je?')
				aantalbier=parseInt(aantalbier) + parseInt(bier)
			break;
			case 'wijn':
				var wijn=prompt('hoeveel wijn wil je?')
				aantalwijn=parseInt(aantalwijn) + parseInt(wijn)
			break;
			case 'stop':
				document.write('u heeft '+aantalfris+' fris besteld '+aantalfris*2+" euro<br>")
				document.write('u heeft '+aantalbier+' bier besteld '+aantalbier*3+" euro<br>")
				document.write('u heeft '+aantalwijn+' wijn besteld '+aantalwijn*3+" euro<br>")
				document.write('u heeft '+aantalbitterbal+' bitterballen besteld '+aantalbitterbal*1+" euro<br>")
				document.write('totaal:'+parseInt(aantalfris*2+aantalbier*3+aantalwijn*3+aantalbitterbal*1)+" euro")
				var prijzen=document.write()
				prijzenhtml.innerHTML=prijzen
			break;
			case 'snack':
				var bitterballen=prompt('hoeveel bitterballenwilt u bestellen?(keuze uit 8 en 16)')
				if(bitterballen == 8){
					var b8 = prompt('hoeveel bakjes van 8 bitterballen wilt u?')
					for(var k =1; k <= b8 ; k++){aantalbitterbal=aantalbitterbal+8}
				}else if(bitterballen == 16){
					var b16 = prompt('hoeveel bakjes van 16 bitterballen wilt u?')
					for(var k =1; k <= b16 ; k++){aantalbitterbal=aantalbitterbal+16}
				}else{
					alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.')
				}
			break;
			default:
					alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.')
		}
	}
}

	
