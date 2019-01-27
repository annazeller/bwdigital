var currentCircle;
var currentKategorie;
var currentFutureCircle;
var currentTooltip;
var currentLine;

//colors
  var bigData = ["#ffdb5b", "#ffdb5b","rgba(255, 255, 255, 0.55)","rgba(255, 255, 255, 0.55)"];
  var smartServices = ["#56e39f", "#56e39f", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];
  var industrie40 = ["#e9242f", "#e9242f", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];
  var iot = ["#00c7ff", "#00c7ff", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];
  var ki = ["#a42cd6", "#a42cd6", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];
  var robotikUndSensorik = ["#fe7f2d", "#fe7f2d", "rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 0.55)"];

var activeColoring = false;

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


  var lineElements = $('.gGrouping');

  if($('#now').hasClass('active')){
  for (var i = lineElements.length - 1; i >= 0; i--){
    var compare = lineElements[i].id.substr(1) < nutzenWir;
    if(compare)
    {
      var parentID = lineElements[i].id;
      var children = $("#"+parentID).children().children();

      $(children).each(function() {
        $(this).css("fill",eval(kategorie)[0]);
        $(this).attr('aria-label', Math.floor(now*100) + "% der Unternehmen nutzen " + tooltip + " bereits");
        $(this).addClass('enabled');
      });
      await Sleep(45);
    }
    else{
      var parentID = lineElements[i].id;

      var children = $("#"+parentID).children().children();
      var restCircles = lineElements[i].id.substr(1) - nutzenWir;
      var restChildren = children.slice(children.length - restCircles,children.length);
      console.log(parentID + restCircles);
      $(restChildren).each(function() {
         $(this).css("fill",eval(kategorie)[0]);
         $(this).attr('aria-label', Math.floor(now*100) + "% der Unternehmen nutzen " + tooltip + " bereits");
         $(this).addClass('enabled');
       });

       currentLine = i;
       currentCircle = lineElements[i].id.substr(1) - restCircles;
       console.log("currentCircle:" +currentCircle);

      break;
    }
  }
  }

  if($('#future').hasClass('active')){

    for (var i = lineElements.length - 1; i >= 0; i--){
      var compare = lineElements[i].id.substr(1) < planenWir;
      if(compare)
      {
        var parentID = lineElements[i].id;
        var children = $("#"+parentID).children().children();

        $(children).each(function() {
          $(this).css("fill",eval(kategorie)[0]);
          $(this).attr('aria-label', future*100 + "% der Unternehmen werden " + tooltip + " zukünftig einsetzen");
          $(this).addClass('enabled');
        });
        await Sleep(45);
      }
      else{
        var parentID = lineElements[i].id;
        var children = $("#"+parentID).children().children();
        var restCircles = lineElements[i].id.substr(1) - planenWir;
        var restChildren = children.slice(children.length - restCircles,children.length);

        $(restChildren).each(function() {
           $(this).css("fill",eval(kategorie)[0]);
           $(this).attr('aria-label', Math.floor(future*100) + "% der Unternehmen werden " + tooltip + " zukünftig einsetzen");
           $(this).addClass('enabled');
         });

         currentLine = i;
         currentCircle = null;
         currentFutureCircle = lineElements[i].id.substr(1) - restCircles;
         console.log(currentFutureCircle);
        break;
      }
    }
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
    var futureDesc;
    switch(currentKategorie) {
      case "industrie40":
        futureDesc = 0.21;
        future = Math.round(circleCount * 0.21);
      break;
      case "iot":
        futureDesc = 0.59;
        future=Math.round(circleCount * 0.59);
      break;
      case "smartServices":
        futureDesc = 0.46;
        future=Math.round(circleCount * 0.46);
      break;
      case "bigData":
        futureDesc= 0.24;
        future= Math.round(circleCount * 0.24);
      break;
      case "robotikUndSensorik":
        futureDesc = 0.11;
        future= Math.round(circleCount * 0.11);
      break;
      case "ki":
       futureDesc= 0.08;
        future= Math.round(circleCount * 0.08);
      break;
    }

    var lineElements = $('.gGrouping');

    for (var i = currentLine; i > 0; i--){
      var compare = lineElements[i].id.substr(1) < future;
      if(compare)
      {
        var parentID = lineElements[i].id;
        var children = $("#"+parentID).children().children();

        $(children).each(function() {
          $(this).css("fill",eval(currentKategorie)[0]);
          $(this).attr('aria-label', futureDesc*100 + "% der Unternehmen werden " + currentTooltip + " zukünftig einsetzen");
          $(this).addClass('enabled');
        });
        await Sleep(45);
      }
      else{
        var parentID = lineElements[i].id;
        var children = $("#"+parentID).children().children();
        var restCircles = lineElements[i].id.substr(1) - future;
        var restChildren = children.slice(0,restCircles);
        var restChildren = children.slice(children.length - restCircles,children.length);

        $(restChildren).each(function() {
          $(this).css("fill",eval(currentKategorie)[0]);
          $(this).attr('aria-label', futureDesc*100 + "% der Unternehmen werden " + currentTooltip + " zukünftig einsetzen");
          $(this).addClass('enabled');
         });

         currentLine = i;
         currentFutureCircle = lineElements[i].id.substr(1)- restChildren;

         $(".enabled").attr('aria-label' , futureDesc*100 + "% der Unternehmen werden " + currentTooltip + " zukünftig einsetzen");
        break;
      }
    }
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

  if(currentCircle !== null && currentCircle !== undefined)
  {
    var lineElements = $('.gGrouping');

    for (var i = currentLine; i < lineElements.length; i++){
      var compare = lineElements[i].id.substr(1) > currentCircle;
      console.log(compare);
      if(compare)
      {
        var parentID = lineElements[i].id;
        var children = $("#"+parentID).children().children();

        $(children).each(function() {
          $(this).css("fill","rgba(255, 255, 255, 0.55)");
          $(this).removeAttr('aria-label');
          $(this).removeClass('enabled');
        });
        await Sleep(45);
      }
      else{
        var parentID = lineElements[i-1].id;
        var children = $("#"+parentID).children().children();
        var restCircles = lineElements[i-1].id.substr(1) - currentCircle;
        console.log("CC"+currentCircle);
        console.log(restCircles);
        var restChildren = children.slice(children.length - restCircles,children.length);

        console.log(restChildren);

        $(restChildren).each(function() {
          $(this).css("fill",eval(currentKategorie)[0]);
          $(this).attr('aria-label', Math.floor(now*100) + "% der Unternehmen nutzen " + currentTooltip + " bereits");
          $(this).addClass('enabled');
         });

         currentLine = i-1;
         $(".enabled").attr('aria-label', Math.floor(now*100) + "% der Unternehmen nutzen " + currentTooltip + " bereits");

        break;
      }
    }
  }
  else
  {
    console.log("inside");
    var descNow;
    switch(currentKategorie) {
      case "industrie40":
        descNow = 0.09;
        now = Math.round(circleCount * 0.09);
      break;
      case "iot":
        descNow = 0.48;
        now=Math.round(circleCount * 0.48);
      break;
      case "smartServices":
        descNow = 0.31;
        now=Math.round(circleCount * 0.31);
      break;
      case "bigData":
        descNow =0.18;
        now= Math.round(circleCount * 0.18);
      break;
      case "robotikUndSensorik":
        descNow =0.06;
        now= Math.round(circleCount * 0.06);
      break;
      case "ki":
       descNow =0.04;
        now= Math.round(circleCount * 0.04);
      break;
    }

    var lineElements = $('.gGrouping');

    for (var i = currentLine; i < lineElements.length; i++){
      var compare = lineElements[i].id.substr(1) > now;
      if(compare)
      {
        var parentID = lineElements[i].id;
        var children = $("#"+parentID).children().children();

        $(children).each(function() {
          $(this).css("fill","rgba(255, 255, 255, 0.55");
          $(this).removeAttr('aria-label');
          $(this).removeClass('enabled');
        });
        await Sleep(45);
      }
      else{
        var parentID = lineElements[i-1].id;
        var children = $("#"+parentID).children().children();
        var restCircles = lineElements[i-1].id.substr(1) - now;
        var restChildren = children.slice(children.length - restCircles,children.length);

        $(restChildren).each(function() {
          $(this).css("fill",eval(currentKategorie)[0]);
          $(this).attr('aria-label', descNow*100 + "% der Unternehmen nutzen " + currentTooltip + " bereits");
          $(this).addClass('enabled');
         });

         currentLine = i-1;

         $(".enabled").attr('aria-label', descNow*100 + "% der Unternehmen nutzen " + currentTooltip + " bereits");
        break;
      }
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
  scrollingDisabled=true;
  $("#mapAction li").css("cursor", "default");

}

function deActivateColoring(){
  activeColoring = false;
  scrollingDisabled=false;
  $("#mapAction li").css("cursor", "pointer");

}
