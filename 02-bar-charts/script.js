// chart options
const options = {
    chart:{
        type:'bar', // indicate we want a bar chart
        height:'100%'
    },
    series:[
        {
            name:'Revenue',
            data:[1200000, 650000, 700000, 450000, 30000, 25000]
        },
        {
            name:'loss',
            data:[25000,15000,30000,5000,12000,12500]
        },
    ],
    xaxis:{
        categories:['Jan','Feb','Mar','Apr','May','Jun']
    }
}

const divChart = document.querySelector('#chart');

// create a new apex chart
// the `new ApexCharts(...)` returns a new ApexChart object
const chart = new ApexCharts(divChart, options);
chart.render(); // instruct the chart to draw itself
