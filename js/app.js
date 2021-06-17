const sectionsPages = new fullpage('#fullpage', {

    autoScrolling: true, 
    fitToSection: false, 
    fitToSectionDelay: 300, 
    easing: 'easeInOutCubic', 
    scrollingSpeed: 1200,
    css3: true, 
    easingcss3: 'ease-out', 
    loopBottom: true,

    navigation: true, 
    menu: '#menu',
    anchors: ['inicio', 'app',  'evolucion', 'concepto','contacto'],
    navigationTooltips: ['Inicio', 'App','Evolución','Concepto', 'Contacto'],
    showActiveTooltip: false, 

    controlArrows: true, 


});


var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: '2021',
                data: [1, 2, 4, 6, 5, 8],
                backgroundColor: '#78af9f',
                borderColor: '#78af9f',
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});