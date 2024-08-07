import "./style.css";
import "./header.css";
import "./button.css";
import "./graph.css";
import GaugeComponent from "./GaugeComponent";
import AcademicYearDropdown from "./DropDownComponent";
import DepartmentDropdown from "./DropDownComponentDept";
import React, { useState, useEffect } from 'react';
import ApexChart from "./BarGraphComponent";
import BarChartComponent from "./VBarGraph";

const Graphs = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors
  const [selectedYear , setSelectedYear] = useState();
  const [selectedDept , setSelectedDept] = useState();

  const onYearChange = (year) =>{
    setSelectedYear(year);
  };
  const onDeptChange = (dept) =>{
    setSelectedDept(dept);
  };
  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if(!selectedYear&&!selectedDept){response = await fetch(`https://scettnp-backend.onrender.com/home`);}
        else if(!selectedDept){response = await fetch(`https://scettnp-backend.onrender.com/home?year=${selectedYear}`);}
        else if(!selectedYear){response = await fetch(`https://scettnp-backend.onrender.com/home?dept=${selectedDept}`);}
        else{
        response = await fetch(`https://scettnp-backend.onrender.com/home?year=${selectedYear}&dept=${selectedDept}`);
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        // Calculate placement percentage and add as a new attribute
        if (jsonData.intrested && jsonData.intrested > 0) {
          jsonData.placementPercentage = (jsonData.placed / jsonData.intrested) * 100;
        } else {
          jsonData.placementPercentage = 0;
        }
        // jsonData.highestPackge[2023] = 80000;
        setData(jsonData); // Set the data state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message); // Set the error state if an error occurs
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, [selectedYear, selectedDept]); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there is an error
  }


  return (
    <div className="Stats">
      <div className="graph1and3">
      <div className="graph-1">
      <div className="gantchartandpiechart">
        <GaugeComponent id="1" value={data.intrested} max={data.total} text={"students interested"}/>
        <GaugeComponent id="2" value={data.placed} max={data.intrested} text={"students placed"}/>
        </div>
        <div className="drop-down-pie">
          <div className="drop-down-menu">
            <AcademicYearDropdown onYearChange={onYearChange}/>
          </div>
          <div className="drop-down-menu-2">
            <DepartmentDropdown onDeptChange={onDeptChange} />
          </div>
          <div className="pie-container">
            <div className="piechart" style={{'--pie-val' : `${data.placementPercentage}%` }}>
              <div className="_50 pie_text">{data.placementPercentage}%</div>
              <div className="placement">placement</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Graph2">
        <h2 className="high-pkg-text">HIGHEST PACKAGE</h2>
        <div className="BAR-GRAPH">
          <ApexChart
            id="1"
            // data={data.highestPackge}
            data={Object.values(data.highestPackge)}
            // data={[10000,20000,80000,100000,6000]}
            label={Object.keys(data.highestPackge)}
          />
        </div>
      </div>
      </div>
      <div className="graph3and4">
      <div className="Graph4">
        <div className="BarContainer">
          <BarChartComponent 
          coreData={Object.values(data.sector.core)}
          itData={Object.values(data.sector.IT)}
          managmentData={Object.values(data.sector.managment)}
          // coreData={[0,1,5,2,8]}
          // itData={[2,8,3,0,0]}
          // managmentData={[1,1,1,1,1]}
          label={Object.keys(data.sector.core)}
          />


        </div>
      </div>
      <div className="Graph3">
        <h2 className="avg-pkg-text">AVERAGE PACKAGE</h2>
        <div className="BAR-GRAPH2">
          <ApexChart
            id="2"
            // data={data.averagePackge}
            data={Object.values(data.averagePackge)}
            // data={[10000,2000,8000,100000,6000]}
            label={Object.keys(data.averagePackge)}

          />
        </div>
      </div>
      </div>

    </div>
  );
};

export default Graphs;
