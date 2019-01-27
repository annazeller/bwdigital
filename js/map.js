var currentCircle;
var currentKategorie;
var currentFutureCircle;
var currentTooltip;

//colors
  var bigData = ["#ffdb5b", "#ffdb5b","rgba(255, 255, 255, 0.55)","rgba(255, 255, 255, 0.55)"];
  var smartServices = ["#56e39f", "#56e39f", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];
  var industrie40 = ["#e9242f", "#e9242f", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];
  var iot = ["#00c7ff", "#00c7ff", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];
  var ki = ["#a42cd6", "#a42cd6", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];
  var robotikUndSensorik = ["#fe7f2d", "#fe7f2d", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];

var activeColoring;

async function color(now, future, kategorie, tooltip)
{
  console.log("coloring");
  var circles = $('.map-circle');
  var circleCount = circles.length;
  var nutzenWir = Math.round(circleCount * now);
  var planenWir = Math.round(circleCount * future);

  if(activeColoring){
    return ;
  }

  activateColoring();

  //Cleanup
  cleanupCircles();

  //Nutzen wir
  if($('#now').hasClass('active')){
    for (var i = circleCount - 1; i >= circleCount - nutzenWir; --i) {
      circles[i].style.fill=eval(kategorie)[0];
      circles[i].setAttribute("aria-label", Math.floor(now*100) + "% der Unternehmen nutzen " + tooltip + " bereits");
      circles[i].classList.add('enabled');
      await Sleep(1);
    }

    currentCircle = circleCount - nutzenWir +1;
  }

  //Future if no item was selected first
  if($('#future').hasClass('active')){
    for (var i = circleCount - 1; i >= circleCount - planenWir; --i) {
      circles[i].style.fill=eval(kategorie)[0];
      circles[i].setAttribute("aria-label", Math.floor(future*100) + "% der Unternehmen werden " + tooltip + " zukünftig einsetzen");
      circles[i].classList.add('enabled');
      await Sleep(1);
    }
    currentFutureCircle = circleCount - planenWir;
    currentCircle = circleCount - nutzenWir +1;

  }

  currentKategorie = kategorie;
  currentTooltip = tooltip;
  deActivateColoring();
}

async function colorFuture(){
  var circles = $('.map-circle');
  var circleCount = circles.length;
  console.log("colorfuture");

  if(activeColoring){
    return ;
  }

  activateColoring();

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
      circles[i].setAttribute("aria-label", Math.floor((future/circleCount)*100) + "% der Unternehmen werden " + currentTooltip + " zukünftig einsetzen");
      circles[i].classList.add('enabled');
      await Sleep(1);
    }
    currentFutureCircle = circleCount - future;
  }

  deActivateColoring();
}

async function romveColorFuture(){
  var circles = $('.map-circle');
  var circleCount = circles.length;
  if(activeColoring){
    return ;
  }

  activateColoring();

  if(currentFutureCircle !== null && currentFutureCircle !== undefined)
  {
    console.log("removeFuture" + currentFutureCircle);
    console.log(currentCircle);
    console.log("currentFutureCircle");

    for (var i = currentFutureCircle; i <= currentCircle -2; i++) {
      console.log("iterate");
      circles[i].classList.remove('enabled');
      circles[i].style.fill="rgba(255, 255, 255, 0.55)";
      circles[i].removeAttribute("aria-label");
      await Sleep(1);
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
      await Sleep(1);
    }

  }

  deActivateColoring();

}

function cleanupCircles(){
  var disableCircleHover = $('.enabled');
  for (var i = 0; i < disableCircleHover.length; i++) {
    disableCircleHover[i].classList.remove('enabled');
    disableCircleHover[i].style.fill="rgba(255, 255, 255, 0.55)";
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
    left:  e.pageX -312,
    top:   e.pageY - 371
  });
});

document.getElementById('switchy').addEventListener('click', function() {
  if(activeColoring){
    console.log("do nothing -coloring in progress");

    if ( document.getElementById('switchy').checked ) {
      document.getElementById('switchy').checked =false;
    }
    else {
      document.getElementById('switchy').checked =true;
    }
  }
  else{
    if ( document.getElementById('switchy').checked ) {
      console.log("Future selected");
      $(".description").css("width", "423px");

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

      setBarWidth(".style-1 span.progress-data", ".style-1 span.progress-meter", "width");
    } else {
      console.log("Now selected");

      $(".description").css("width", "300px");

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

      setBarWidth(".style-1 span.progress-data", ".style-1 span.progress-meter", "width");
    }
  }

});


function activateColoring(){
  activeColoring = true;
  $("#mapAction li").css("cursor", "default");

}

function deActivateColoring(){
  activeColoring = false;
  $("#mapAction li").css("cursor", "pointer");

}
