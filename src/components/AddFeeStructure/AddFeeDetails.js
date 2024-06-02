import React, { useContext, useEffect, useRef, useState } from 'react'
import { Profileicon } from './Profileicon';
import "./AddFeeStructure.css";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import {SlArrowDown } from "react-icons/sl";
import { CiSquareMinus } from "react-icons/ci";
import { FaCheck, FaChevronRight } from 'react-icons/fa';
// import { GlobalContext } from './CreateFeeStructure';

export const AddFeeDetails = ({handleprogress}) => {
  // const {progress,setprogress}= useContext(GlobalContext);
  // setprogress(progress+1);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [selectedClasses, setSelectedClasses] = useState(['Class VI', 'Class VII']);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [checked, setChecked] = useState(false);
    const classes = ['Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'];
    const sections =['IV-A','IV-B','IV-C','IV-D'];
    const [option,setoption]=useState("Select an option");
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
    const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsDropdownOpen2(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    const handleoptionselect=(termName)=>{
     setoption(termName);
     setIsDropdownOpen2(!isDropdownOpen2);
    }
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
      <div className="form-container" >
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
            {/* <label htmlFor="id">Enter Academic Programme <div className="mandatory" style={{color:"rgba(251, 55, 72, 1)"}}>*</div></label> */}
          {/* <div className="form-group">
            <input
              type="text"
              id="id"
              value={id}
              placeholder='James Brown'
              onChange={(e) => setId(e.target.value)}
            />
          </div> */}
            <label>Select Classes <div className="mandatory" style={{color:"rgba(251, 55, 72, 1)"}}>*</div></label>
          <div className="select-classes-container">
            <div className="selected-classes" style={{display:'flex',alignContent:'left',justifyContent:'left'}} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {selectedClasses.map((className, index) => (
                <span key={index} className="class-tag"  style={{width:'77px'}}>{className}</span>
              ))}
              <span className="dropdown-icon1" ><SlArrowDown size={10} /></span>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu" ref={dropdownRef}>
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
                    <label htmlFor={className} style={{fontWeight:400,width:'212px'}}>{className} </label>

                    <div className="righticon1" style={{marginLeft:'170px'}}>
{checkedItems[index] && <span className="dropdown-icon" style={{marginLeft:'4px'}}><SlArrowDown size={10} strokeWidth={78} /></span>}
                        
{!checkedItems[index] &&     < SlArrowRight  size={9} strokeWidth={70}/>}
            </div> 
                  </div>
                  
                </div>
                <div className="subdropdown">

                
                  {checkedItems[index]  &&  (
        <div className="subclass-dropdown">
          {Object.keys(subclasses.VI).map((subclass) => (
            <div key={subclass} className="subclass-item" style={{marginTop:'10px',marginLeft:'13px'}}>
                <div style={{display:'flex',alignContent:'center'}}>

              <span className={'checkbox checked'} style={{marginTop:'4px'}}></span>
              <label>{`VI-${subclass}`}</label>
                </div>
        
               <span className="sec-tag" >Name of programme</span>
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
            <label >Select Number of Academic Term(s)  <div className="mandatory" style={{color:"rgba(251, 55, 72, 1)"}}>*</div></label>
            <div className="select-classes-container">
            <div className="AcademicDropdown"  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
             {option}
             <span className="dropdown-icon1"><SlArrowDown size={10} strokeWidth={78} /></span>
            </div>
            {isDropdownOpen2 && (
              <div className="dropdown-menu" ref={dropdownRef}>
               {terms.map((termName, index) => (
                  <div key={index} className="dropdown-item" >
              <label  style={{fontWeight:400,width:'212px'}} onClick={()=>{handleoptionselect(termName)}}>{termName} </label>
                </div>
               ))}
              </div>
            )}
          </div>
          <button  className="continue-button" onClick={(e)=>{handleprogress(1);e.preventDefault();}}>Continue
        <div className="righticon">
        <SlArrowRight  size={9} strokeWidth={70}/>
            </div> 
          </button>
        </form>
      
      {/* <span className={'checkbox checked'}></span> */}
    
 
</div>
    //   </div>
    );
  
}
