import React, { useState } from 'react'
import { Profileicon } from './Profileicon';
// import { RiArrowDropDownLine } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import {SlArrowDown } from "react-icons/sl";
import { CiSquareMinus } from "react-icons/ci";
import { FaCheck, FaChevronRight } from 'react-icons/fa';
export const AddFeeDetails = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [selectedClasses, setSelectedClasses] = useState(['Class VI', 'Class VII']);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [checked, setChecked] = useState(false);
    const classes = ['Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'];
    const sections =['IV-A','IV-B','IV-C','IV-D'];
    const [subclasses, setSubclasses] = useState({
        VI: {
          A: true,
          B: true,
          C: true,
        },
        VII: {
          A: false,
          B: false,
          C: false,
        },
      });
    const terms = ['1 Terms','2 Terms','3 Terms','4 Terms'];
    const [checkedItems, setCheckedItems] = useState(new Array(classes.length).fill(false));
    const handleClassChange = async(className) => {
      setSelectedClasses((prevSelected) =>
        prevSelected.includes(className)
          ? prevSelected.filter((c) => c !== className)
          : [...prevSelected, className]
      );
    };
    const handleClickCheckbox = async(index,className) => {
        // console.log(className);
        if(checkedItems[index]) setSelectedClasses([...selectedClasses,className]);
        setCheckedItems((prevState) => {
          const newCheckedItems = [...prevState];
          newCheckedItems[index] = !newCheckedItems[index];
          return newCheckedItems;
        });
        await handleClassChange(className);
        // console.log(selectedClasses);
      };
    return (
      <div className="form-container">
        <div className="form-header">
            
         <Profileicon/>
          <h2>Fee Structure Details</h2>
          <p>Add Fee Structure Name, Classes, Academic Terms</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name of Fee Structure  <div className="mandatory" style={{color:"rgba(251, 55, 72, 1)"}}> *</div></label>
            <input
              type="text"
              id="name"
              placeholder='James Brown'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            
          </div>
            <label htmlFor="id">Enter Academic Programme <div className="mandatory" style={{color:"rgba(251, 55, 72, 1)"}}>*</div></label>
          <div className="form-group">
            <input
              type="text"
              id="id"
              value={id}
              placeholder='James Brown'
              onChange={(e) => setId(e.target.value)}
            />
          </div>
            <label>Select Classes <div className="mandatory" style={{color:"rgba(251, 55, 72, 1)"}}>*</div></label>
          <div className="select-classes-container">
            <div className="selected-classes" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {selectedClasses.map((className, index) => (
                <span key={index} className="class-tag" >{className}</span>
              ))}
              <span className="dropdown-icon"><SlArrowDown size={10} /></span>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {classes.map((className, index) => (
                    <div className="">
                   
                  <div key={index} className="dropdown-item">
                    {!checkedItems[index] && (
            <div className="emptycheckbox" onClick={() => handleClickCheckbox(index,className)}>
               
            </div>
          )}
          {checkedItems[index] && (
            <div className="checkbox-minus" onClick={() => {handleClickCheckbox(index,className)}}>
            
            </div>
          )}
                   
                   
                    
                    
                  <div className='dropdownrightelements'>
                 
                    {/* <span className="dropdown-item-text">{className}</span> */}
                    <label htmlFor={className} style={{fontWeight:400,width:'212px'}}>{className} </label>


                    <div className="righticon">
        < SlArrowRight  size={9} strokeWidth={70}/>
            </div> 
                  </div>
                  
                </div>
                <div className="subdropdown">

                
                  {checkedItems[index]  &&  (
        <div className="subclass-dropdown">
          {Object.keys(subclasses.VI).map((subclass) => (
            <div key={subclass} className="subclass-item">
              <input
                type="checkbox"
                checked={subclasses.VI[subclass]}
                // onChange={() => handleSubclassToggle('VI', subclass)}
              />
              <label>{`VI-${subclass}`}</label>
              <input
                type="text"
                placeholder="Name of programme"
                disabled={!subclasses.VI[subclass]}
              />
            </div>
            
        ))}
            </div>
      )}
      </div>
                  </div>
                ))}
              </div>
            )}
          </div>
            <label htmlFor="terms">Select Number of Academic Term(s)  <div className="mandatory" style={{color:"rgba(251, 55, 72, 1)"}}>*</div></label>
            <div className="select-classes-container">
            <div className="AcademicDropdown"  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
             Select an option
             <span className="dropdown-icon"><SlArrowDown size={10} strokeWidth={78} /></span>
            </div>
            {isDropdownOpen2 && (
              <div className="dropdown-menu">
               {terms.map((termName, index) => (
                  <div key={index} className="dropdown-item">
              <label htmlFor={termName} style={{fontWeight:400,width:'212px'}}>{termName} </label>
                </div>
               ))}
              </div>
            )}
          </div>
          <button type="submit" className="continue-button">Continue
        <div className="righticon">
        <SlArrowRight  size={9} strokeWidth={70}/>
            </div> 
          </button>
        </form>
        Aa
        <label className="custom-checkbox">
      <input 
        type="checkbox" 
        checked={checked} 
        // onChange={handleCheckboxChange} 
      />
      <span className={`checkbox ${checked ? 'checked' : 'checked'}`}></span>
    </label>
 
</div>
    //   </div>
    );
  
}
