import React, { useState } from 'react';
import './addcompany.css';

const AddCompanyContainer = () => {
    const initialCompanyFormData = {
        CompanyName: '',
        Link: '',
        Logo: null, // Use null for file inputs
        Description: '',
        Address: '',
        Contact: ''
    };

    const [CompanyFormData, setCompanyFormData] = useState(initialCompanyFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyFormData({
            ...CompanyFormData,
            [name]: value // Handle file input
        });
    };

    const handleFileChange = (e) => {
      setCompanyFormData({
          ...CompanyFormData,
          Logo: e.target.files[0] // Store the selected file in state
      });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in CompanyFormData) {
            formData.append(key, CompanyFormData[key]);
        }

        try {
            let response = await fetch("https://scettnp-backend.onrender.com/company", {
                method: 'POST',
                body: formData // Send FormData
            });

            if (response.ok) {
                alert("New company created");
                setCompanyFormData(initialCompanyFormData); // Reset form
            } else {
                const result = await response.json();
                alert(result.message || "Error creating company");
            }
        } catch (error) {
            alert("Error creating company");
        }
    };

    return (
        <div className="pmainaddoffercontainer">
            <h1 className='addofferheading'>COMPANY DETAILS</h1>
            <hr className='addofferheadinline' />
            <form onSubmit={handleSubmit} className="form-container" encType="multipart/form-data">
                <div className='addcompanytextbox'>
                    <label className='addcompanyinputtext'>Company Name :</label>
                    <input type="text" name="CompanyName" value={CompanyFormData.CompanyName} onChange={handleChange} className="addcompanytext" />
                </div>
                <div className='addcompanytextbox'>
                    <label className='addcompanyinputtext'>Link :</label>
                    <input type="text" name="Link" value={CompanyFormData.Link} onChange={handleChange} className="addcompanytext" />
                </div>
                <div className='addcompanytextbox'>
                    <label className='addcompanyinputtext'>Description :</label>
                    <textarea name="Description" value={CompanyFormData.Description} onChange={handleChange} className="addcompanytext" />
                </div>
                <div className='addcompanytextbox'>
                    <label className='addcompanyinputtext'>Address :</label>
                    <textarea name="Address" value={CompanyFormData.Address} onChange={handleChange} className="addcompanytext" />
                </div>
                <div className='addcompanytextbox'>
                    <label className='addcompanyinputtext'>Contact:</label>
                    <input type="number" name="Contact" value={CompanyFormData.Contact} onChange={handleChange} className="addcompanytext" />
                </div>
                <div className='addcompanytextbox'>
                    <label className='addcompanyinputtext'>Logo</label>
                    <input type="file" name="Logo" onChange={handleFileChange} className="addcompanytext" />
                </div>
                <button type="submit" className="addoffertext">Submit</button>
            </form>
        </div>
    );
};

export default AddCompanyContainer;
