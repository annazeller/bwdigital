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
	$('#studyinfo .grid-container').removeClass("animated fadeOut").hide();
	setTimeout(function(){
		$('#studyinfo .grid-container').show().addClass("animated fadeIn");
	}, 350);
}

function closeInfo() {
	$('#studyinfo .grid-container').removeClass("animated fadeIn").addClass("animated fadeOut");
	setTimeout(function(){
		$('#studyinfo .grid-container').hide();
		document.getElementById("studyinfo").style.width = "0%";
	}, 300);


}

function openImpressum() {
	document.getElementById("impressum").style.width = "100%";

	$('#impressum .grid-container').removeClass("animated fadeOut").hide();
	setTimeout(function(){
		$('#impressum .grid-container').show().addClass("animated fadeIn");
	}, 350);

}

function closeImpressum() {
	$('#impressum .grid-container').removeClass("animated fadeIn").addClass("animated fadeOut");
	setTimeout(function(){
		$('#impressum .grid-container').hide();
		document.getElementById("impressum").style.width = "0%";
	}, 300);
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
var svg_industrie40 = new Vivus('svg_industrie40', {duration: 200,type: "delayed", start: "manual",animTimingFunction: Vivus.EASE});
var svg_iot = new Vivus('svg_iot', {duration: 200,type: "delayed", start: "manual",animTimingFunction: Vivus.EASE});
var svg_smartServices = new Vivus('svg_smartServices', {duration: 200,type: "delayed", start: "manual",animTimingFunction: Vivus.EASE});
var svg_bigData = new Vivus('svg_bigData', {duration: 200,type: "delayed", start: "manual",animTimingFunction: Vivus.EASE});
var svg_robotik = new Vivus('svg_robotik', {duration: 200,type: "delayed", start: "manual",animTimingFunction: Vivus.EASE});
var svg_ki = new Vivus('svg_ki', {duration: 200,type: "delayed", start: "manual",animTimingFunction: Vivus.EASE});
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
	  $svgMap.removeClass("animated fadeInMap").addClass('map-svg-second-slide');
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
	  $('#mapAction li').removeClass('active');
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
var dataset;
var element;
function secondToThird() {
	console.log(section);

	console.log(allowChange);

	setTimeout(function(){

		//section-map ausblenden
		$('#section-map').removeClass();
		$('#section-map').addClass('animated fadeOutUp');

		$svgMap.removeClass();
		$svgMap.addClass('animated fadeOutMap');
		cleanupCircles();
		$('#mapAction li').removeClass('active');

		
		$('#section-circlecompare').show();
		$('#section-circlecompare').removeClass();
		$('#section-circlecompare').addClass('animated fadeInUp');

		if (currentKategorie) {
			console.log("kategorie :" + currentKategorie);
			dataset = eval("dataset_"+currentKategorie);
			element = $('#donut_'+currentKategorie);
			setTimeout(function(){
				console.log("before toggle");
				myDoughnut.reset();

				toggleDataset(element,dataset);
				//console.log(toggleDataset(element,dataset));
				console.log("after toggle");
			},200);
		}

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 0);
}


function thirdToSecond() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-circlecompare').removeClass();
		$('#section-circlecompare').addClass('animated fadeOutDown');

		//section-map einblenden
		$('#section-map').removeClass();
		$('#section-map').addClass('animated fadeInDown');
		$('#section-map').show();
		$svgMap.show().addClass('map-svg-second-slide');
		$svgMap.removeClass('animated fadeOutMap');
		$svgMap.addClass('animated fadeInMap');

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 0);
}

