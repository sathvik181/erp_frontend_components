import React, {  useState } from 'react'
import "./FeeStructure.css"
import { FaBookOpen } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { AddFeeDetails } from './AddFeeDetails';
import { CancelButton } from './CancelButton';
import { RxCross1 } from "react-icons/rx";
import { AddFeeStructure } from './AddFeeStructure';
import { AddFeeShedule } from './AddFeeShedule';
import { Previewandfinalise } from './Previewandfinalise';

// export const  = createContext();
export const CreateFeeStructure = () => {
  const [progress,setprogress]=useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
const handleprogress=(value)=>{
setprogress(value);
console.log(value);
}
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
        <div className="circle"style={{background:progress>0 ?'rgba(31, 193, 107, 1)':''}}>{progress>0  ?<span className={'checkbox checked'} style={{background:'rgba(31, 193, 107, 1)'}}></span>:1}</div>
        <div className="label">Add Fee Details</div>
      </div>
      <div className = {progress>=1 ? 'step active':'step'}>
      <div className="circle"style={{background:progress>1 ?'rgba(31, 193, 107, 1)':''}}>{progress>1  ?<span className={'checkbox checked'} style={{background:'rgba(31, 193, 107, 1)'}}></span>:2}</div>
        <div className="label">Add Fee Structure</div>
      </div>
      <div className={progress>=2 ? 'step active':'step'}>
      <div className="circle"style={{background:progress>2 ?'rgba(31, 193, 107, 1)':''}}>{progress>2  ?<span className={'checkbox checked'} style={{background:'rgba(31, 193, 107, 1)'}}></span>:3}</div>

        <div className="label">Add Fee Schedule</div>
      </div>
      <div className={progress>=3 ? 'step active':'step '}>
      <div className="circle"style={{background:progress>3 ?'rgba(31, 193, 107, 1)':''}}>{progress>3  ?<span className={'checkbox checked'} style={{background:'rgba(31, 193, 107, 1)'}}></span>:4}</div>

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
        {progress===0 && <AddFeeDetails handleprogress={handleprogress}/>}
        {progress===1 && <AddFeeStructure handleprogress={handleprogress}/>}
       {progress===2 && <AddFeeShedule handleprogress={handleprogress}/>}
       {progress===3 && <Previewandfinalise handleprogress={handleprogress}/>}
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
