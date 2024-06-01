import React, { useState } from 'react';
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
    height: 450px;
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
    // opacity: 0px;
 
  }
  
  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    
    width: 328px;
height: 36px;
padding: 6px 0px 0px 0px;
gap: 6px;
border-radius: 8px;
opacity: 0px;
display:flex;
justify-content:center;
margin-top:10px;
background-color:  rgba(245, 247, 250, 1);
margin-left:16px;

  }
  
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
    // opacity: 0px;
  
font-size: 14px;
font-weight: 500;
// line-height: 20px;
// letter-spacing: -0.006em;
// text-align: center;


  }

  .react-datepicker__day--in-selecting-range, 
  .react-datepicker__day--in-range {
    background-color: #cce5ff;
    color: #000;
    
  }
  
  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next {
    top: 20px;
    
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
    padding: 10px;
    gap: 16px;
    // width: 100%;
    background: rgba(255, 255, 255, 1);
    z-index: 2;
    top:300px;
    border: 1px solid var(--stroke-soft-200, rgba(225, 228, 234, 1));
    width: 348px;
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

export const DatePickers = () => {
    const [startDate, setStartDate] = useState(null);

    return (
      <DatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={date => {setStartDate(date);console.log(startDate)
          ;}}
        inline
      />
      <div className="button-group">
        <button className="cancel-button" onClick={() => setStartDate(new Date())}>Cancel</button>  
        <button className="apply-button" onClick={() => console.log(startDate)}>Apply</button>
      </div>  
    </DatePickerWrapper>     
    );
};
