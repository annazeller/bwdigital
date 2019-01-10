var compareDiagramm = document.getElementById("compareDiagramm");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var data = {
  labels: ["Industrie 4.0", "Internet of Things", "Smart Services", "Big Data", "Robotik und Sensorik", "Künstliche Intelligenz"],
  datasets: [{
    label: "Handel",
    backgroundColor: "blue",
    data: [5, 7, 4, 5, 8, 7]
  }, {
    label: "Industrie",
    backgroundColor: "red",
    data: [5, 3, 5, 6, 4, 9]
  }, {
    label: "Wirtschaft",
    backgroundColor: "green",
    data: [7, 9, 6, 5, 7, 4]
  }]
};

var barChart = new Chart(compareDiagramm, {
  type: 'bar',
  data: data,
  options: {
    legend: {
    	display: false
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
                beginAtZero: true
            }
        }]
     }
    }
});

function addFinanzen(){
  addData('Finanzen', 'yellow', [16, 14, 8, 5, 9, 10]);
  console.log(barChart.data);
}

function removeFinanzen(){
  removeDataset("Finanzen");
}

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
