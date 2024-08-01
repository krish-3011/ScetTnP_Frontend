import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ id, data }) => {
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
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: Object.keys(data),
    }
  });

  // Ensure data is correctly formatted
  const seriesData = Object.values(data).map(item => item.data); // Assuming data contains 'data' array
  
  const [series, setSeries] = useState([{
    name: 'Series 1', // Add a name for the series
    data: seriesData
  }]);

  useEffect(() => {
    const formattedData = {
      name: 'Series 1',
      data: Object.values(data).map(item => item.value) // Adjust based on actual structure
    };
    setSeries([formattedData]);
  }, [data]);

  return (
    <div>
      <div id={`chart-${id}`}>
        <ReactApexChart options={options} series={series} type="bar" height={300} width={450} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
