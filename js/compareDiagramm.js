var compareDiagramm = document.getElementById("compareDiagramm");

Chart.defaults.global.defaultFontFamily = "Fira Sans";
Chart.defaults.global.defaultFontSize = 22;
Chart.defaults.global.defaultFontColor = 'white';

var colors = ["#e9242f", "#fe7f2d", "#ffdb5b", "#00c7ff", "#a42cd6", "#56e39f"];

var data = {
  labels: [[[],[],["Industrie"],["4.0"]], [[],[],["Künstliche"],["Intelligenz"]],[[],[],["Internet"],["of Things"]],[[],[],["Smart"], ["Services"]], [[],[],["Big"],["Data"]], [[],[],["Robotik"],["und Sensorik"]]],
  datasets: []
};

var barChart = new Chart(compareDiagramm, {
  type: 'bar',
  data: data,
  options: {
    tooltips: {
        backgroundColor: 'rgba(19,23,41,0.90)',
        bodyFontSize: 16,
        titleFontSize: 16,
        callbacks: {
          label: function(t, d) {
             var dstLabel = d.datasets[t.datasetIndex].label;
             var yLabel = t.yLabel;

             return dstLabel + ': ' + yLabel + ' %';
          },
           title: function(tooltipItems, data) {
            return  tooltipItems[0].xLabel[2] + " " + tooltipItems[0].xLabel[3];;
        }
       }
      },
    responsive:true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels:{
        fontSize: 15
      }
      },
      responsive: false,
      scales: {
      xAxes: [{
        ticks: {
          fontSize:16,
          fontColor: "white",
          padding: 200,
          maxRotation: 0,
          minRotation: 0
        }
      }],
      yAxes: [{
           ticks: {
                  min: 0,
                  fontSize:16,
                  fontColor: "white",
                  max: 100,
                  callback: function(value){return value+ "%"}
               },
               scaleLabel: {
                  display: true,
                  fontSize:16,
                  labelString: "Anteil der einsetzenden Unternehmen"
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

document.getElementById('plus-button').onclick = function(){
  this.classList.toggle("open");
  document.getElementById("branchenOverlay").classList.toggle("active");
}

$( "#activeBranchen" ).on( "click", ".activeBran", function( event ) {

   $(this).remove();
   switch($(this).attr("id")) {
      case "fin":
       removeDataset("Finanz und Versicherungsdienstleister");
       $("#fin").remove();
       document.getElementById("Finanz und Versicherungsdienstleister").checked = false;
       checkDiagrammText();
       break;
       case "han":
         removeDataset('Handel');
         $("#han").remove();
         document.getElementById("Handel").checked = false;
         checkDiagrammText();
         break;
       case "vul":
         removeDataset('Verkehr und Logistik');
         $("#vul").remove();
         $("#Verkehr und Logistik").prop( "checked", false );
         document.getElementById("Verkehr und Logistik").checked = false;
         checkDiagrammText();
         break;
       case "wis":
         removeDataset('Wissensintensive Dienstleister');
         $("#wis").remove();
         document.getElementById("Wissensintensive Dienstleister").checked = false;
         checkDiagrammText();
         break;
       case "krea":
         removeDataset('Kreativwirtschaft');
         $("#krea").remove();
         document.getElementById("Kreativwirtschaft").checked = false;
         checkDiagrammText();
         break;
       case "ikt":
         removeDataset('IKT');
         $("#ikt").remove();
         document.getElementById("IKT").checked = false;
         checkDiagrammText();
         break;
       case "gast":
         removeDataset('Gastgewerbe');
         $("#gast").remove();
         document.getElementById("Gastgewerbe").checked = false;
         checkDiagrammText();
         break;
       case "masch":
         removeDataset('Maschinenbau und Fahrzeugbau');
         $("#masch").remove();
         document.getElementById("Maschinenbau und Fahrzeugbau").checked = false;
         checkDiagrammText();
         break;
       case "bau":
         removeDataset('Bauwirtschaft');
         $("#bau").remove();
         document.getElementById("Bauwirtschaft").checked = false;
         checkDiagrammText();
         break;
       case "handw":
         removeDataset('Handwerk');
         $("#handw").remove();
         document.getElementById("Handwerk").checked = false;
         checkDiagrammText();
         break;
       case "chem":
         removeDataset('Chemie und Gesundheitsindustrie');
         $("#chem").remove();
         document.getElementById("Chemie und Gesundheitsindustrie").checked = false;
         checkDiagrammText();
         break;
       case "sonst":
         removeDataset('Sonstiges verarbeitendes Gewerbe');
         $("#sonst").remove();
         document.getElementById("Sonstiges verarbeitendes Gewerbe").checked = false;
         checkDiagrammText();
         break;
 }

 var countchecked = $("input[type=checkbox]:checked").length;

 if(countchecked >= 4)
 {
   console.log("more than 4");
    $('input[type=checkbox]').not(':checked').attr("disabled",true);
 }
 else
 {
   console.log("less than 4");
     $('input[type=checkbox]').not(':checked').attr("disabled",false);
 }
});


$( document ).ready(function() {
  $('.branchenOverlayContent :checkbox').on('click', function (evt) {
    evt.stopImmediatePropagation();

    var countchecked = $("input[type=checkbox]:checked").length;

    if(countchecked >= 4)
    {
        $('input[type=checkbox]').not(':checked').attr("disabled",true);
        $("#branchenOverlay").removeClass("active");
        document.getElementById("plus-button").classList.toggle("open");
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
        case "Finanz und Versicherungsdienstleister":
          addData('Finanz und Versicherungsdienstleister', randColour, [0, 73, 63, 32, 9, 2]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='fin' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Finanz und Versicherungsdienstleister</button> " );
          checkDiagrammText();
          break;
        case "Handel":
          addData('Handel', randColour, [0, 4, 60, 40, 25, 2]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='han' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i>  Handel</button> " );
          checkDiagrammText();
          break;
        case "Verkehr und Logistik":
          addData('Verkehr und Logistik', randColour, [0, 1, 57, 35, 15, 1]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='vul' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Verkehr und Logistik</button> " );
          checkDiagrammText();
          break;
        case "Wissensintensive Dienstleister":
          addData('Wissensintensive Dienstleister', randColour, [0, 5, 54, 28, 13, 3]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='wis' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Wissensintensive Dienstleister</button> " );
          checkDiagrammText();
          break;
        case "Kreativwirtschaft":
          addData('Kreativwirtschaft', randColour, [0, 3, 51, 36, 16, 9]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='krea' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Kreativwirtschaft</button> " );
          checkDiagrammText();
          break;
        case "IKT":
          addData('IKT', randColour, [0, 16, 51, 59, 41, 8]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='ikt' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> IKT</button> " );
          checkDiagrammText();
          break;
        case "Gastgewerbe":
          addData('Gastgewerbe', randColour, [0, 0, 44, 33, 19, 4]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='gast' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Gastgewerbe</button> " );
          checkDiagrammText();
          break;
        case "Maschinenbau und Fahrzeugbau":
          addData('Maschinenbau und Fahrzeugbau', randColour, [19, 5, 43, 28, 11, 26]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='masch' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Maschinenbau und Fahrzeugbau</button> " );
          checkDiagrammText();
          break;
        case "Bauwirtschaft":
          addData('Bauwirtschaft', randColour, [11, 0, 40, 21, 13, 4]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='bau' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Bauwirtschaft</button> " );
          checkDiagrammText();
          break;
        case "Handwerk":
          addData('Handwerk', randColour, [5, 0, 37, 12, 8, 7]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='handw' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Handwerk</button> " );
          checkDiagrammText();
          break;
        case "Chemie und Gesundheitsindustrie":
          addData('Chemie und Gesundheitsindustrie', randColour, [32, 4, 58, 34, 16, 24]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='chem' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Chemie und Gesundheitsindustrie</button> " );
          checkDiagrammText();
          break;
        case "Sonstiges verarbeitendes Gewerbe":
          addData('Sonstiges verarbeitendes Gewerbe', randColour, [10, 7, 35, 22, 18, 15]);
          $( "#activeBranchen" ).append( "<button class='button medium activeBran hvr-icon-pulse hvr-icon-fade' id='sonst' style='background-color:"+randColour+";color:#0a0a0a'><i class='fa fa-times hvr-icon'></i> Sonstiges verarbeitendes Gewerbe</button> " );
          checkDiagrammText();
          break;
      }
    }
    else {
      switch(this.id) {
        case "Finanz und Versicherungsdienstleister":
          removeDataset("Finanz und Versicherungsdienstleister");
          $( "#fin" ).remove();
          checkDiagrammText();
          break;
          case "Handel":
            removeDataset('Handel');
            $( "#han" ).remove();
            checkDiagrammText();
            break;
          case "Verkehr und Logistik":
            removeDataset('Verkehr und Logistik');
            $( "#vul" ).remove();
            checkDiagrammText();
            break;
          case "Wissensintensive Dienstleister":
            removeDataset('Wissensintensive Dienstleister');
            $( "#wis" ).remove();
            checkDiagrammText();
            break;
          case "Kreativwirtschaft":
            removeDataset('Kreativwirtschaft');
            $( "#krea" ).remove();
            checkDiagrammText();
            break;
          case "IKT":
            removeDataset('IKT');
            $( "#ikt" ).remove();
            checkDiagrammText();
            break;
          case "Gastgewerbe":
            removeDataset('Gastgewerbe');
            $( "#gast" ).remove();
            checkDiagrammText();
            break;
          case "Maschinenbau und Fahrzeugbau":
            removeDataset('Maschinenbau und Fahrzeugbau');
            $( "#masch" ).remove();
            checkDiagrammText();
            break;
          case "Bauwirtschaft":
            removeDataset('Bauwirtschaft');
            $( "#bau" ).remove();
            checkDiagrammText();
            break;
          case "Handwerk":
            removeDataset('Handwerk');
            $( "#handw" ).remove();
            checkDiagrammText();
            break;
          case "Chemie und Gesundheitsindustrie":
            removeDataset('Chemie und Gesundheitsindustrie');
            $( "#chem" ).remove();
            checkDiagrammText();
            break;
          case "Sonstiges verarbeitendes Gewerbe":
            removeDataset('Sonstiges verarbeitendes Gewerbe');
            $( "#sonst" ).remove();
            checkDiagrammText();
            break;
    }}
  });
});


function checkDiagrammText()
{
  if($("#activeBranchen > button").length == 0){
    $( "#branchenHint" ).css( "display", "block" );
  }
  else{
    $( "#branchenHint" ).hide();
  }
}