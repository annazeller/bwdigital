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

var scrollingDisabled=false;
$(window).on('load', function() {
	allowChange = true;

	console.log(section + " " + JSON.stringify($left));

	window.addEventListener('wheel', function(event){
		if (scrollingDisabled){
			return;
		}

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

          		if (section < 10) {
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
		scrollingDisabled = true;
    setTimeout(function(){scrollingDisabled = false;}, 1500);
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
    } else if (section == 3 && direction == "up") {
      fourthToThird();
    } else if (section == 4 && direction == "down") {
      thirdToFourth();
    } else if (section == 4 && direction == "up") {
		fifthToFourth();
	} else if (section == 5 && direction == "down") {
		fourthToFifth();
	} else if (section == 5 && direction == "up") {
		sixtToFifth();
	} else if (section == 6 && direction == "down") {
		fifthToSixt();
	} else if (section == 6 && direction == "up") {
		seventhToSixt();
	} else if (section == 7 && direction == "down") {
		sixtToSeventh();
	} else if (section == 7 && direction == "up") {
		eigthToSeventh();
	} else if (section == 8 && direction == "down") {
		seventhToEigth();
	} else if (section == 8 && direction == "up") {
		ninthToEigth();
	} else if (section == 9 && direction == "down") {
		eigthToNinth();
	} else if (section == 9 && direction == "up") {
		tenthToNinth();
	} else if (section == 10 && direction == "down") {
		ninthToTenth();
	} 
};

function firstToSecond() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-1 ausblenden
	  $('#section-1').removeClass('animated fadeInDown');
	  $('#section-map').removeClass('animated fadeIn');
	  $('#section-map').removeClass('animated fadeOutDown');
	  $('#section-1').addClass('animated fadeOutUp');

	  //section-map einblenden
	  $svgMap.addClass('map-svg-second-slide');
	  //$svgMap.setAttribute("viewBox", "400 50 400 550");
	  $('#section-map').removeClass();
	  $('#section-map').show();
	  $('#section-map').addClass('animated fadeInUp');


	  allowChange = true;
	  console.log(allowChange);
	  $('body').removeClass('disable-click');
  }, 0);
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
	  $('#section-1').show();
	  $('#section-1').removeClass();
	  $('#section-1').addClass('animated fadeInDown');

	  allowChange = true;
	  console.log(allowChange);
	  $('body').removeClass('disable-click');
  }, 0);
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
		$('#section-circlecompare').show();
		$('#section-circlecompare').removeClass();
		$('#section-circlecompare').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 0);
}


function thirdToSecond() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-industrie40 ausblenden
		$('#section-circlecompare').removeClass();
		$('#section-circlecompare').addClass('animated fadeOutDown');

		//section-map einblenden
		$('#section-map').removeClass();
		$('#section-map').addClass('animated fadeInDown');
		$('#section-map').show();
		$svgMap.show().addClass('map-svg-second-slide');
		$svgMap.removeClass('animated zoomOut');
		$svgMap.addClass('animated zoomIn');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 0);
}

function thirdToFourth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-industrie40 ausblenden
		$('#section-circlecompare').removeClass();
		$('#section-circlecompare').addClass('animated fadeOutUp');

		//section-compare einblenden
		$('#section-industrie40').show();
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function fourthToThird() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-compare ausblenden
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeOutDown');

		//section-industrie40 einblenden
		$('#section-circlecompare').show();
		$('#section-circlecompare').removeClass();
		$('#section-circlecompare').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function fourthToFifth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-iot ausblenden
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeOutUp');

		//section-smartServices einblenden
		$('#section-iot').show();
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function fifthToFourth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-smartServices ausblenden
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeOutDown');

		//section-iot einblenden
		$('#section-industrie40').show();
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function fifthToSixt() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//smartServices ausblenden
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeOutUp');

		//section-bigData einblenden
		$('#section-smartServices').show();
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function sixtToFifth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-smartServices ausblenden
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeOutDown');

		//section-iot einblenden
		$('#section-iot').show();
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function sixtToSeventh() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-bigData ausblenden
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeOutUp');

		//section-robotikUndSensorik einblenden
		$('#section-bigData').show();
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function seventhToSixt() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-robotikUndSensorik ausblenden
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeOutDown');

		//section-bigData einblenden
		$('#section-smartServices').show();
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function seventhToEigth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-robotikUndSensorik ausblenden
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeOutUp');

		//section-ki einblenden
		$('#section-robotikUndSensorik').show();
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function eigthToSeventh() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		//section-robotikUndSensorik ausblenden
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeOutDown');

		//section-bigData einblenden
		$('#section-bigData').show();
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function eigthToNinth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

	//section-smartServices ausblenden
	$('#section-robotikUndSensorik').removeClass();
	$('#section-robotikUndSensorik').addClass('animated fadeOutUp');

	//section-compare einblenden
		$('#section-ki').show();
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeInUp');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 0);
}

