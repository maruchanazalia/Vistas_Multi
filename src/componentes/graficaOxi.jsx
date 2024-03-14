import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../style/graficaOxi.css'

const graficaOxi = () => {
  const seriesData = [{
    name: "Desktops",
    data: [70, 61, 85, 111, 69, 72, 79, 61, 110]
  }];

  const optionsData = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Pulso en el dia',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], 
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'],
    }
  };

  return (
    <div className="contenedor">
      <div id="chart">
        <ReactApexChart options={optionsData} series={seriesData} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default graficaOxi;
