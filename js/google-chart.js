$(function() {
  var val = '#FFDB29';
  var mode = 'off';

  $('button[name="turnOn"]').click(function(e) {

    if (mode === 'off') {
      turnOn(e, val), 1000;
      //turnOn(e, val);
      mode = 'on';
      $(this).html('Turn Off');
    }
    else if (mode === 'on'){
      turnOff(e, val);
      mode = 'off';
      $(this).html('Turn On');
    }
  });

  $('#mt-side-menu li').click(function(e) {
    e.preventDefault();
    $('#mt-side-menu li').removeClass('active');
    $(this).addClass('active');
  });
});




function setMenu(eObj) {

}





var init = true;

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(initChart);
function initChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Field');
  data.addColumn('number', 'val');
  var data = google.visualization.arrayToDataTable([
    ['Element', 'Value', { role: 'style' }, { role: 'annotation' } ],
    ['Field 1', 50, '#FF2CD2', 50 ],
    ['Field 2', 60, '#7DF989', 60],
    ['Field 3', 70, '#5DA8F9', 70]
  ]);
  // Create the data table.

  // Set chart options
  var options = {'title':'',
  animation:{
    duration: 1000,
    easing: 'out',
    "startup": true
  },
  'height': 300,
  'chartArea': {'width': '80%', 'height': '100%'},
  'legend': {'position': 'none'},
  'title': {'position': 'none'},
  backgroundColor: '',
  hAxis: {
    textPosition: 'none' ,
    baselineColor: 'transparent',
    textColor: '#FFF',
    gridlines: {
      color: 'transparent'
    }
  },
  vAxis: {
     minValue: 0,
       textColor: '#FFF',
     gridlines: {
       color:'transparent'
     },
  }
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.BarChart(document.getElementById('chart_div'));


function drawChart() {
 chart.draw(data, options);
}


$('input[type="number"]').bind('change mousewheel', function() {

var value1 = $('input[name="value_1"]').val();
var value2 = $('input[name="value_2"]').val();
var value3 = $('input[name="value_3"]').val();

data.setValue(0, 1, value1);
data.setValue(0, 3, value1);

data.setValue(1, 1, value2);
data.setValue(1, 3, value2);

data.setValue(2, 1, value3);
data.setValue(2, 3, value3);
chart.draw(data, options);
});

chart.draw(data, options);
$(window).resize(function(){
  drawChart();

});

}

function turnOn(e, val) {
  e.preventDefault();
  e.stopPropagation();
  $('#outerBulb').animate({'opacity': 1.0}, 100, function() {

    $('#outerGlow').animate({'opacity': 0.4});
    $('#innerGlow').animate({'opacity': 0.4});
  });

  $('#outerBulb').css('fill', val);
  $('#outerGlow').css('fill',val);
  $('#innerGlow').css('fill',val);
  $('body').css('background-color','#FFF');
}

function turnOff(e) {
  var val = '#9E9E9E';
  e.preventDefault();
  e.stopPropagation();
  $('#outerGlow').css('opacity',0.0);
  $('#innerGlow').css('opacity',0.0);
  $('#outerBulb').css('fill',val);
  $('#outerGlow').css('fill',val);
  $('#innerGlow').css('fill',val);
  $('body').css('background-color','#000');
}
