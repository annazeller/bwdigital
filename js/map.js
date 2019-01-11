async function color(nutzen, planen, nRelevant, nBefasst, kategorie)
{
  var circles = $('.map-circle');
  var circleCount = circles.length;
  var nutzenWir = Math.round(circleCount * nutzen);
  var planenWir = Math.round(circleCount * planen);
  var nichtRelevant = Math.round(circleCount * nRelevant);
  var nichtBefasst = Math.round(circleCount * nBefasst);
  var keineAngabe = circleCount -nutzenWir -planenWir -nichtRelevant -nichtBefasst;

//colors
  var bigData = ["#ffdb5b", "#FFFFFF","#FFFFFF","#FFFFFF"];
  var smartServices = ["#56e39f", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
  var industrie40 = ["#e9242f", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
  var iot = ["#00c7ff", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
  var ki = ["#a42cd6", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
  var robotikUndSensorik = ["#fe7f2d", "#FFFFFF", "#FFFFFF", "#FFFFFF"];

//Cleanup
  cleanupCircles();

//Nutzen wir
for (var i = circleCount - 1; i >= circleCount - nutzenWir; --i) {
  circles[i].style.fill=eval(kategorie)[0];
  circles[i].setAttribute("aria-label", Math.floor(nutzen*100) + "% der Unternehmen nutzen es bereits");
  circles[i].classList.add('enabled');
  await Sleep(5);
}

//Planen wir
for (var i = circleCount - nutzenWir -1; i >= circleCount - nutzenWir -planenWir; --i) {
  circles[i].style.fill=eval(kategorie)[1];
  circles[i].setAttribute("aria-label", Math.floor(planen*100) +"% der Unternehmen planen den Einsatz" );
  circles[i].classList.add('enabled');
}

//Nicht Relevant
for (var i = circleCount - nutzenWir - planenWir -1; i >= circleCount - nutzenWir -planenWir -nichtRelevant; --i) {
  circles[i].style.fill=eval(kategorie)[2];
  circles[i].setAttribute("aria-label", Math.floor(nRelevant*100) + "% der Unternehmen finden es nicht Relevant" );
  circles[i].classList.add('enabled');
}

//Nicht Befasst
for (var i = circleCount - nutzenWir - planenWir - nichtRelevant -1; i >= circleCount - nutzenWir -planenWir -nichtRelevant -nichtBefasst; --i) {
  circles[i].style.fill=eval(kategorie)[3];
  circles[i].setAttribute("aria-label",  Math.floor(nBefasst*100) + "% der Unternehmen haben sich noch nicht damit befasst" );
  circles[i].classList.add('enabled');
}

//Haben keine Angabe gemacht
var keineAngabePercentage = Math.floor((keineAngabe / circleCount) * 100);
for (var i = circleCount - nutzenWir - planenWir - nichtRelevant -nichtBefasst -1; i >= circleCount - nutzenWir -planenWir -nichtRelevant -nichtBefasst -keineAngabe; --i) {
  circles[i].setAttribute("aria-label", keineAngabePercentage + "% der Unternehmen haben keine Angabe gemacht" );
  circles[i].classList.add('enabled');
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
