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




var allowChange = false;
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
	allowChange = true;
	console.log(section + " " + JSON.stringify($left));
	window.addEventListener('wheel', function(event){
		if(event.deltaY < 0){
			if (!allowChange) {
		        return;
		    } else {
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
		}
		else {
			console.log("wheeled down");
			if (!allowChange) {
	        	return;
	        } else {
				direction = "down";
          	
          		if (section < 9) {
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
    } else if (section == 5 && direction == "down") {
		fourthToFifth();
	} else if (section == 4 && direction == "up") {
		fifthToFourth();
	} else if (section == 6 && direction == "down") {
		fifthToSixt();
	} else if (section == 5 && direction == "up") {
		sixtToFifth();
	} else if (section == 7 && direction == "down") {
		sixtToSeventh();
	} else if (section == 6 && direction == "up") {
		seventhToSixt();
	} else if (section == 8 && direction == "down") {
		seventhToEigth();
	} else if (section == 7 && direction == "up") {
		eigthToSeventh();
	} else if (section == 9 && direction == "down") {
		eigthToNinth();
	} else if (section == 8 && direction == "up") {
		ninthToEigth();
	}
};

function firstToSecond() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-1 ausblenden
	  $('#section-1').removeClass('animated fadeInDown');
	  $('#section-map').removeClass('animated fadeOutDown');
	  $('#section-1').addClass('animated fadeOutUp');

	  //section-map einblenden
	  $svgMap.addClass('map-svg-second-slide');
	  //$svgMap.setAttribute("viewBox", "400 50 400 550");
	  $('#section-map').show();
	  $('#section-map').addClass('animated fadeInUp');


	  allowChange = true;
	  console.log(allowChange);
	  $('body').removeClass('disable-click');
  }, 1500);
};

function secondToFirst() {
	console.log(section);

	console.log(allowChange);
	setTimeout(function(){

	  //section-map ausblenden
	  $('#section-map').removeClass();
	  $svgMap.removeClass();
	  cleanupCircles();
	  $('#section-map').addClass('animated fadeOutDown');

	  //section-1 einblenden
	  $('#section-1').removeClass();
	  $('#section-1').addClass('animated fadeInDown');
	  
	  allowChange = true;
	  console.log(allowChange);
	  $('body').removeClass('disable-click');
  }, 1500);
};

function secondToThird() {
	console.log(section);

	console.log(allowChange);
	setTimeout(function(){

		//section-map ausblenden
		$('#section-map').removeClass();
		$('#section-map').addClass('animated fadeOutUp');

		$svgMap.removeClass();
		$svgMap.addClass('animated zoomOut');
		cleanupCircles();

		//section-industrie40 einblenden
		$('#section-industrie40').show();
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 1500);
}


function thirdToSecond() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-industrie40 ausblenden
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeOutDown');

		//section-map einblenden
		$('#section-map').removeClass();
		$('#section-map').addClass('animated fadeInDown');
		$('#section-map').show();
		$svgMap.addClass('map-svg-second-slide');
		$svgMap.removeClass('animated zoomOut');
		$svgMap.addClass('animated zoomIn');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 1500);
}

function thirdToFourth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-industrie40 ausblenden
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeOutUp');

		//section-compare einblenden
		$('#section-iot').show();
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);
}

function fourthToThird() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-compare ausblenden
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeOutDown');

		//section-industrie40 einblenden
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);

}

function fourthToFifth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-iot ausblenden
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeOutUp');

		//section-smartServices einblenden
		$('#section-smartServices').show();
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);
}

function fifthToFourth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-smartServices ausblenden
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeOutDown');

		//section-iot einblenden
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);

}

function fifthToSixt() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//smartServices ausblenden
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeOutUp');

		//section-bigData einblenden
		$('#section-bigData').show();
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);
}

function sixtToFifth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-smartServices ausblenden
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeOutDown');

		//section-iot einblenden
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);

}

function sixtToSeventh() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-bigData ausblenden
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeOutUp');

		//section-robotikUndSensorik einblenden
		$('#section-robotikUndSensorik').show();
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);
}

function seventhToSixt() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-robotikUndSensorik ausblenden
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeOutDown');

		//section-bigData einblenden
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);

}

function seventhToEigth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-robotikUndSensorik ausblenden
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeOutUp');

		//section-ki einblenden
		$('#section-ki').show();
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);
}

function eigthToSeventh() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-robotikUndSensorik ausblenden
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeOutDown');

		//section-bigData einblenden
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 1500);

}

function eigthToNinth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

	//section-smartServices ausblenden
	$('#section-ki').removeClass();
	$('#section-ki').addClass('animated fadeOutUp');

	//section-compare einblenden
		$('#section-compare').show();
		$('#section-compare').removeClass();
		$('#section-compare').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 1500);
}

function ninthToEigth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

	//section-compare ausblenden
		$('#section-compare').removeClass();
		$('#section-compare').addClass('animated fadeOutDown');

	//section-iot einblenden
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 1500);

}


function showSection2() {
	if (section == 2) {
		return;
	} else {
		
		if (section < 2) {
			firstToSecond();
		} else {
			thirdToSecond();
		}
		section = 2;
		renderNavigationUI(section);
	}
}




$(window).on('load', function() {

    disableScrollAndClick();
    allowChange = true;
    console.log(allowChange);
    $('body').removeClass('disable-click');
});

function disableScrollAndClick() {
  allowChange = false;
  console.log('allow change:', allowChange);
  $('body').addClass('disable-click');
};

<!-- bar chart -->

function setBarWidth(dataElement, barElement, cssProperty, barPercent) {
	var listData = [];

	$(dataElement).each(function() {
		listData.push($(this).html().slice(0,-1));
		console.log("listData:" + listData);
	});
	var listMax = "100";
	console.log("listMax:" + listMax);
	$(barElement).each(function(index) {
		$(this).css(cssProperty, (listData[index] / listMax) * barPercent + "%");
	});
}
setBarWidth(".style-1 span", ".style-1 em", "width", 100);



$('#mapAction li').click(function(e) {
    $(this).addClass('active').siblings().removeClass('active');
});