var skillCircles = document.querySelectorAll('.skill');

skillCircles.forEach(function(element){
	
	var svg = element.children[0];

	var percentage = parseInt(svg.children[2].textContent);
	 var radius = svg.children[0].getAttribute("r");
	 var dasharray = 3.14*radius*2;
	 var dash_offset = ((100-percentage)/100)*dasharray;
	 svg.children[1].setAttribute('stroke-dasharray',dasharray.toFixed(2));
	 svg.children[1].setAttribute('stroke-dashoffset', dash_offset.toFixed(2));
	
})