function ninthToEigth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

	//section-compare ausblenden
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeOutDown');

	//section-iot einblenden
		$('#section-robotikUndSensorik').show();
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeInDown');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 0);

}

function ninthToTenth() {
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
	}, 0);
}

function tenthToNinth() {
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
	}, 0);

}

function resetUI(){

	$('.wrapper .animated.fadeIn').removeClass('fadeIn').addClass('fadeOut').hide();
	$('.wrapper .animated.fadeInDown').removeClass('fadeInDown').addClass('fadeOut').hide();
	$('.wrapper .animated.fadeInUp').removeClass('fadeInUp').addClass('fadeOut').hide();

	if (section != 1) {
		if (section == 2) {
			$svgMap.addClass('map-svg-second-slide').addClass('animated fadeIn');
		} else {
			$svgMap.addClass('animated fadeOut');
			$svgMap.hide();
		}
	}

}

function showSection1() {
	if (section == 1) {
		return;
	} else {

		if (section == 2) {
			secondToFirst();
		} else if (section > 1) {
			resetUI();

			//section-1 einblenden
			$('#section-1').show();
			$('#section-1').removeClass();
			$('#section-1').addClass('animated fadeInDown');
			$svgMap.removeClass().show().addClass('animated fadeIn');
		}

		section = 1;
		renderNavigationUI(section);
	}
}

function showSection2() {
	if (section == 2) {
		return;
	} else {

		if (section == 1) {
			firstToSecond();
		} else if (section == 3) {
			thirdToSecond();
		} else {
			resetUI();
			$('#section-map').removeClass();
			$('#section-map').addClass('animated fadeInDown');
			$('#section-map').show();

			$svgMap.removeClass('animated zoomOut');
			$svgMap.addClass('map-svg-second-slide animated zoomIn');
			$svgMap.show();
		}
		section = 2;
		renderNavigationUI(section);
	}
}

function showSection3() {

	if (section == 3) {
		return;
	} else {

		if (section == 2) {
			secondToThird();
		} else if (section == 4) {
			fourthToThird();
		} else {
			resetUI();
			console.log(section);
			if (section < 2) {
				console.log("ja");
				console.log(section + " ist kleiner als nachfolgende zahl, also fadeinup");
				
				$('#section-circlecompare').show();
				$('#section-circlecompare').removeClass();
				$('#section-circlecompare').addClass('animated fadeInUp');
			} 
			if (section > 4) {
				console.log("nein");
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-circlecompare').show();
				$('#section-circlecompare').removeClass();
				$('#section-circlecompare').addClass('animated fadeInDown');
			}
		}
		section = 3;
		renderNavigationUI(section);
	}
}

function showSection4() {
	if (section == 4) {
		return;
	} else {

		if (section == 3) {
			thirdToFourth();
		} else if (section == 5) {
			fifthToFourth();
		} else {
			resetUI();
			if (section < 3) {
				console.log(section + " ist kleiner als nachfolgende zahl, also fadeinup");
				$('#section-industrie40').show();
				$('#section-industrie40').removeClass();
				$('#section-industrie40').addClass('animated fadeInUp');

			} 
			 if (section > 5) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-industrie40').show();
				$('#section-industrie40').removeClass();
				$('#section-industrie40').addClass('animated fadeInDown');
			}
		}
		section = 4;
		renderNavigationUI(section);
	}
}

