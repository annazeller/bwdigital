var compareDiagramm = document.getElementById("compareDiagramm");

Chart.defaults.global.defaultFontFamily = "Fira Sans";
Chart.defaults.global.defaultFontSize = 24;
Chart.defaults.global.defaultFontColor = 'white';

var colors = ["#e9242f", "#fe7f2d", "#ffdb5b", "#00c7ff", "#a42cd6"];

var data = {
  labels: [[[],[],["Industrie"],["4.0"]], [[],[],["Künstliche"],["Intelligenz"]],[[],[],["Internet"],["of Things"]],[[],[],["Smart"], ["Services"]], [[],["Big Data"]], [[],[],["Robotik"],["und Sensorik"]]],
  datasets: []
};

var barChart = new Chart(compareDiagramm, {
  type: 'bar',
  data: data,
  options: {
    responsive:true,
    maintainAspectRatio: false,
    legend: {
    	display: true,
      labels:{
        fontSize: 15
      }
      },
      responsive: false,
      scales: {
      xAxes: [{
        ticks: {
          fontSize:20,
          fontColor: "white",
          padding: 200,
          maxRotation: 0,
          minRotation: 0
        }
      }],
      yAxes: [{
           ticks: {
                  min: 0,
                  fontSize:20,
                  fontColor: "white",
                  max: 100,
                  callback: function(value){return value+ "%"}
               },
               scaleLabel: {
                  display: true,
                  labelString: "Percentage"
               }
           }]
     }
    }
});

function addData(label, color, data) {
		barChart.data.datasets.push({
	    label: label,
      backgroundColor: color,
      data: data
    });
    barChart.update();
}

function removeDataset(label){
  var datasets = barChart.data.datasets;
  for (var i=0; i < datasets.length; i++) {
      if (datasets[i].label === label) {
        colors.push(datasets[i].backgroundColor);
        datasets.splice(i, 1);
        barChart.update();
    }
  }
}

function removeData(chart) {
    barChart.data.labels.pop();
    barChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    barChart.update();
}

function rotate() {
  var element = document.getElementsByClassName("add");
  element.classList.toggle("rotate");
}

document.getElementById('addTrigger').onclick = function(){
  document.getElementsByClassName('add')[0].classList.toggle("rotate");
  document.getElementById("branchenOverlay").classList.toggle("active");
}

$( document ).ready(function() {
  $('.branchenOverlayContent :checkbox').on('click', function (evt) {
    evt.stopImmediatePropagation();

    var countchecked = $("input[type=checkbox]:checked").length;

    if(countchecked >= 3)
    {
        $('input[type=checkbox]').not(':checked').attr("disabled",true);
    }
    else
    {
        $('input[type=checkbox]').not(':checked').attr("disabled",false);
    }


    if (this.checked) {
      var randInt = Math.floor(Math.random()*colors.length);
      var randColour = colors[randInt];
      colors.splice(randInt, 1);

      switch(this.id) {
        case "Finanz- und Versicherungsdienstleister":
          addData('Finanz- und Versicherungsdienstleister', randColour, [0, 73, 63, 32, 9, 2]);
          break;
        case "Handel":
          addData('Handel', randColour, [0, 4, 60, 40, 25, 2]);
          break;
        case "Verkehr und Logistik":
          addData('Verkehr und Logistik', randColour, [0, 1, 57, 35, 15, 1]);
          break;
        case "Wissensintensive Dienstleister":
          addData('Wissensintensive Dienstleister', randColour, [0, 5, 54, 28, 13, 3]);
          break;
        case "Kreativwirtschaft":
          addData('Kreativwirtschaft', randColour, [0, 3, 51, 36, 16, 9]);
          break;
        case "IKT":
          addData('IKT', randColour, [0, 16, 51, 59, 41, 8]);
          break;
        case "Gastgewerbe":
          addData('Gastgewerbe', randColour, [0, 0, 44, 33, 19, 4]);
          break;
        case "Maschinenbau und Fahrzeugbau":
          addData('Maschinenbau und Fahrzeugbau', randColour, [19, 5, 43, 28, 11, 26]);
          break;
        case "Bauwirtschaft":
          addData('Bauwirtschaft', randColour, [11, 0, 40, 21, 13, 4]);
          break;
        case "Handwerk":
          addData('Handwerk', randColour, [5, 0, 37, 12, 8, 7]);
          break;
        case "Chemie und Gesundheitsindustrie":
          addData('Chemie und Gesundheitsindustrie', randColour, [32, 4, 58, 34, 16, 24]);
          break;
        case "Sonstiges verarbeitendes Gewerbe":
          addData('Sonstiges verarbeitendes Gewerbe', randColour, [10, 7, 35, 22, 18, 15]);
          break;
      }
    }
    else {
      switch(this.id) {
        case "Finanz- und Versicherungsdienstleister":
          removeDataset("Finanz- und Versicherungsdienstleister");
          break;
          case "Handel":
            removeDataset('Handel');
            break;
          case "Verkehr und Logistik":
            removeDataset('Verkehr und Logistik');
            break;
          case "Wissensintensive Dienstleister":
            removeDataset('Wissensintensive Dienstleister');
            break;
          case "Kreativwirtschaft":
            removeDataset('Kreativwirtschaft');
            break;
          case "IKT":
            removeDataset('IKT');
            break;
          case "Gastgewerbe":
            removeDataset('Gastgewerbe');
            break;
          case "Maschinenbau und Fahrzeugbau":
            removeDataset('Maschinenbau und Fahrzeugbau');
            break;
          case "Bauwirtschaft":
            removeDataset('Bauwirtschaft');
            break;
          case "Handwerk":
            removeDataset('Handwerk');
            break;
          case "Chemie und Gesundheitsindustrie":
            removeDataset('Chemie und Gesundheitsindustrie');
            break;
          case "Sonstiges verarbeitendes Gewerbe":
            removeDataset('Sonstiges verarbeitendes Gewerbe');
            break;
    }}
  });
});
