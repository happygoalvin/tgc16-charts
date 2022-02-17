const options = {
    // chart settings
    chart : {
        type : 'line',
        height: "100%"
    },
    series : [
        {
            name: 'deals closed',
            data: [3000,3200,4100,1500,1000,2000,7000]
        },
        {
            name: 'deals rejected',
            data: [1500,1000,500,1200,1500,500,2000]
        }
    ],
    xaxis: {
        categories: [1999,2000,2001,2002,2003,2004,2005]
    }
}
const divChart = document.querySelector('#chart');
const chart = new ApexCharts(divChart, options);
chart.render();
