import React,{useState} from "react";
function Reportfilter(){
    const [filters, setFilters] = useState({
        onAccount:'',
        placed: false,
        intrested: false,
        male:false,
        female:false,
        batch:'',
        dept:'',
        salaryOperator:'',
        salaryAmount:'',
        groupBy:'',

    });


const handleChange =(e)=>
{
    const {name,value,type,checked}=e.target;
    setFilters((prevFilters) =>({
    ...prevFilters,
    [name]:type === 'checkbox' ? checked:value,
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch("https://scettnp-backend.onrender.com/report", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(filters),
                });
                const data = await response.json();
                console.log(data);
                }
    catch(error){
        console.error(error);
        }
    };

    return(
        <form onSubmit={handleSubmit}  className="onaccountdiv">
            <div className="line1">
                <label>
                    on Account:
                    <select name="onAccount" value={filters.onAccount} onChange={handleChange}>
                        <option value="">Select account</option>
                        <option value="student">Student</option>
                        <option value="company">company</option>
                    </select>
                </label>

                <label>
                    placed:
                    <input 
                    type="checkbox" 
                    name="placed"
                    checked={filters.placed}
                    onChange={handleChange}
                    />
                </label>

                <label>
                  Intrested:
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
                  female:
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
                {/*<option value="all">all</option>*/}
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
                Salary :
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
    );
}
export default Reportfilter;
