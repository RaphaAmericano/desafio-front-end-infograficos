//Grafico
new Chartist.Bar('.ct-chart', {
  labels: ['Governo', 'Carnaval', 'Esporte', 'Férias', 'Outros'],
  series: [
    [75, 50, 45, 30, 25]
  ]
}, {
	width: '100%',
	height: '100%',
  stackBars: true
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});