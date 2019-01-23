var currentCircle;
var currentKategorie;
var currentFutureCircle;

//colors
  var bigData = ["#ffdb5b", "rgba(236, 199, 72, 0.4)","#FFFFFF","#FFFFFF"];
  var smartServices = ["#56e39f", "rgba(36, 233, 188, 0.4)", "#FFFFFF", "#FFFFFF"];
  var industrie40 = ["#e9242f", "rgba(233, 36, 47, 0.4)", "#FFFFFF", "#FFFFFF"];
  var iot = ["#00c7ff", "rgba(36, 157, 233, 0.4)", "#FFFFFF", "#FFFFFF"];
  var ki = ["#a42cd6", "rgba(164, 44, 214, 0.4)", "#FFFFFF", "#FFFFFF"];
  var robotikUndSensorik = ["#fe7f2d", "rgba(234, 107, 50, 0.4)", "#FFFFFF", "#FFFFFF"];

async function color(now, future, kategorie)
{
  var circles = $('.map-circle');
  var circleCount = circles.length;
  var nutzenWir = Math.round(circleCount * now);
  var planenWir = Math.round(circleCount * future);

//Cleanup
  cleanupCircles();

//Nutzen wir
if($('#now').hasClass('active')){
  for (var i = circleCount - 1; i >= circleCount - nutzenWir; --i) {
    circles[i].style.fill=eval(kategorie)[0];
    circles[i].setAttribute("aria-label", Math.floor(now*100) + "% der Unternehmen nutzen es bereits");
    circles[i].classList.add('enabled');
    await Sleep(5);
  }

  currentCircle = circleCount - nutzenWir +1;
}

//Future if no item was selected first
if($('#future').hasClass('active')){
  for (var i = circleCount - 1; i >= circleCount - planenWir; --i) {
    circles[i].style.fill=eval(kategorie)[0];
    circles[i].setAttribute("aria-label", Math.floor(future*100) + "% der Unternehmen nutzen es bereits");
    circles[i].classList.add('enabled');
    await Sleep(5);
  }

  currentCircle = circleCount - planenWir +1;
}

currentKategorie = kategorie;
}

async function colorFuture(){
  var circles = $('.map-circle');
  var circleCount = circles.length;
  console.log("colorfuture");

  if(currentKategorie != null)
  {
    console.log("future");
    var future;
    switch(currentKategorie) {
      case "industrie40":
        future = Math.round(circleCount * 0.21);
      break;
      case "iot":
        future=Math.round(circleCount * 0.59);
      break;
      case "smartServices":
        future=Math.round(circleCount * 0.46);
      break;
      case "bigData":
        future= Math.round(circleCount * 0.24);
      break;
      case "robotikUndSensorik":
        future= Math.round(circleCount * 0.11);
      break;
      case "ki":
        future= Math.round(circleCount * 0.08);
      break;
    }

    for (var i = currentCircle -2; i >= circleCount - future; --i) {
      circles[i].style.fill=eval(currentKategorie)[0];
      circles[i].setAttribute("aria-label", Math.floor(future*100) + "% der Unternehmen werden es zukünftig einsetzen");
      circles[i].classList.add('enabled');
      await Sleep(5);
    }
    console.log(circleCount -future);
    currentFutureCircle = circleCount - future;
  }
}

async function romveColorFuture(){
  var circles = $('.map-circle');
  var circleCount = circles.length;
  console.log("removeFuture" + currentFutureCircle);
  if(currentFutureCircle !== null && currentFutureCircle !== undefined)
  {
    console.log("currentFutureCircle");

    for (var i = currentFutureCircle; i <= currentCircle -2; i++) {
      circles[i].classList.remove('enabled');
      circles[i].style.fill="#ffffff";
      circles[i].removeAttribute("aria-label");
      await Sleep(5);
    }
  }
  else
  {
    console.log("inside");
    switch(currentKategorie) {
      case "industrie40":
        future = Math.round(circleCount * 0.09);
      break;
      case "iot":
        future=Math.round(circleCount * 0.48);
      break;
      case "smartServices":
        future=Math.round(circleCount * 0.31);
      break;
      case "bigData":
        future= Math.round(circleCount * 0.18);
      break;
      case "robotikUndSensorik":
        future= Math.round(circleCount * 0.06);
      break;
      case "ki":
        future= Math.round(circleCount * 0.04);
      break;
    }
    console.log(future);

    for (var i = currentCircle -2; i >= circleCount - future; --i) {
      circles[i].classList.remove('enabled');
      circles[i].style.fill="green";
      circles[i].removeAttribute("aria-label");
      await Sleep(5);
    }

  }

}

function cleanupCircles(){
  var disableCircleHover = $('.enabled');
  for (var i = 0; i < disableCircleHover.length; i++) {
    disableCircleHover[i].classList.remove('enabled');
    disableCircleHover[i].style.fill="#ffffff";
    disableCircleHover[i].removeAttribute("aria-label");
  }
}

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

$('ul li a').click(function() {
     $('ul li a.highlight').removeClass('highlight');
     $(this).addClass("highlight");
});

$( "#mapSVG" ).on( "mouseenter", ".enabled", function( event ) {
  $('.description').addClass('active');
  $('.description').html($(this).attr('aria-label'));
});
$( "#mapSVG" ).on( "mouseleave", ".enabled", function( event ) {
  $('.description').removeClass('active');
});

$(document).on('mousemove', function(e){
$('.description').css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
});

document.getElementById('switchy').addEventListener('click', function() {
	if ( document.getElementById('switchy').checked ) {
		console.log("Future selected");

    if ($('#now').hasClass('active')){
      $('#now').removeClass('active');
    }
    $('#future').addClass('active');
    colorFuture();
    document.getElementById("kiSpan").innerHTML="8%";
    document.getElementById("RUSSpan").innerHTML="11%";
    document.getElementById("BDSpan").innerHTML="24%";
    document.getElementById("SSSpan").innerHTML="46%";
    document.getElementById("iotSpan").innerHTML="59%";
    document.getElementById("indSpan").innerHTML="21%";

    setBarWidth(".style-1 span", ".style-1 em", "width", 100);
	} else {
    console.log("Now selected");

    if ($('#future').hasClass('active')){
      $('#future').removeClass('active');
    }
    $('#now').addClass('active');
    romveColorFuture();
    document.getElementById("kiSpan").innerHTML="4%";
    document.getElementById("RUSSpan").innerHTML="6%";
    document.getElementById("BDSpan").innerHTML="18%";
    document.getElementById("SSSpan").innerHTML="31%";
    document.getElementById("iotSpan").innerHTML="48%";
    document.getElementById("indSpan").innerHTML="9%";

    setBarWidth(".style-1 span", ".style-1 em", "width", 100);
	}
});