function showSection5() {
	if (section == 5) {
		return;
	} else {

		if (section == 4) {
			fourthToFifth();
		} else if (section == 6) {
			sixtToFifth();
		} else {
			resetUI();
			if (section < 4) {
				console.log(section + " ist kleiner als nachfolgende zahl, also fadeinup");
				$('#section-iot').show();
				$('#section-iot').removeClass();
				$('#section-iot').addClass('animated fadeInUp');

			} 
			 if (section > 6) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-iot').show();
				$('#section-iot').removeClass();
				$('#section-iot').addClass('animated fadeInDown');
			}
		}
		section = 5;
		renderNavigationUI(section);
	}
}

function showSection6() {
	if (section == 6) {
		return;
	} else {

		if (section == 5) {
			fifthToSixt();
		} else if (section == 7) {
			seventhToSixt();
		} else {
			resetUI();
			if (section < 5) {
				console.log(section + " ist kleiner als nachfolgende zahl, also fadeinup");
				$('#section-smartServices').show();
				$('#section-smartServices').removeClass();
				$('#section-smartServices').addClass('animated fadeInUp');
			} 
			 if (section > 7) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-smartServices').show();
				$('#section-smartServices').removeClass();
				$('#section-smartServices').addClass('animated fadeInDown');
			}
		}
		section = 6;
		renderNavigationUI(section);
	}
}

function showSection7() {
	if (section == 7) {
		return;
	} else {

		if (section == 6) {
			sixtToSeventh();
		} else if (section == 8) {
			eigthToSeventh();
		} else {
			resetUI();
			if (section < 6) {
				console.log(section + " ist kleiner als nachfolgende zahl, also fadeinup");
				$('#section-bigData').show();
				$('#section-bigData').removeClass();
				$('#section-bigData').addClass('animated fadeInUp');
			} 
			 if (section > 8) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-bigData').show();
				$('#section-bigData').removeClass();
				$('#section-bigData').addClass('animated fadeInDown');
			}
		}
		section = 7;
		renderNavigationUI(section);
	}
}

function showSection8() {
	if (section == 8) {
		return;
	} else {

		if (section == 7) {
			seventhToEigth();
		} else if (section == 9) {
			ninthToEigth();
		} else {
			resetUI();
			if (section < 7) {
				console.log(section + " ist kleiner als nachfolgende zahl, also fadeinup");
				$('#section-robotikUndSensorik').show();
				$('#section-robotikUndSensorik').removeClass();
				$('#section-robotikUndSensorik').addClass('animated fadeInUp');
			} 
			 if (section > 9) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-robotikUndSensorik').show();
				$('#section-robotikUndSensorik').removeClass();
				$('#section-robotikUndSensorik').addClass('animated fadeInDown');
			}
		}
		section = 8;
		renderNavigationUI(section);
	}
}

function showSection9() {
	if (section == 9) {
		return;
	} else {

		if (section == 8) {
			eigthToNinth();
		} else if (section == 10) {
			tenthToNinth();
		} else {
			resetUI();
			if (section < 8) {
				console.log(section + " ist kleiner als nachfolgende zahl, also fadeinup");
				$('#section-ki').show();
				$('#section-ki').removeClass();
				$('#section-ki').addClass('animated fadeInUp');
			} 
		}
		section = 9;
		renderNavigationUI(section);
	}
}

function showSection10() {
	if (section == 10) {
		return;
	} else {

		if (section == 9) {
			ninthToTenth();
		} else if (section < 9) {
			resetUI();
			$('#section-compare').show();
			$('#section-compare').removeClass();
			$('#section-compare').addClass('animated fadeInUp');
		}
		section = 10;
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
