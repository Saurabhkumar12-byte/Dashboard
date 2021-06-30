var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Done Dist', 'Not Done Dist', 'Pending Dist'],
        datasets: [{
            label: 'Work Status',
            data: [24, 10, 5,],
            backgroundColor: [
                '#008571',
                '#9e0000',
                'rgb(255, 205, 86)',
            ],
           
            borderWidth: 1
           
        }]
    },
    options: {
        
        scales: {
            y: {
                beginAtZero: false
            }
        },
        layout: {
            padding:{
                right:"20px",
                top:"30px" 
            }
        }
    }
});
var Donut = document.getElementById('myDonut').getContext('2d');
var myDonut = new Chart(Donut, {
    type: 'doughnut',
    data: {
        labels: ['Done Dist', 'Not Done Dist', 'Pending Dist'],
        datasets: [{
            label: 'Work Status',
            data: [24, 10, 5,],
            backgroundColor: [
                '#008571',
                '#9e0000',
                'rgb(255, 205, 86)'
              
            ],
            
            borderWidth: 1
        }]
    }
    
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});
