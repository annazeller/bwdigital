async function color(percentage, text)
{
  var circles = $('.map-circle');
  var circleCount = circles.length;
  var circlesNeedToChangeColor = Math.round(circleCount * percentage);

  var disableCircleHover = $('.enabled');
  for (var i = 0; i < disableCircleHover.length; i++) {
    disableCircleHover[i].classList.remove('enabled');
    disableCircleHover[i].removeAttribute("aria-label");
  }

  for (var i = 0; i < circleCount; i++) {
    circles[i].style.fill="#818181";
    //await Sleep(0);
  }

  for (var i = circleCount - 1; i >= circleCount - circlesNeedToChangeColor; --i) {
    circles[i].style.fill='#b33939';
    circles[i].setAttribute("aria-label", text )
    circles[i].classList.add('enabled');
    //await Sleep(0);
  }
}
function Sleep(milliseconds) {
 return new Promise(resolve => setTimeout(resolve, milliseconds));
}

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
