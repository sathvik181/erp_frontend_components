import React, {  useState } from 'react'
import { Feeicon, Feesheduleicon } from './Feeicon';
import { SlArrowRight ,SlArrowLeft} from "react-icons/sl";
import {SlArrowDown } from "react-icons/sl";
// import { BiColor } from 'react-icons/bi';
import { FaInfoCircle } from 'react-icons/fa';
import { FaCalendarDay } from "react-icons/fa6";
import { DatePickers } from './DatePicker';
import "./AddFeeShedule.css"
// import { GlobalContext } from './CreateFeeStructure';
import DatePicker from 'react-datepicker';

import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';
const DatePickerWrapper = styled.div`
  position: relative;
  width: 368px;

  .react-datepicker {
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 368px;
    height: 400px;
    gap: 0px;
    border-radius: 4px;
    border: 1px 0px 0px 0px;
    background: rgba(255, 255, 255, 1);
    margin-top: -120px;
    z-index: 1;
    border-bottom: 0;
    border: 1px solid var(--stroke-soft-200, rgba(225, 228, 234, 1));
  }
  
  .react-datepicker__header {
    background-color: #fff;
    border-bottom: none;
    width: 334px
    height: 36px;
    // box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1); 
    // gap: 6px;
    // border-radius: 8px;
    // //
    // display:flex;
    
    //
 
  }
  
  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    
    width: 320px;
  height: 20px;
  padding: 6px;
  gap: 6px;
  border-radius: 8px;
  ////
  display:flex;
  justify-content:center;
  margin-top:10px;
  background-color:  rgba(245, 247, 250, 1);
  margin-left:16px;
  // background-color:red;
  padding-top:10px;
  // padding-down:-100px;
  // color:red;
  color: rgba(82, 88, 102, 1);

  }
  // days
  .react-datepicker__day-name, 
  .react-datepicker__day, 
  .react-datepicker__time-name {
    width: 2.75rem;
    line-height: 2.75rem;
    margin: 0.166rem;
    color: rgba(153, 160, 174, 1);
    // background-color: red;
    // background: var(--text-soft-400, );
    
  }
  .react-datepicker__day{
    color: rgba(82, 88, 102, 1);
font-size: 14px;
font-weight: 500;
// line-height: 20px;
// letter-spacing: -0.006em;
// text-align: center;


  }
  
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #007bff;
    color: #fff;
    border-radius: 50%;
    // width: 40px;
    // height: 40px;
    // padding: 10px 0px 10px 0px;
    // gap: 8px;
    border-radius: 8px;
    // //
  
font-size: 14px;
font-weight: 500;
// line-height: 20px;
// letter-spacing: -0.006em;
// text-align: center;


  }

  .react-datepicker__day--in-selecting-range, 
  .react-datepicker__day--in-range {
    // background-color: red;
    color: #000;
    
  }
  
  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next {
    top: 23px;
    background: var(--bg-white-0, rgba(255, 255, 255, 1));
    box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);
    width: 24px;
    height: 24px;
    padding: 2px ;
    gap: 2px;
    border-radius: 6px;
    ////
    
  }
  
  .react-datepicker__navigation--previous {
    left: 20px;
    
  }

  .react-datepicker__navigation--next {
    right: 28px;
  }
  .button-group {
    position: absolute;
    // top: -50px; /* Adjust as needed to position above DatePicker */
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 16px;
    // width: 100%;
    background: rgba(255, 255, 255, 1);
    z-index: 2;
    top:250px;
    border: 1px solid var(--stroke-soft-200, rgba(225, 228, 234, 1));
    width: 338px;
    padding-right:10px;
  }
  
  .button-group button {
    width: 160px;
    height: 36px;
    padding: 8px 0px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .button-group .cancel-button {
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(225, 228, 234, 1);
    box-shadow: 0px 1px 2px 0px rgba(10, 13, 20, 0.03);
  }

  .button-group .apply-button {
    background: rgba(51, 92, 255, 1);
    color: #fff;
  }
`;

