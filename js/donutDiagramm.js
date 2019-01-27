
var currentlySelected1 = null;
var	currentlySelected2 = null;

var config = {
  type: 'doughnut',
  data: {
    datasets: [],
    labels: ["nutzen", "planen", "ist nicht relevant für", "nicht befasst", "keine Angabe"],
  },
  options: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
      display: false
    },
    circumference: Math.PI,
    rotation: -Math.PI,

    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                var index = tooltipItem.index;
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                var labels = data.labels[index];
                
                var percentage = data.datasets[tooltipItem.datasetIndex].data[index];
                if (label) {
                    if (index == 3) {
                      label = 'Mit ' + label + ' haben sich '+ percentage + '% der Unternehmen '  + labels;
                    } else if (index == 4) {
                      label = percentage + '% machen ' + labels + ' zum Einsatz von ' + label;
                    } else {
                      label = label + ' ' + labels + ' ' + percentage + '% der Unternehmen';
                    }
                }
                
                return label;
            }
        }
    }
    
  }
};

window.onload = function() {
  
  var ctx = document.getElementById('chart-area');
  window.myDoughnut = new Chart(ctx, config);

};

var dataset_industrie40 = {
    label: "Industrie 4.0",
    data: [9, 12, 57, 22],
    backgroundColor: [
      'rgba(233, 36, 47, 1)',
      'rgba(233, 36, 47, 0.8)',
      'rgba(233, 36, 47, 0.6)',
      'rgba(233, 36, 47, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderColor: [
      'rgba(233, 36, 47, 1)',
      'rgba(233, 36, 47, 0.8)',
      'rgba(233, 36, 47, 0.6)',
      'rgba(233, 36, 47, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderWidth: 1    
  };

  var dataset_robotikUndSensorik = {
    label: "Robotik und Sensorik",
    data: [6, 5, 80, 8, 1],
    backgroundColor: [
      'rgba(234, 107, 50, 1)',
      'rgba(234, 107, 50, 0.8)',
      'rgba(234, 107, 50, 0.6)',
      'rgba(234, 107, 50, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderColor: [
      'rgba(234, 107, 50, 1)',
      'rgba(234, 107, 50, 0.8)',
      'rgba(234, 107, 50, 0.6)',
      'rgba(234, 107, 50, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderWidth: 1
  };

  var dataset_bigData = {
    label: "Big Data",
    data: [18, 6, 53, 19, 4],
    backgroundColor: [
      'rgba(236, 199, 72, 1)',
      'rgba(236, 199, 72, 0.8)',
      'rgba(236, 199, 72, 0.6)',
      'rgba(236, 199, 72, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderColor: [
      'rgba(236, 199, 72, 1)',
      'rgba(236, 199, 72, 0.8)',
      'rgba(236, 199, 72, 0.6)',
      'rgba(236, 199, 72, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderWidth: 1
  };

  var dataset_smartServices = {
    label: "Smart Services",
    data: [31, 15, 34, 19, 1],
    backgroundColor: [
      'rgba(36, 233, 188, 1)',
      'rgba(36, 233, 188, 0.8)',
      'rgba(36, 233, 188, 0.6)',
      'rgba(36, 233, 188, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderColor: [
      'rgba(36, 233, 188, 1)',
      'rgba(36, 233, 188, 0.8)',
      'rgba(36, 233, 188, 0.6)',
      'rgba(36, 233, 188, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderWidth: 1
  };

  var dataset_iot = {
    label: "Internet of Things",
    data: [48, 11, 28, 13],
    backgroundColor: [
      'rgba(36, 157, 233, 1)',
      'rgba(36, 157, 233, 0.8)',
      'rgba(36, 157, 233, 0.6)',
      'rgba(36, 157, 233, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderColor: [
      'rgba(36, 157, 233, 1)',
      'rgba(36, 157, 233, 0.8)',
      'rgba(36, 157, 233, 0.6)',
      'rgba(36, 157, 233, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderWidth: 1
  };

  var dataset_ki = {
    label: "Künstliche Intelligenz",
    data: [4, 4, 76, 15, 1],
    backgroundColor: [
      'rgba(164, 44, 214, 1)',
      'rgba(164, 44, 214, 0.8)',
      'rgba(164, 44, 214, 0.6)',
      'rgba(164, 44, 214, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderColor: [
      'rgba(164, 44, 214, 1)',
      'rgba(164, 44, 214, 0.8)',
      'rgba(164, 44, 214, 0.6)',
      'rgba(164, 44, 214, 0.4)',
      'rgba(255, 255, 255, 0.2)'
    ],
    borderWidth: 1
  };

document.getElementById('donut_industrie40').addEventListener('click', function() {
  toggleDataset($(this),dataset_industrie40);
});

document.getElementById('donut_robotikUndSensorik').addEventListener('click', function() {
  

  toggleDataset($(this),dataset_robotikUndSensorik);
});

document.getElementById('donut_bigData').addEventListener('click', function() {
  

  toggleDataset($(this),dataset_bigData);
});

document.getElementById('donut_smartServices').addEventListener('click', function() {
  

  toggleDataset($(this),dataset_smartServices);
});

document.getElementById('donut_iot').addEventListener('click', function() {
  
  
  toggleDataset($(this),dataset_iot);
});

document.getElementById('donut_ki').addEventListener('click', function() {
  

  toggleDataset($(this),dataset_ki);

});

function toggleDataset(myObject,myDataset) {
  if (myObject.hasClass('hollow')) {

    config.data.datasets.push(myDataset);
    myObject.removeClass('hollow');

  } else {

    pos = config.data.datasets.map(function(e) { return e.label; }).indexOf(myDataset.label);
    if(pos >= 0) { //make sure this element exists in the array
        config.data.datasets.splice(pos, 1);
    }

    myObject.addClass('hollow');
  }
  window.myDoughnut.update();
  console.log("dataset toggle complete");
}

