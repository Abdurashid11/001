const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['COCA COLA', 'PEPSI', 'DR PEPPER', 'COOL COLA', 'MILLIY COLA', 'FANTA'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 9, 5, 6, 10],
      backgroundColor: [
        'rgba(255, 99, 133, 0.53)',
        'rgba(54, 163, 235, 0.51)',
        'rgba(255, 207, 86, 0.44)',
        'rgba(75, 192, 192, 0.47)',
        'rgba(153, 102, 255, 0.47)',
        'rgba(255, 160, 64, 0.42)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54,162,235,1)',
        'rgb(255, 145, 0)',
        'rgb(27, 115, 214)',
        'rgba(153,102,255,1)',
        'rgba(255,159,64,1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
