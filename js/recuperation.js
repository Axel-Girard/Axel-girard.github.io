content.onload = populaire();

function populaire(){
	var yourUrl = "https://www.reddit.com/r/pics/.json?limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}

function nouveau(){
	var yourUrl = "https://www.reddit.com/r/pics/new/.json?limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}

function progression(){
	var yourUrl = "https://www.reddit.com/r/pics/rising/.json?limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}

function controverse(){
	var yourUrl = "https://www.reddit.com/r/pics/controversial/.json?limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}

function miseEnForme(data){
	obj = JSON.parse(data);
	document.getElementById("api").innerHTML = "";
	for (cptImage = 0; cptImage < 50 ; cptImage++) {
		if(obj.data.children[cptImage] !== undefined){
			if(obj.data.children[cptImage].data.preview !== undefined){
				document.getElementById("api").innerHTML +=
	      "<td> " +
	        "<a href=\"" + obj.data.children[cptImage].data.url + "\">" +
	          "<div class=\"crop\"> " +
							"<p class=\"legende\">" + obj.data.children[cptImage].data.title + "</p>" +
	            "<img src=\"" + obj.data.children[cptImage].data.preview.images[0].source.url + "\" alt=\"" +
								obj.data.children[cptImage].data.title + "\" " + " class=\"image\" \">" +
	          "</div>" +
	        "</a>" +
	      "</td>";
			}
		}
	}
	if(document.getElementById("api").innerHTML === ""){
		document.getElementById("api").innerHTML="<p>Il n'y a rien n'a afficher</p>"
	}
}

/*
  <td>
    <a href=" " >
      <div class="crop">
				<p class="legende">t</sp>
        <img src="images/rage__by_dunklayth.png" alt="jolie dessin de Dunklayth" />
      </div>
    </div>
    </a>
  </td>
*/

function recherche(recherche){
	/*var yourUrl = "https://www.reddit.com/r/pics/search.json?q=chocolat " +
						"&restrict_sr=on&sort=relevance&t=all&limit=50";*/
	var yourUrl = "https://www.reddit.com/r/pics/search.json?q="+ recherche +
						"&restrict_sr=on&sort=relevance&t=all&limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}
