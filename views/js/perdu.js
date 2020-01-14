var animals = [   ["chien", "noir", "paris","femelle","images/chien1.jpg"],
		  ["chat", "marron", "lille","male","images/chat1.jpg"],
		  ["chien","beige","lyon","male","images/chat2.jpeg"],
		  ["autre","blanc","paris","male","images/lapin.jpeg"]
		];
var i=0;
var currentPage=null;

function show(type){
if (type == 'all'){
	if(currentPage!="all"){
		var code = "";
		for(i=0;i<animals.length;i++){
			 code=code+"<div class=block id="+ animals[i][0]+"><img src="+animals[i][4]+" height=280px width=300px></img><ul><li>Race : "+animals[i][0]
												+"</li><li>Couleur : "+animals[i][1]
												+"</li><li>Ville : "+animals[i][2]
												+"</li><li>Sexe:"+animals[i][3]+"</ul></div>";
		}
		var elem = document.getElementById("animals");
			elem.innerHTML = code;
	}
	currentPage="all";
	
}

if(type=='Chien'){
	if(currentPage!="dogs"){
		var tab=[];
		var j=0;
		for(var i=0; i<animals.length; i++){
			if (animals[i][0]=="chien"){
				tab[j]=animals[i];
				j++;
			}
		}
		var chiens = document.getElementById("animals");
		var code = "";
		for(i=0;i<tab.length;i++){
			code=code+"<div class=block id="+tab[i][0]+"><img src="+tab[i][4]+" height=280px width=300px></img><ul><li>Race : "+tab[i][0]
											+"</li><li>Couleur : "+tab[i][1]
											+"</li><li>Ville : "+tab[i][2]
											+"</li><li>Sexe:"+tab[i][3]+"</ul></div>";
		}
		chiens.innerHTML = code;
	}
	currentPage="dogs";
}

if(type=='Autre'){
	if(currentPage!="cats"){
		var tab=[];
		var j=0;
		for(var i=0; i<animals.length; i++){
			if (animals[i][0]=="chat"){
				tab[j]=animals[i];
				j++;
			}
		}
		var chats = document.getElementById("animals");
		var code = "";
		for(i=0;i<tab.length;i++){
			code=code+"<div class=block id="+tab[i][0]+"><img src="+tab[i][4]+" height=280px width=300px></img><ul><li>Race : "+tab[i][0]
											+"</li><li>Couleur : "+tab[i][1]
											+"</li><li>Ville : "+tab[i][2]
											+"</li><li>Sexe:"+tab[i][3]+"</ul></div>";
		}
		
		chats.innerHTML = code;
	}
	currentPage="cats";
}

function showOthers(){
	if(currentPage!="others"){
		var tab=[];
		var j=0;
		for(var i=0; i<animals.length; i++){
			if (animals[i][0]=="autre"){
				tab[j]=animals[i];
				j++;
			}
		}
		var chats = document.getElementById("animals");
		var code = "";
		for(i=0;i<tab.length;i++){
			code=code+"<div class=block id="+tab[i][0]+"><img src="+tab[i][4]+" height=280px width=300px></img><ul><li>Race : "+tab[i][0]
											+"</li><li>Couleur : "+tab[i][1]
											+"</li><li>Ville : "+tab[i][2]
											+"</li><li>Sexe:"+tab[i][3]+"</ul></div>";
		}
		
		chats.innerHTML = code;
	}
	currentPage="others";
}

/*
function show(String type){
	if(type=="all"){
		document.getElementsById("animals").innerHTML = "{% for a in animals %} <div class=block id='{{a.race}}'><img src='/uploads/{{a._id}}' height=280px width=300px></img><ul><li>Race : {{a.race}}</li><li>Couleur : {{a.color}}</li><li>Ville : {{a.city}}</li><li>Sexe:{{a.sexe}}</ul></div> {% endblock %}"
	} else {
		document.getElementsById("animals").innerHTML = "{% for a in animals %} {% if a.race==type %}  <div class=block id='{{a.race}}'><img src='/uploads/{{a._id}}' height=280px width=300px></img><ul><li>Race : {{a.race}}</li><li>Couleur : {{a.color}}</li><li>Ville : {{a.city}}</li><li>Sexe:{{a.sexe}}</ul></div> {% endfor %}{% endblock %}"
	}
}
*/
