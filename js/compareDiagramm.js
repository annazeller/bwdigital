var compareDiagramm = document.getElementById("compareDiagramm");

Chart.defaults.global.defaultFontFamily = "Fira Sans";
Chart.defaults.global.defaultFontSize = 28;
Chart.defaults.global.defaultFontColor = 'white';

var colors = ["#e9242f", "#fe7f2d", "#ffdb5b", "#00c7ff", "#a42cd6"];

var data = {
  labels: ["Industrie 4.0", "Internet of Things", "Smart Services", "Big Data", "Robotik und Sensorik", "Künstliche Intelligenz"],
  datasets: []
};

var barChart = new Chart(compareDiagramm, {
  type: 'bar',
  data: data,
  options: {
    legend: {
    	display: true
      },
      responsive: false,
      scales: {
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0
        }
      }],
      yAxes: [{
           ticks: {
                  min: 0,
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
        barChart.data.datasets.pop(i);
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
  console.log(document.getElementsByClassName("add").classList);
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
    if (this.checked) {
      var randInt = Math.floor(Math.random()*colors.length);
      var randColour = colors[randInt];
      colors.splice(randInt, 1);

      switch(this.id) {
        case "Finanz- und Versicherungsdienstleister":
          addData('Finanz- und Versicherungsdienstleister', randColour, [0, 73, 63, 32, 9, 2]);
          break;
        case "Handel":
          addData('Handel', randColour, [0, 60, 40, 25, 2, 4]);
          break;
        case "Verkehr und Logistik":
          addData('Verkehr und Logistik', randColour, [0, 57, 35, 15, 1, 1]);
          break;
        case "Wissensintensive Dienstleister":
          addData('Wissensintensive Dienstleister', randColour, [0, 54, 28, 13, 3, 5]);
          break;
        case "Kreativwirtschaft":
          addData('Kreativwirtschaft', randColour, [0, 51, 36, 16, 9, 3]);
          break;
        case "IKT":
          addData('IKT', randColour, [0, 51, 59, 41, 8, 16]);
          break;
        case "Gastgewerbe":
          addData('Gastgewerbe', randColour, [0, 44, 33, 19, 4, 0]);
          break;
        case "Maschinenbau und Fahrzeugbau":
          addData('Maschinenbau und Fahrzeugbau', randColour, [19, 43, 28, 11, 26, 5]);
          break;
        case "Bauwirtschaft":
          addData('Bauwirtschaft', randColour, [11, 40, 21, 13, 4, 0]);
          break;
        case "Handwerk":
          addData('Handwerk', randColour, [5, 37, 12, 8, 7, 0]);
          break;
        case "Chemie und Gesundheitsindustrie":
          addData('Chemie und Gesundheitsindustrie', randColour, [32, 58, 34, 16, 24, 4]);
          break;
        case "Sonstiges verarbeitendes Gewerbe":
          addData('Sonstiges verarbeitendes Gewerbe', randColour, [10, 35, 22, 18, 15, 7]);
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
