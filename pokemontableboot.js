var blastoise = document.querySelector("#blastoise");
blastoise.addEventListener("mouseover", function(){
	document.body.classList.toggle("blastoise");
});

blastoise.addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});