function thirdToFourth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-circlecompare').removeClass();
		$('#section-circlecompare').addClass('animated fadeOutUp');

		
		$('#section-industrie40').show();
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeInUp');
		svg_industrie40.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function fourthToThird() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeOutDown');

		
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

		
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeOutUp');

		
		$('#section-iot').show();
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeInUp');
		svg_iot.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function fifthToFourth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeOutDown');

		
		$('#section-industrie40').show();
		$('#section-industrie40').removeClass();
		$('#section-industrie40').addClass('animated fadeInDown');
		svg_industrie40.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function fifthToSixt() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeOutUp');

		
		$('#section-smartServices').show();
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeInUp');
		svg_smartServices.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function sixtToFifth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeOutDown');

		
		$('#section-iot').show();
		$('#section-iot').removeClass();
		$('#section-iot').addClass('animated fadeInDown');
		svg_iot.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function sixtToSeventh() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeOutUp');

		
		$('#section-bigData').show();
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeInUp');
		svg_bigData.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function seventhToSixt() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeOutDown');

		
		$('#section-smartServices').show();
		$('#section-smartServices').removeClass();
		$('#section-smartServices').addClass('animated fadeInDown');
		svg_smartServices.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function seventhToEigth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeOutUp');

		
		$('#section-robotikUndSensorik').show();
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeInUp');
		svg_robotik.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);
}

function eigthToSeventh() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeOutDown');

		
		$('#section-bigData').show();
		$('#section-bigData').removeClass();
		$('#section-bigData').addClass('animated fadeInDown');
		svg_bigData.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function eigthToNinth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

	
	$('#section-robotikUndSensorik').removeClass();
	$('#section-robotikUndSensorik').addClass('animated fadeOutUp');

	
		$('#section-ki').show();
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeInUp');
		svg_ki.play();

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 0);
}

function ninthToEigth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

	
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeOutDown');

	
		$('#section-robotikUndSensorik').show();
		$('#section-robotikUndSensorik').removeClass();
		$('#section-robotikUndSensorik').addClass('animated fadeInDown');
		svg_robotik.play();

		allowChange = true;
		console.log(allowChange);
	  	$('body').removeClass('disable-click');
	}, 0);

}

function ninthToTenth() {
	console.log(section);
	console.log(allowChange);
	setTimeout(function(){

		
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeOutUp');

		
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

		
		$('#section-compare').removeClass();
		$('#section-compare').addClass('animated fadeOutDown');

		
		$('#section-ki').show();
		$('#section-ki').removeClass();
		$('#section-ki').addClass('animated fadeInDown');
		svg_ki.play();

		allowChange = true;
		console.log(allowChange);
		$('body').removeClass('disable-click');
	}, 0);

}

function resetUI(){
	console.log("reset");

	$('.wrapper .animated.fadeIn').removeClass('fadeIn').addClass('fadeOut').hide();
	$('.wrapper .animated.fadeInDown').removeClass('fadeInDown').addClass('fadeOut').hide();
	$('.wrapper .animated.fadeInUp').removeClass('fadeInUp').addClass('fadeOut').hide();

	cleanupCircles();

	$svgMap.addClass('animated fadeOutMap');
	$svgMap.removeClass();
	$svgMap.hide();

	$('#mapAction li').removeClass('active');
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
			$svgMap.removeClass().show().addClass('animated fadeInMap');
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

			$svgMap.removeClass();
			$svgMap.addClass('map-svg-second-slide animated fadeInMap');
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
				svg_industrie40.play();

			}
			 if (section > 5) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-industrie40').show();
				$('#section-industrie40').removeClass();
				$('#section-industrie40').addClass('animated fadeInDown');
				svg_industrie40.play();
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
				svg_iot.play();

			}
			 if (section > 6) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-iot').show();
				$('#section-iot').removeClass();
				$('#section-iot').addClass('animated fadeInDown');
				svg_iot.play();
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
				svg_smartServices.play();
			}
			 if (section > 7) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-smartServices').show();
				$('#section-smartServices').removeClass();
				$('#section-smartServices').addClass('animated fadeInDown');
				svg_smartServices.play();
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
				svg_bigData.play();
			}
			 if (section > 8) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-bigData').show();
				$('#section-bigData').removeClass();
				$('#section-bigData').addClass('animated fadeInDown');
				svg_bigData.play();
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
				svg_robotik.play();
			}
			 if (section > 9) {
				console.log(section + " ist größer als nachfolgende zahl, also fadeindown");
				$('#section-robotikUndSensorik').show();
				$('#section-robotikUndSensorik').removeClass();
				$('#section-robotikUndSensorik').addClass('animated fadeInDown');
				svg_robotik.play();
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
				svg_ki.play();
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
    //var donut = $(this).attr('data-donut');
    //var dataset = eval("dataset_"+donut);
    //window.myDoughnut.reset();
    //var element = $('#donut_'+donut);
    //toggleDataset(element,dataset);

    /*if ($('#donut_'+donut).siblings('.button').not('.hollow').attr('id')) {
    	var clicked_id = $('#donut_'+donut).siblings('.button').not('.hollow').attr('id');
    	var clicked = clicked_id.substr(6);
    	var clicked_dataset = eval("dataset_"+clicked);

    	console.log(clicked_id, clicked, clicked_dataset);

    	toggleDataset($('#'+clicked),clicked_dataset);
    	$('#donut_'+donut).siblings('.button').not('.hollow').addClass('hollow');
    }*/

    //$('#donut_'+donut)[0].click();
    //document.getElementById(donut).click();

    //$('#'+donut).siblings('.button').not('.hollow')[0].click();
    
});



