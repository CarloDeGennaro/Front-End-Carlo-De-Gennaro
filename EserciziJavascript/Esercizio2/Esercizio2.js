
function quadrato(){
 var quadrati = new Array();
for(var i=1; i<=15; i++){
quadrati[i] =i*i;
	}
	return quadrati;
}

document.getElementById("quadrati").innerHTML = quadrato();
