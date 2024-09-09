import React, { useEffect, useState } from 'react';
import { fetchLawData, fetchSectionData } from './api';

const Myform = () => {
  // State variables for form fields
  const [dropdown1, setDropdown1] = useState([]);
  const [lawValue, setLawvalue] = useState('initial value')
  const [sectionValue, setSectionvalue] = useState('select value');
  const [dropdown2, setDropdown2] = useState([]);
  const [textField1, setTextField1] = useState('');
  const [textField2, setTextField2] = useState('');
  const [textField3, setTextField3] = useState('');
  
  useEffect(() => {
    // Fetch data when component mounts
    const loadData = async () => {
      try {
        const result = await fetchLawData();
        setDropdown1(result);
        seyresult[0]);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
    loadSectionData
   
  }, []);

 const getSectionData = (obj)=>{ 
    setLawvalue(obj.value);
    // Fetch section data when dropdown1 changes
    const loadSectionData = async (obj) => {
      try {
        const result = await fetchSectionData(obj);
        console.log('Sections', result);
        setDropdown2(result);
      } catch (error) {
        console.error('Error loading section data:', error);
      }
    };
    loadSectionData(obj.target.value);
    console.log('Section data', dropdown2);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log('Form submitted with values:', {
      dropdown1,
      dropdown2,
      textField1,
      textField2,
      textField3,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dropdown1">Dropdown 1:</label>
        <select
          id="dropdown1"
          value={lawValue}
          onChange={(key) => getSectionData(key)}
        >
          { dropdown1.map((element) => <option key={element.law_id} value={element.law_id}>{element.law_name}</option>) }
        </select>
      </div>

      <div>
        <label htmlFor="dropdown2">Dropdown 2:</label>
        <select
          id="dropdown2"
          value={dropdown2}
          onChange={(e) => setDropdown2(e.target.value)}
        >
          { dropdown2.map((element) => <option key={element.section_id} value={element.section_id}>{element.section_name}</option>) }
        </select>
      </div>

      <div>
        <label htmlFor="textField1">Text Field 1:</label>
        <input
          type="text"
          id="textField1"
          value={textField1}
          onChange={(e) => setTextField1(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="textField2">Text Field 2:</label>
        <input
          type="text"
          id="textField2"
          value={textField2}
          onChange={(e) => setTextField2(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="textField3">Text Field 3:</label>
        <input
          type="text"
          id="textField3"
          value={textField3}
          onChange={(e) => setTextField3(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Myform;