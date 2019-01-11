$(document).foundation();
/*$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
		sectionsColor: ['#111628', '#111628', '#111628', '#111628', '#111628'],
	    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    	menu: '#navigation',
    	navigation: true
	});
});*/

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

function loadNumbers() {
	$('.number').each(function () {

		var $this = $(this),
			countTo = $this.attr('data-count');

		$this.html(0);

		$({countNum: $this.text()}).animate({
				countNum: countTo
			},

			{
				easing: 'linear',
				duration: 1500,
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					//alert('finished');
				}

			});


	});
}


var section = 1;
var direction = "";
var $left = $('.wrap');
var $svgMap = $('#mapSVG');
var animationEnd = (function(el) {
        var animations = {
            "animation": "animationend",
            "OAnimation": "oAnimationEnd",
            "MozAnimation": "mozAnimationEnd",
           "WebkitAnimation": "webkitAnimationEnd"
        }
        for(var t in animations) {
            if(el.style[t] !== undefined) {
                return animations[t];
            }
        }
})(document.createElement("fakeelement"));

$(window).on('load', function() {
	console.log(section + " " + JSON.stringify($left));
	window.addEventListener('wheel', function(event){
		if(event.deltaY < 0){
			direction = "up";
          	if (section > 1) {
            	section--;
            	renderSectionUI(section, direction);
            	renderNavigationUI(section);
            	console.log('scroll up');
            	allowChange = false;
            	console.log(allowChange);
            	$('body').addClass('disable-click');
            	console.log(section);
          }
		}
		else {
			console.log("wheeled down");
			direction = "down";
          	
          	if (section < 4) {
            	section++;
            	renderSectionUI(section, direction);
            	renderNavigationUI(section);
            	console.log('scroll down');
            	console.log(section);
            	allowChange = false;
            	console.log(allowChange);
            	$('body').addClass('disable-click');
          	}
		}
	});
});

function renderNavigationUI(section) {
  var $navItem = $('#navigation').find('[li-data="' + section + '"]');
  $navItem.addClass('active');
  $navItem.siblings().removeClass('active');
};

function renderSectionUI(section, direction) {
    console.log('section in render function:', section);
    if (section == 1 && direction == "up") {
      secondToFirst();
    } else if (section == 2 && direction == "down") {
      firstToSecond();
    } else if (section == 2 && direction == "up") {
      thirdToSecond();
    } else if (section == 3 && direction == "down") {
      secondToThird();
    } else if (section == 4 && direction == "down") {
      thirdToFourth();
    } else if (section == 3 && direction == "up") {
      fourthToThird();
    }
};

function firstToSecond() {
  console.log("first to second");
  $('#section-1').removeClass('animated fadeInDown');
  $('#section-2').removeClass('animated fadeOutDown');

  $('#section-1').addClass('animated fadeOutUp');
  $svgMap.addClass('map-svg-second-slide');
  //$svgMap.setAttribute("viewBox", "400 50 400 550");
  $('#section-2').show();
  $('#section-2').addClass('animated fadeInUp');
};
function secondToFirst() {
  console.log("second to first");
  $('#section-1').removeClass('animated fadeOutUp');
  $('#section-2').removeClass('animated fadeInUp');
  $svgMap.removeClass('map-svg-second-slide');
  cleanupCircles();
  $('#section-1').addClass('animated fadeInDown');
  $('#section-2').addClass('animated fadeOutDown');

};