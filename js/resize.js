function smallPreview(){
	var image = document.getElementsByClassName('crop');
	for(var i = 0; i < image.length; i++) {
		image[i].style.width = "100px";
		image[i].style.height = "100px";
	}

	/*var image = document.getElementsByClassName('image');
	for(var i = 0; i < image.length; i++) {
		image[i].style.maxWidth = "300px";
		image[i].style.MaxHeight = "300px";
	}*/
}

function normalPreview(){
	var image = document.getElementsByClassName('crop');
	for(var i = 0; i < image.length; i++) {
		image[i].style.width = "300px";
		image[i].style.height = "300px";
	}

	/*var image = document.getElementsByClassName('image');
	for(var i = 0; i < image.length; i++) {
		image[i].style.maxWidth = "600px";
		image[i].style.MaxHeight = "600px";
	}*/
}

function largPreview(){
	var image = document.getElementsByClassName('crop');
	for(var i = 0; i < image.length; i++) {
		image[i].style.width = "600px";
		image[i].style.height = "600px";
	}

	/*var image = document.getElementsByClassName('image');
	for(var i = 0; i < image.length; i++) {
		image[i].style.maxWidth = "1200px";
		image[i].style.MaxHeight = "1200px";
	}*/
}