export const AddFeeShedule = ({handleprogress}) => {
  // const {progress,setprogress}= useContext(GlobalContext);
  const [startDate, setStartDate] = useState(null);
  const [applydate,setapplydate]=useState(false)
  const [opencalendar,setopencalendar]=useState(false);
   const [startDate2, setStartDate2] = useState(null);
  const [applydate2,setapplydate2]=useState(false)
  const [opencalendar2,setopencalendar2]=useState(false);
    const classes = ['Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState(new Array(classes.length).fill(false));
    const [moreoptiondropdown,setmoreoptiondropdown] =useState(false);
    const handleClickCheckbox = async(index,className) => {
      // console.log(className);
      // if(checkedItems[index]) setSelectedClasses([...selectedClasses,className]);
      setCheckedItems((prevState) => {
        const newCheckedItems = [...prevState];
        newCheckedItems[index] = !newCheckedItems[index];
        return newCheckedItems;
      });
      // await handleClassChange(className);
      // console.log(selectedClasses);
    };
    const handlecalendarselect=()=>{
      setopencalendar(false);
    }
    const handlecalendar=(value)=>{
      if(value==1)
      setopencalendar(true);
    else setopencalendar2(true);
      console.log("ssfdfdf");
    }
    const handlemoreoption =()=>{
     setmoreoptiondropdown(!moreoptiondropdown);
    }
      return (
          <div className="container" >
            <div className="header">
              {/* <img src="your-icon-url.png" alt="Icon" /> */}
              <div className="headericon">

              <Feesheduleicon/>
              </div>
              <div className="headertextbody">
                  <div className="headertext1">
                  Add Schedule to Fee Structure
                  </div>
             <div className="headertext2">
             Add Due dates and Fee amount for the terms
             </div>
              <p></p>
  
              </div>
            </div>
            <div className="wholegrid">
  
            
            <div className="grid-header">
          <div className="grid-item1">Name of Term</div>
          <div className="grid-item">Fee Amount %</div>
          <div className="grid-item">Fee In Amount </div>
          <div className="grid-item">Due Date</div>
        </div>
        <div className="grid">
          <div className="grid-item" style={{width:'280px'}}>
          <span className="sec-tag1" >TERM 1</span>
          </div>
          <div className="grid-item">
          <input type="text" placeholder="Enter amount in %" />
        </div>
        <div className="grid-item">
          <input type="text" placeholder="NA" />
        </div>
        <div className="grid-item" >
        <div className="griddate">
          <div className="calendaricon"  >
            {opencalendar &&
             <DatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={date => {setStartDate(date);}}
          // showMonthYearPicker
          // onSelect={handlecalendarselect}
          inline
        
      />
      <div className="button-group">
        <button className="cancel-button"  onClick={() => {setopencalendar(false);console.log(opencalendar)}}>Cancel</button>  
        <button className="apply-button" onClick={() => {setopencalendar(false);setapplydate(true)}}>Apply</button>
      </div>  
    </DatePickerWrapper>  }
        {!applydate && <FaCalendarDay style={{cursor:'pointer'}} onClick={() => {handlecalendar(1)}}/>}
          </div>
    {!applydate && <div onClick={() => {handlecalendar(1)}} style={{cursor:'pointer'}}>Select a date</div>  }
    {applydate && <div>{startDate.toLocaleDateString()}</div>}

          </div>
        </div>
     
        
        </div>
        <div className="grid">
          <div className="grid-item" style={{width:'280px'}}>
          <span className="sec-tag1" >TERM 2</span>
          </div>
          <div className="grid-item">
          <input type="text" placeholder="Enter amount in %" />
        </div>
        <div className="grid-item">
          <input type="text" placeholder="NA" />
        </div>
        <div className="grid-item" onClick={handlemoreoption}>
        <div className="griddate">
              <div className="calendaricon"  >
            {opencalendar2 &&
             <DatePickerWrapper>
      <DatePicker
        selected={startDate2}
        onChange={date => {setStartDate2(date);}}
          // showMonthYearPicker
          // onSelect={handlecalendarselect}
          inline
        
      />
      <div className="button-group">
        <button className="cancel-button"  onClick={() => {setopencalendar2(false);console.log(opencalendar2)}}>Cancel</button>  
        <button className="apply-button" onClick={() => {setopencalendar2(false);setapplydate2(true)}}>Apply</button>
      </div>  
    </DatePickerWrapper>  }
        {!applydate2 && <FaCalendarDay style={{cursor:'pointer'}} onClick={() => {handlecalendar(2)}}/>}
          </div>
    {!applydate2 && <div onClick={() => {handlecalendar(2)}} style={{cursor:'pointer'}}>Select a date</div>  }
    {applydate2 && <div>{startDate2.toLocaleDateString()}</div>}

          </div>
        {/* </div> */}
        </div>
     
        
        </div>
        
     
        <div className="total-row">
          <span className='Totalfee'>Total Fee Amount</span>
          <span className='Totalper'>Total in %</span>
          <span className='TotalRupees'> Total in ₹</span>
        </div>
        </div>
        <div className="concession">
  
    
        </div>
       
      <div className='buttons'>
       <div className="backbutton" >
  
        <button type='submit'className='back-button' onClick={()=>{handleprogress(1)}}>
        <div className="lefticon"><SlArrowLeft size={10} strokeWidth={90}/> </div> 
         Back
        </button>
       </div>
      <button type="submit" className="continue-button1" onClick={()=>{handleprogress(3)}}>Save and Continue
          <div >
          <SlArrowRight  size={9} strokeWidth={70}/>
              </div> 
            </button>
        </div>
          </div>
     
        );
}
