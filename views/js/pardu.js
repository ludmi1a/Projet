var animals = [["chien", "noir", "paris"],["chat", "marron", "lille"]];

for(var i=0; i<animals.length; i++){
	document.querySelector('.annonce').innerHTML=document.querySelector('.annonce').innerHTML+"<div class=block id="+animals[i][0]+"><ol><li>Race:"+animals[i][0]+"</li><li>Couleur:"+animals[i][1]+"</li><li>Ville:"+animals[i][2]+"</li></ol></div>";
}
