import React,{useState} from 'react';
import './addcompany.css'



const AddCompanyContainer = () =>
{

    const initialCompanyFormData = {
        CompanyName:'',
        Link:'',
        Logo:'',
        Description:'',
        Address:'',
        Contact:''

       
      };
    
    const [CompanyFormData, setCompanyFormData] = useState(initialCompanyFormData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCompanyFormData({
        ...CompanyFormData,
        [name]: value
      });
    };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      let response = await fetch("https://scettnp-backend.onrender.com/" , {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(CompanyFormData)
        });
        if(response.status === 200){
          alert("new Offer created");
          setCompanyFormData(initialCompanyFormData);
        } else{
          alert("please resubmit ! check all details again");
        }
    
        // // Handle form submission
        // console.log(formData);
        
        // Reset the form to its initial state
        
      };
    
    return(
     <div className="pmainaddoffercontainer">
      <h1 className='addofferheading'>COMPANY DETAILS</h1>
      <hr className='addofferheadinline'/> 
      <form onSubmit={handleSubmit} method='post' className="form-container">
        <div className='addcompanytextbox'>
          <label className='addcompanyinputtext'>Company Name :</label>
          <input type="text" name="CompanyName"  value={CompanyFormData.CompanyName} onChange={handleChange} className="addcompanytext"/>
        </div>
        <div className='addcompanytextbox'>
          <label className='addcompanyinputtext'>Link :</label>
          <input type="text" name="Link" value={CompanyFormData.Link}  onChange={handleChange} className="addcompanytext"/>
        </div>
        <div className='addcompanytextbox'>
          <label className='addcompanyinputtext'>Description :</label>
          <input type="textarea" name="Description" value={CompanyFormData.Description} onChange={handleChange} className="addcompanytext"/>
        </div>
        <div className='addcompanytextbox'>
          <label className='addcompanyinputtext'>Address :</label>
          <input type="textarea" name="Address"  value={CompanyFormData.Address} onChange={handleChange} className="addcompanytext"/>
        </div>
        <div className='addcompanytextbox'>
          <label className='addcompanyinputtext'>Contact:</label>
          <input type="number" name="Contact" value={CompanyFormData.Contact} onChange={handleChange} className="addcompanytext"/>
        </div>
         <button type="submit" className="addoffertext">Submit</button>
        </form>
    </div>
    )
};

export default AddCompanyContainer