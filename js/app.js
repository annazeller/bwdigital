$(document).foundation();
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
		sectionsColor: ['#111628', '#111628', '#111628', '#111628', '#111628'],
	    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    	menu: '#navigation',
    	navigation: true
	});
});

function openInfo() {
	document.getElementById("studyinfo").style.width = "100%";
}

function closeInfo() {
	document.getElementById("studyinfo").style.width = "0%";
}

function openImpressum() {
	document.getElementById("impressum").style.width = "100%";
}

function closeImpressum() {
	document.getElementById("impressum").style.width = "0%";
}