$(document).on('mouseenter', '.keyfact-box', function() {
  console.log("mouse enter");
  var index = $(this).attr('data-mid');
  console.log(index);

if (!($(this).hasClass('isActive') || $(this).siblings('.keyfact-box').hasClass('isActive'))) {
	  $('#map-path.st' + index).siblings('path').not('#map-path.st' + index).addClass('stroke-white');
	  $('#map-path.st' + index).addClass('stroke-colored');
	  //$(this).find('p').addClass('text-colored');
	} else {
		$('#map-path.st' + index).removeClass('stroke-white').addClass('stroke-colored');
	}
});
$(document).on('mouseleave', '.keyfact-box', function() {
	
	var index = $(this).attr('data-mid');
	console.log("mouse leave " + !($(this).hasClass('isActive') || $(this).siblings('.keyfact-box').hasClass('isActive')));
	// $svgMap.addClass('map-svg-second-slide');

	if (!($(this).hasClass('isActive') || $(this).siblings('.keyfact-box').hasClass('isActive'))) {
		console.log("niemand ist aktiv");
		$('#map-path.st' + index).siblings('path').removeClass('stroke-white');
		$('#map-path.st' + index).removeClass('stroke-colored');
		//$(this).find('p').removeClass('text-colored');
	} else {
		if (!($('#map-path.st' + index).hasClass('isActive'))) {
			$('#map-path.st' + index).removeClass('stroke-colored').addClass('stroke-white');
		}
	}
});

$(document).on('click', '.keyfact-box', function() {
  console.log("click");
  var index = $(this).attr('data-mid');
  console.log(index);

  $(this).toggleClass('isActive');

  if ($(this).siblings('.keyfact-box').hasClass('isActive')) {
  	if ($('#map-path.st' + index).hasClass('isActive')) {
  		$('#map-path.st' + index).removeClass('stroke-colored isActive').addClass('stroke-white');
  	} else {
	  	$('#map-path.st' + index).addClass('stroke-colored isActive');
  	}
  } else {
  	$('#map-path.st' + index).siblings('path').not('#map-path.st' + index).addClass('stroke-white');
  	$('#map-path.st' + index).addClass('stroke-colored isActive');
  	//$(this).find('p').addClass('text-colored');
  }

  $('.keyfact-box[data-mid="'+index+'"]').children(".keyfact-subheadline").toggleClass("animated fadeOut");
  //$('.keyfact-box[data-mid="'+index+'"]').children(".keyfact-fact");
});


