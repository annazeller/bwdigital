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


var bigData = document.getElementById("bigData");
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



var ki = document.getElementById("ki");
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
