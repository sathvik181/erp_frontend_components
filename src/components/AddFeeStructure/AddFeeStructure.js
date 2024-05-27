import React from 'react'
import "./AddFeeStructure.css"
import { Feeicon } from './Feeicon';
import { SlArrowRight ,SlArrowLeft} from "react-icons/sl";
// import { BiColor } from 'react-icons/bi';
import { FaInfoCircle } from 'react-icons/fa';
export const AddFeeStructure = () => {
    return (
        <div className="container">
          <div className="header">
            {/* <img src="your-icon-url.png" alt="Icon" /> */}
            <Feeicon/>
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
        <div className="grid-item">Category</div>
        <div className="grid-item">Fee Amount</div>
        <div className="grid-item">Tax <span className="optional">(optional)</span></div>
        <div className="grid-item">More options</div>
      </div>
      <div className="grid">
        <div className="grid-item">
          <select>
            <option className='Category'> 
            Select a Category </option>
            <option>Tuition Fees</option>
            <option>Laboratory Fees</option>
            <option>Sports Fees</option>
          </select>
        </div>
        <div className="grid-item">
          <input type="text" placeholder="Enter amount" />
        </div>
        <div className="grid-item">
          <input type="text" placeholder="Enter amount" />
        </div>
        <div className="grid-item">
          <select>
            <option></option>
            <option>Option 2</option>
          </select>
        </div>
      </div>
      <div className="total-row">
        <span className='Totalfee'>Total Fee Amount</span>
        <span className='Notavailable'>Not available</span>
      </div>
      </div>
      <div className="concession">

      <label className="toggle-switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <span className="label1">
        Add Concession to this Fee Structure?
        <FaInfoCircle  size={15} className="info-icon" />
      </span>
      </div>
      <div className="footer">

      <div className="add-category-button" >
      <span className="icon">+</span>
      <span>
      Add a Category
        </span>
    </div>
    <div className='buttons'>
     <div className="backbutton">

      <button type='submit'className='back-button'>
      <div className="lefticon"><SlArrowLeft size={10} strokeWidth={90}/> </div> 
       Back
      </button>
     </div>
    <button type="submit" className="continue-button1">Save and Continue
        <div >
        <SlArrowRight  size={9} strokeWidth={70}/>
            </div> 
          </button>
      </div>
        </div>
    </div>
      );
}
