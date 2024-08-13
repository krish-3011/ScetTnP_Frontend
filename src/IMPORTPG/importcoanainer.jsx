import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './import.css'; // Import the CSS file

const ImportData = () => {
  const [data, setData] = useState([]);
  const [importType, setImportType] = useState(''); // Track import type

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const ab = e.target.result;
        const wb = XLSX.read(ab, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(ws);
        setData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleImport = () => {
    const route = importType === 'student' ? '/api/add-student' : '/api/student-marks';
    fetch(route, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      console.log('Data imported successfully:', result);
      setData([]);
      setImportType(''); // Reset import type
    })
    .catch(error => console.error('Error importing data:', error));
  };

  return (
    <div className='cont'>
        <div className='buttons'>
      <button className='but' onClick={() => setImportType('student')}>Add Student</button>
      <button className='but' onClick={() => setImportType('marks')}>Student Marks</button>
      </div>
      {importType && (
        <>
          <input 
            type="file" 
            accept=".xlsx, .xls" 
            onChange={handleFileUpload} 
          />
          <button className='but1' onClick={handleImport}>Import</button>
          <table className="table-container">
            <thead>
              <tr>
                {data[0] && Object.keys(data[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ImportData;
