import React, { useEffect, useRef, useState } from 'react'
import { Feeicon } from './Feeicon';
import { SlArrowRight ,SlArrowLeft} from "react-icons/sl";
import {SlArrowDown } from "react-icons/sl";
import { FaInfoCircle } from 'react-icons/fa';
import "./AddFeeStructure.css";
// import { CiCirclePlus } from "react-icons/ci";
import { HiOutlinePlusSmall } from "react-icons/hi2";

// import { GlobalContext } from './CreateFeeStructure';
export const AddFeeStructure = ({handleprogress}) => {
  // setprogress(progress+1);
  const [filled,setfilled]=useState(0);
  // const {progress,setprogress}= useContext(GlobalContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [classes,setclasses] = useState(['Tution fee', 'Fee 2', 'Fee 3', 'Fee 5', 'Fee 6']);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Array(classes.length).fill(false));
  // const [moreoptiondropdown,setmoreoptiondropdown] =useState(false);
  const [concessionbox,setconcessionbox]=useState(false);
  const [moreinfo,setmoreinfo] =useState(new Array(classes.length+1).fill(false));
  const [newfeetype, setnewfeetype] = useState('');
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

  
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handlePopup = (value) => {
   console.log(value);
   if(value==="save"){
    setclasses([...classes,newfeetype]);
    console.log(classes);
    // setclasses((prevState) => {
    //   const newclasses = [...prevState,newfeetype];
    //   newCheckedItems[index] = !newCheckedItems[index];
    //   return newCheckedItems;
    // });
   }
     setIsPopupOpen(!isPopupOpen);
   }
  const handleconcessionbox=()=>{
    setconcessionbox(!concessionbox)
  }
  const handleClickCheckbox = async(index,className) => {
    // console.log(className);
    // if(checkedItems[index]) setSelectedClasses([...selectedClasses,className]);
    if(checkedItems[index]==false) await setfilled(filled+1);
    else await setfilled(filled-1);
    setCheckedItems((prevState) => {
      const newCheckedItems = [...prevState];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
    console.log(filled);
    // await handleClassChange(className);
    // console.log(selectedClasses);
  };
  const handlemoreoption =(index)=>{
    setmoreinfo((prevState) => {
      const newmoreinfo = [...prevState];
      newmoreinfo[index] = !newmoreinfo[index];
      return newmoreinfo;
    });
    // setmoreinfo(!moreoptiondropdown);
  }
    return (
        <div className="container" style={{marginLeft:'430px'}}>
          <div className="header">
            {/* <img src="your-icon-url.png" alt="Icon" /> */}
           <div>

            <Feeicon/>
            </div> 
            <div className="headertextbody">
                <div className="headertext1">
                Add Schedule to Fee Structure
                </div>
           <div className="headertext2">
           Provide essential information to proceed.
           </div>
            <p></p>

            </div>
          </div>
          <div className="wholegrid">

          
          <div className="grid-header">
        <div className="grid-item1">Category</div>
        <div className="grid-item">Fee Amount</div>
        <div className="grid-item">Tax <span className="optional">(optional)</span></div>
        <div className="grid-item">More options</div>
      </div>
      {classes.map((className, index) => ( checkedItems[index] &&
      <div className="tablebody" style={{ background: moreinfo[index]? 'rgba(253, 253, 253, 1)':''}}>

      <div className="grid">
        <div className="grid-item">
        <div className="select-classes-container">
            <div className="selected-classes1"  >
              <div className='componentselect' style={{marginTop:'14px'}}>
             <label htmlFor="">{className}</label>
              {/* <span className="dropdown-icon"><SlArrowDown size={10} strokeWidth={80} /></span> */}

              </div>
            </div>
            
          </div>
        </div>
        <div className="grid-item">
          <input type="text" placeholder="Enter amount" />
        </div>
        <div className="grid-item">
          <input type="text" placeholder="Enter amount" />
        </div>
        <div className="grid-item"   >

         { !moreinfo[index] &&  <span className="dropdown-icon1" ><SlArrowDown size={10} strokeWidth={80} onClick={() =>handlemoreoption(index)} /></span>}
         {moreinfo[index] && <SlArrowRight  size={9} strokeWidth={70} onClick={() =>handlemoreoption(index)}/>}
         <svg  style={{marginLeft:'25px',cursor:'pointer'}}  onClick={()=>handleClickCheckbox(index)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M9.99956 8.93955L13.7121 5.22705L14.7726 6.28755L11.0601 10.0001L14.7726 13.7126L13.7121 14.7731L9.99956 11.0606L6.28706 14.7731L5.22656 13.7126L8.93906 10.0001L5.22656 6.28755L6.28706 5.22705L9.99956 8.93955Z" fill="#FB3748"/>
</svg>

        </div>
      </div>
      { moreinfo[index] && <div className='GSTrow' style={{width:'882px'}} >
     
     <div className="gstcol">
     <div className="toggletext">
       <label className="toggle-switch">
     <input type="checkbox" />
     <span className="slider"></span>
   </label>
     Add GST to this category?
       </div>
     <div className="grid-item">
       <input type="text" placeholder="Ex. 8%" />
     </div>

     </div>
     <div className="gstcol">
       <div className="toggletext">
       <label className="toggle-switch">
     <input type="checkbox" placeholder="Ex. 2000" />
     <span className="slider"></span>
   </label>
     Add Surcharge
       </div>
       <div className="grid-item">
         <input type="text" placeholder="Enter amount" />
       </div>

       </div>
   </div>}
      </div>
    
    
    ))}
    <div className="grid" style={{ background: moreinfo[classes.length+1] ? 'rgba(253, 253, 253, 1)':''}}>
        <div className="grid-item" >
        <div className="select-classes-container">
            <div className="selected-classes1"  onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <div className='componentselect' style={{marginTop:'14px'}}>
             <label htmlFor="">Select a Component</label>
              <span className="dropdown-icon"><SlArrowDown size={10} strokeWidth={80} /></span>

              </div>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu" ref={dropdownRef} style={{width:'300px',height:'296px',marginTop:'-20px'}}>
                {classes.map((className, index) => (
                    <div className="">
                   
                  <div key={index} className="dropdown-item">
                    {!checkedItems[index] && (
            <div className="emptycheckbox" 
            onClick={() => handleClickCheckbox(index,className)}
            >
               
            </div>
          )}
          {checkedItems[index] && (
            <span className={'checkbox checked'} style={{marginTop:'4px'}} onClick={() => {handleClickCheckbox(index,className)}}></span>
           
          )}       
                  <div className='dropdownrightelements'>
                    <label  style={{fontWeight:400,width:'212px'}}>{className} </label>

                    <div className="righticon1" style={{marginLeft:'170px'}}>
{/* {checkedItems[index] && <span className="dropdown-icon" onClick={() =>handlemoreoption(index)} ><SlArrowDown size={10} strokeWidth={78} /></span>} */}
                        
{/* {!checkedItems[index] &&     < SlArrowRight  size={9} strokeWidth={70}/>} */}
            </div> 
                  </div>
                  
                </div>
               
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid-item">
          <input type="text" placeholder="Enter amount" />
        </div>
        <div className="grid-item">
          <input type="text" placeholder="Enter amount" />
        </div>
        <div className="grid-item" onClick={() =>handlemoreoption(classes.length+1)}
        // onClick={() =>handlemoreoption(index)}
        >

         { !moreinfo[classes.length+1] &&  <span className="dropdown-icon1" onClick={() =>handlemoreoption(classes.length+1)} ><SlArrowDown size={10} strokeWidth={80}/></span>}
         {moreinfo[classes.length+1] && <SlArrowRight  size={9} strokeWidth={70} onClick={() =>handlemoreoption(classes.length+1)}/>}
        </div>
      </div>
      {moreinfo[classes.length+1] && <div className='GSTrow' style={{width:'882px'}} >
     
     <div className="gstcol" >
     <div className="toggletext">
       <label className="toggle-switch">
     <input type="checkbox" />
     <span className="slider"></span>
   </label>
     Add GST to this category?
       </div>
     <div className="grid-item">
       <input type="text" placeholder="Ex. 8%" />
     </div>

     </div>
     <div className="gstcol">
       <div className="toggletext">
       <label className="toggle-switch">
     <input type="checkbox" placeholder="Ex. 2000" />
     <span className="slider"></span>
   </label>
     Add Surcharge
       </div>
       <div className="grid-item">
         <input type="text" placeholder="Enter amount" />
       </div>

       </div>
   </div>}
    
      <div className="total-row">
        <span className='Totalfee'>Total Fee Amount</span>
        <span className='Notavailable'>Not available</span>
      </div>
      </div>
      <div className="concession">

      <label className="toggle-switch" >
        <input type="checkbox" onClick={handleconcessionbox}/>
        <span className="slider"></span>
      </label>
      <span className="label1">
        Add Concession to this Fee Structure?
        <FaInfoCircle  size={15} className="info-icon" />
      </span>
      </div>
      {concessionbox && <div className="concession-input">
          <input type="text" placeholder="Ex. 8%" />
        </div>}
      <div className="footer" >

      <div className="add-category-button" onClick={()=>handlePopup("open")}>
      <span className="icon">+</span>
      <span>
      Add a Category
        </span>
    </div>
    <div className='buttons'>
     <div className="backbutton" onClick={()=>handleprogress(0)}>

      <button type='submit'className='back-button'>
      <div className="lefticon"><SlArrowLeft size={10} strokeWidth={90}/> </div> 
       Back
      </button>
     </div>
    <button type="submit" className="continue-button1" style={{background:filled>0?'rgba(51, 92, 255, 1)':'',color: filled>0?'rgba(255, 255, 255, 1)':''}} onClick={()=>handleprogress(2)}>Save and Continue
        <div >
        <SlArrowRight  size={9} strokeWidth={70}/>
            </div> 
          </button>
      </div>
        </div>
        {/* <div className="div" onClick={handlePopup}>sdsds</div> */}
       {isPopupOpen && <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">

          <span>
          <div className="icon-container">
      <HiOutlinePlusSmall className="icon" />
    </div>

          Add New Fee type
          </span>
       
          <button className="close-button" onClick={()=>handlePopup("cancel")}>×</button>
        </div>
        <div className="popup-body">

          <label>
            Enter Name of New Fee type <span>*</span>
          </label>
            <input type="text" placeholder="Ex. Maintenance Fee" onChange={e => setnewfeetype(e.target.value)}/>
        </div>
        <div className="popup-footer">
          <button className="cancel-button" onClick={()=>handlePopup("cancel")}>Cancel</button>
          <button className="save-button"  onClick={()=>handlePopup("save")}>Save</button>
        </div>
      </div>
    </div>}
    
    </div>
      );
}
