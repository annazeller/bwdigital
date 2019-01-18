
var 	currentlySelected1 = null;
var	currentlySelected2 = null;

Chart.pluginService.register({
		beforeDraw: function (chart) {
			if (chart.config.options.elements.center) {
        //Get ctx from string
        var ctx = chart.chart.ctx;

				//Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
      	var fontStyle = centerConfig.fontStyle || 'Arial';
				var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
        //Start with a base font of 30px
        ctx.font = "30px " + fontStyle;

				//Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);

        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight);

				//Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse+"px " + fontStyle;
        ctx.fillStyle = color;

        //Draw text in center
        ctx.fillText(txt, centerX, centerY);
			}
		}
	});

	$('.circleChoose').change(function() {
	    $this = $(this);
	    myId = $this.attr('id');
	    myVal = $this.val();

	     if (myId == 'circleChoose1') {
				 if (currentlySelected1 != null)
				 {
					 $("#circleChoose1 option[value=" + currentlySelected1 + "]").attr("disabled", false);
					 $("#circleChoose2 option[value=" + currentlySelected1 + "]").attr("disabled", false);

					 $("#" + currentlySelected1 + "Circle").appendTo("#hiddenDonuts");
				 }

			$("#circleChoose1 option:selected").attr('disabled','disabled');
			$("#circleChoose2 option[value=" + myVal + "]").attr('disabled','disabled');

			currentlySelected1 = myVal;
			 $("#" + myVal + "Circle").appendTo("#donut1");

			 functioncall = "generate" + myVal+ "Circle();";
			 eval(functioncall);
	     }
			 else if (myId =='circleChoose2'){
				 if (currentlySelected2 != null)
				{
					$("#circleChoose1 option[value=" + currentlySelected2 + "]").attr("disabled", false);
					$("#circleChoose2 option[value=" + currentlySelected2 + "]").attr("disabled", false);

					$("#" + currentlySelected2 + "Circle").appendTo("#hiddenDonuts");
				}

		 $("#circleChoose2 option:selected").attr('disabled','disabled');
		 $("#circleChoose1 option[value=" + myVal + "]").attr('disabled','disabled');

		 currentlySelected2 = myVal;
			$("#" + myVal + "Circle").appendTo("#donut2");

			functioncall = "generate" + myVal+ "Circle();";
			eval(functioncall);
		 }
	});


function generatebigDataCircle(){
var bigData = document.getElementById("bigDataCircle");
var bigData = new Chart(bigData, {
  type: 'doughnut',
  data: {
    labels: ["Nutzen wir", "Planen wir", "Nicht relevant", "Nicht befasst", "Keine Angabe"],
    datasets: [{
      label: '# of Votes',
      data: [18, 6, 53, 19, 4],
      backgroundColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderWidth: 1
    }]
  },
  options: {
        legend: {
          display: false
       },
			   elements: {
				     center: {
					    text: 'Big Data',
              color: '#FFF', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 20 // Defualt is 20 (as a percentage)
				}
			}
		}
});
}

function generatekünstlicheIntelligenzCircle(){
	var ki = document.getElementById("künstlicheIntelligenzCircle");
	var ki = new Chart(ki, {
	  type: 'doughnut',
	  data: {
	    labels: ["Nutzen wir", "Planen wir", "Nicht relevant", "Nicht befasst", "Keine Angabe"],
	    datasets: [{
	      label: '# of Votes',
	      data: [4, 4, 76, 15, 1],
	      backgroundColor: [
	        '#a42cd6',
	        '#00c7ff',
	        '#ffdb5b',
	        '#e9242f',
	        '#FFF'
	      ],
	      borderColor: [
	        '#a42cd6',
	        '#00c7ff',
	        '#ffdb5b',
	        '#e9242f',
	        '#FFF'
	      ],
	      borderWidth: 1
	    }]
	  },
	  options: {
	        legend: {
	          display: false
	       },
				   elements: {
					     center: {
						    text: 'KI',
	              color: '#FFF', // Default is #000000
	              fontStyle: 'Arial', // Default is Arial
	              sidePadding: 75 // Defualt is 20 (as a percentage)
					}
				}
			}
	});
}

function generaterobotikUndSensorikCircle(){
var robotikUndSensorik = document.getElementById("robotikUndSensorikCircle");
var robotikUndSensorik = new Chart(robotikUndSensorik, {
  type: 'doughnut',
  data: {
    labels: ["Nutzen wir", "Planen wir", "Nicht relevant", "Nicht befasst", "Keine Angabe"],
    datasets: [{
      label: '# of Votes',
      data: [6, 5, 80, 8, 1],
      backgroundColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderWidth: 1
    }]
  },
  options: {
        legend: {
          display: false
       },
			   elements: {
				     center: {
					    text: 'Robotik und Sensorik',
              color: '#FFF', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 75 // Defualt is 20 (as a percentage)
				}
			}
		}
});
}

function generatesmartServicesCircle(){
var smartServices = document.getElementById("smartServicesCircle");
var smartServices = new Chart(smartServices, {
  type: 'doughnut',
  data: {
    labels: ["Nutzen wir", "Planen wir", "Nicht relevant", "Nicht befasst", "Keine Angabe"],
    datasets: [{
      label: '# of Votes',
      data: [31, 15, 34, 19, 1],
      backgroundColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderWidth: 1
    }]
  },
  options: {
        legend: {
          display: false
       },
			   elements: {
				     center: {
					    text: 'Smart Services',
              color: '#FFF', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 75 // Defualt is 20 (as a percentage)
				}
			}
		}
});
}

function generateiotCircle(){
var iot = document.getElementById("iotCircle");
var iot = new Chart(iot, {
  type: 'doughnut',
  data: {
    labels: ["Nutzen wir", "Planen wir", "Nicht relevant", "Nicht befasst", "Keine Angabe"],
    datasets: [{
      label: '# of Votes',
      data: [48, 11, 28, 13, 0],
      backgroundColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderWidth: 1
    }]
  },
  options: {
        legend: {
          display: false
       },
			   elements: {
				     center: {
					    text: 'IOT',
              color: '#FFF', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 75 // Defualt is 20 (as a percentage)
				}
			}
		}
});
}

function generateindustrie40Circle(){
var industrie40 = document.getElementById("industrie40Circle");
var industrie40 = new Chart(industrie40, {
  type: 'doughnut',
  data: {
    labels: ["Nutzen wir", "Planen wir", "Nicht relevant", "Nicht befasst", "Keine Angabe"],
    datasets: [{
      label: '# of Votes',
      data: [9, 12, 57, 22, 0],
      backgroundColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderColor: [
        '#a42cd6',
        '#00c7ff',
        '#ffdb5b',
        '#e9242f',
        '#FFF'
      ],
      borderWidth: 1
    }]
  },
  options: {
        legend: {
          display: false
       },
			   elements: {
				     center: {
					    text: 'Industrie 4.0',
              color: '#FFF', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 75 // Defualt is 20 (as a percentage)
				}
			}
		}
});
}
