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
  var bigData = ["#FF0000", "#FF2E2E","#FF7474","#FFB9B9"];
  var smartServices = ["#017201", "#469846", "#8CBF8C", "#D1E5D1"];
  var industrie40 = ["#E14F00", "#E97F46", "#F1AF8B", "#FADFD1"];
  var iot = ["#C500B3", "#DA5DCF", "#EAA2E3", "#F4D1F1"];
  var ki = ["#0033FF", "#466BFF", "#8BA2FF", "#B9C7FF"];
  var robotikUndSensorik = ["#8400E1", "#A646E9", "#C78BF1", "#DDB9F7"];

//Cleanup
  var disableCircleHover = $('.enabled');
  for (var i = 0; i < disableCircleHover.length; i++) {
    disableCircleHover[i].classList.remove('enabled');
    disableCircleHover[i].style.fill="#ffffff";
    disableCircleHover[i].removeAttribute("aria-label");
  }

//Nutzen wir
for (var i = circleCount - 1; i >= circleCount - nutzenWir; --i) {
  circles[i].style.fill=eval(kategorie)[0];
  circles[i].setAttribute("aria-label", Math.floor(nutzen*100) + "% der Unternehmen nutzen es bereits");
  circles[i].classList.add('enabled');
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
