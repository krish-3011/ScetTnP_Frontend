import React, { useState } from "react";

function Reportfilter() {
  const [filters, setFilters] = useState({
    onAccount: '',
    placed: false,
    intrested: false,
    male: false,
    female: false,
    batch: '',
    dept: '',
    salaryOperator: '',
    salaryAmount: '',
    groupBy: '',
  });

  const [reportData, setReportData] = useState(null); // Store the report data
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track any error state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset previous errors

    try {
      const response = await fetch("https://scettnp-backend.onrender.com/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setReportData(data); // Set the fetched data into state
    } catch (error) {
      setError(error.message); // Set error if something goes wrong
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="onaccountdiv">
        {/* Filters Form */}
        <div className="line1">
          <label>
            On Account:
            <select name="onAccount" value={filters.onAccount} onChange={handleChange}>
              <option value="">Select account</option>
              <option value="student">Student</option>
              <option value="company">Company</option>
            </select>
          </label>

          <label>
            Placed:
            <input
              type="checkbox"
              name="placed"
              checked={filters.placed}
              onChange={handleChange}
            />
          </label>

          <label>
            Interested:
            <input
              type="checkbox"
              name="intrested"
              checked={filters.intrested}
              onChange={handleChange}
            />
          </label>

          <label>
            Male:
            <input
              type="checkbox"
              name="male"
              checked={filters.male}
              onChange={handleChange}
            />
          </label>

          <label>
            Female:
            <input
              type="checkbox"
              name="female"
              checked={filters.female}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="line2">
          <label>
            Department:
            <select name="dept" value={filters.dept} onChange={handleChange}>
              <option value="">Select Department</option>
              <option value="CO">Computer Science</option>
              <option value="ECE">Electronics & Communication</option>
              <option value="ME">Mechanical Engineering</option>
            </select>
          </label>

          <label>
            Batch:
            <select name="batch" value={filters.batch} onChange={handleChange}>
              <option value="">Select Batch</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </label>

          <div className="salary">
            <label>
              Salary:
              <select name="salaryOperator" value={filters.salaryOperator} onChange={handleChange}>
                <option value="">Select Operator</option>
                <option value="=">=</option>
                <option value="<">{'<'}</option>
                <option value=">">{'>'}</option>
              </select>
            </label>

            <label>
              <input
                type="number"
                name="salaryAmount"
                value={filters.salaryAmount}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="line3">
          <label>
            Group By:
            <select name="groupBy" value={filters.groupBy} onChange={handleChange}>
              <option value="">No Grouping</option>
              <option value="company">Company</option>
              <option value="salary">Salary</option>
              <option value="dept">Department</option>
            </select>
          </label>

          <button type="submit">Generate Report</button>
        </div>
      </form>

      {/* Show Loading state */}
      {loading && <p>Loading...</p>}

      {/* Show error if any */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Render the report data in a table */}
      {reportData && (
        <table border="1" className="report-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Enrollment No.</th>
              <th>Gender</th>
              <th>Cast</th>
              <th>Role</th>
              <th>Company</th>
              <th>Drive Status</th>
              <th>Sector</th>
              <th>Salary</th>
              <th>Selected</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(reportData).map((companyId) =>
              reportData[companyId].map((student) =>
                student.applied.map((application) => (
                  <tr key={application._id}>
                    <td>{student.name}</td>
                    <td>{student.enrollment_no}</td>
                    <td>{student.gender}</td>
                    <td>{student.cast}</td>
                    <td>{application.role}</td>
                    <td>{application.company}</td>
                    <td>{application.drive}</td>
                    <td>{application.sector}</td>
                    <td>{application.salary.min}</td>
                    <td>{application.selected.includes(student._id) ? "Yes" : "No"}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Reportfilter;