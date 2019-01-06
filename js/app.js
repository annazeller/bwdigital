$(document).foundation();
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
	    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    	menu: '#navigation',
    	navigation: true
	});
});
