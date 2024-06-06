import React from 'react'
import  "./Preview.css";
import { CiDiscount1 } from "react-icons/ci";
import { SlArrowRight ,SlArrowLeft} from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";

export const Previewandfinalise = ({handleprogress}) => {
  return (
    <div className="container1"  style={{marginTop:'60px'}}>
<div className="fee-structure" >
      <div className="header">
        <h1>Name of Fee Structure <span>ID: VI-B23</span></h1>
            <div className="secondheader">

        <div className="classes-covered">
          <span >Classes Covered</span>
          <div className="classes">

          <div className="class-tag1">Class V</div>
          <div className="class-tag1">Class VI</div>
          <div className="class-tag1">Class IV</div>
          </div>
          
        </div>
        
        <div className="term-due-dates" >

      
          <span style={{marginLeft:'-38px'}}>Term Due Dates</span>
          <div style={{display:'flex'}}>Term I <span > • 02 June, 2024 <span style={{marginTop:'-10px'}}><GoArrowRight size={28}/></span>
</span>   Term II <span>• 02 June, 2024</span></div>
        </div>
            </div>
      </div>
      <div className="fee-components">
        <h2>Fee Components</h2>
        <div className="wholegrid1" >
  
            
            <div className="grid-header" style={{  gridTemplateColumns: 'repeat(6, 1fr)',width:"846px"}}>
          <div className="grid-item1"  >Name of Fee Category</div>
          <div className="grid-item2" >Fee Amount </div>
          <div className="grid-item3" style={{marginLeft:'15px'}}>Tax </div>
          <div className="grid-item4" style={{marginLeft:'70px'}}>GST</div>
          <div className="grid-item5" >Surcharge</div>
        </div>
        {Array.from({ length: 4 }).map((_, index) => (
        <div className="grid" style={{  gridTemplateColumns: 'repeat(6, 1fr)'}}>
          <div className="grid-item1">
          <span  >Tution Fee</span>
          </div>
          <div className="grid-item2">
            Rs. 25,000
          {/* <input type="text" placeholder="Enter amount in %" /> */}
        </div>
        <div className="grid-item3">
         6%
        </div>
        <div className="grid-item4" >
        NA
        </div>
        <div className="grid-item5" >
        NA
        </div>
     
        
        </div>
           ))}
     
        </div>
        
      </div>
        <div className="footer-concession">
            <span><CiDiscount1 size={26}/>
</span>
         <span>Concession of 5% is applicable to this Fee Structure</span>
        </div> 
        <div className="fee-components" style={{height:'220px',marginTop:'20px'}}>
        <h2>Fee Schedule</h2>
        <div className="wholegrid1"  style={{height:'240px'}}>
  
            
            <div className="grid-header"  style={{width:"846px"}}>
          <div className="grid-item1"  >Term Name</div>
          <div className="grid-item2" >Fee Percentage</div>
          <div className="grid-item3">Fee Amount </div>
          <div className="grid-item4">Due Date</div>
        
        </div>
        {Array.from({ length: 2 }).map((_, index) => (
        <div className="grid" >
          <div className="grid-item1">
          <span  >Term 1</span>
          </div>
          <div className="grid-item2">
            30%
          {/* <input type="text" placeholder="Enter amount in %" /> */}
        </div>
        <div className="grid-item3">
         Rs. 60,000
        </div>
        <div className="grid-item4" >
        NA
        </div>
        </div>
           ))}<div className="total-row" style={{borderTop: '0',borderBottom: '0' }}>
           <span className='Totalfee'>Total Fee Amount</span>
           <span className='Totalper' style={{marginLeft:'-10px'}}>100%</span>
           <span className='TotalRupees' style={{marginLeft:'70px'}}>  ₹60,000</span>
         </div>
         
     
        </div>
        
      </div>
        
      
      
    </div>
    <div className='buttons'  style={ {width:'902px',marginTop:'108px',display:'flex',marginLeft:'-25px'}} >
       <div className="backbutton" style={{marginRight:'-100px'}}>
  
        <button type='submit'className='back-button' onClick={()=>{handleprogress(2)}}>
        <div className="lefticon"><SlArrowLeft size={10} strokeWidth={90}/> </div> 
         Back
        </button>
       </div>
      <button type="submit" className="continue-button1" style={{background:'rgba(51, 92, 255, 1)',color:'rgba(255, 255, 255, 1)'}}>Finalise & Save
          <div >
          <SlArrowRight  size={9} strokeWidth={70}/>
              </div> 
            </button>
        </div>
        
    </div>
  )
}
