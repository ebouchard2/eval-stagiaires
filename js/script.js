$(document).ready(function(){
	console.log("ready");
	var caseab = Number($("#ab").html());
	var caseac = Number($("#ac").html());
	var somme = caseab+caseac;
	
	var clickValue1 = null;
	var clickValue2 = null;
	
	$("td").click(function(){
		if (clickValue1 == null){
			clickValue1 = Number($(this).html());
		}
		else {
			if (clickValue2 == null) {
				clickValue2 = Number($(this).html());
			}
		}
	
		var somme = clickValue1+clickValue2;
	
		if (clickValue1 != null && clickValue2 != null){
			$("#result").html("resultat: "+somme);	
			clickValue1 = null;
			clickValue2 = null;
		}
	});	
	
});

