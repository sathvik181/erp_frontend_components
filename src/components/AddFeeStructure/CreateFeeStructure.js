import React, { useState } from 'react'
import "./FeeStructure.css"
import { FaBookOpen } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { AddFeeDetails } from './AddFeeDetails';
import { CancelButton } from './CancelButton';
import { RxCross1 } from "react-icons/rx";
import { AddFeeStructure } from './AddFeeStructure';

export const CreateFeeStructure = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log('Action confirmed');
    setIsModalOpen(false);
  };
    // let step=0;
    // let index=0;
    // let currentStep=0;
  return (
   <div className="CreateFeeStructure">
    <div className="sidebar">
        <div className="sidebarheader">
            <div className="sidebarheadertext">
            CREATE NEW FEE STRUCTURE

            </div>
            <div className="stepper">
      <div className="step active">
        <div className="circle">1</div>
        <div className="label">Add Fee Details</div>
      </div>
      <div className="step">
        <div className="circle">2</div>
        <div className="label">Add Fee Structure</div>
      </div>
      <div className="step">
        <div className="circle">3</div>
        <div className="label">Add Fee Schedule</div>
      </div>
      <div className="step">
        <div className="circle">4</div>
        <div className="label">Preview & Finalise</div>
      </div>
    </div>
        </div>
        
<div className="helpbox">
    <div className="helpboxheader"><FaBookOpen size={20}/>
    Need Help
    <div className="crossmark">

    <RxCross2 size={17}/>
    </div>
    </div>
<div className="helpboxbody">Learn how to
<span className="subtext"> Create a Fee Structure </span> 
with our guide</div>

<div className="helpbodyfooter">
<Link to="/docs" style={{ color: '#335CFF'}}>Go to Docs</Link>
</div>
</div>

        </div>
        <AddFeeDetails/>
        {/* <AddFeeStructure/> */}
        <div style={{ padding: '20px' }}>
      {/* <h1>React Confirmation Modal Example</h1> */}
      <button onClick={handleModal } className='Cancel' >Cancel <RxCross1 className="crossicon"size={11}strokeWidth={0.5} />
</button>
        <CancelButton  isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}/>
       
        </div>
   </div>
  )
}
