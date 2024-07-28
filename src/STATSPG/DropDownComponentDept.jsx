import React, { useState } from 'react';


const DepartmentDropdown = ({ onDeptChange }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleChange = (event) => {
    let dept = event.target.value
    setSelectedDepartment(dept);
    onDeptChange(dept);
  };

  const departments = [
    'CO',
    'EL',
    'MH',
    'CI',
    'CH',
    'Biotechnology',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Humanities',
  ];

  return (
    <div>
      <label  className='DEPT-FONT' htmlFor="department">DEPT: </label>
      <select className='DEPT-drop-down' id="department" value={selectedDepartment} onChange={handleChange}>
        <option value="" disabled>Select department</option>
        {departments.map((department, index) => (
          <option key={index} value={department}>
            {department}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentDropdown;
