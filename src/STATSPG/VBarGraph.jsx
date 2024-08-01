import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const  BarChartComponent = ({label , coreData , itData , managmentData}) => {
  return (
    <BarChart
    series={[
      { data: coreData, name: 'Core' },
      { data: itData, name: 'IT' },
      { data: managmentData, name: 'Management' },
    ]}
      height={350}
      xAxis={[{ data:label, scaleType: 'band' }]}
      margin={{ top: 5, bottom: 20, left: 1, right: 1 }}
    />
  );
}

export default BarChartComponent;
