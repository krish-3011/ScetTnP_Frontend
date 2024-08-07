import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ id, data , label }) => {
  const [options] = useState({
    chart: {
      id,
      type: 'bar',
      height: 300, // Adjust the height here
      width: 500,  // Optional: Adjust the width here if needed
      toolbar: {
        show: false, // This removes the toolbar
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        borderRadiusApplication: 'end',
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: label,
    }
  });

  const [series, setSeries] = useState([{
    data
  }]);

  useEffect(() => {
    setSeries([{ data }]);
  }, [data]);

  return (
    <div>
      <div id={`chart-${id}`}>
        <ReactApexChart options={options} series={series} type="bar" height={300} width={500} /> {/* Adjust height and width here */}
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
