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
  let values = Object.values(data);
  console.log(values);
  let keys = Object.keys(data);
  console.log(keys);
  const [series, setSeries] = useState([{
    values
  }]);

  useEffect(() => {
    setSeries([{ data }]);
  }, [data]);

  return (
    <div>
      <div id={`chart-${id}`}>
        <ReactApexChart options={options} series={series} type="bar" height={300} width={450} /> {/* Adjust height and width here */}
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
