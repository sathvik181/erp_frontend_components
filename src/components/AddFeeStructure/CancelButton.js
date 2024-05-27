import React from 'react'
import "./CancelButton.css"
import DangerImage from "./danger.png"
export const CancelButton = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          {/* <button className="close-button" onClick={onClose}>Cancel ✕</button> */}
          <div className="modal-content">
            <div className="modal-icon">
            <img className='DangeImage' src={DangerImage} alt="Description of the image" style={{width:'40px',height:'40px'}} />
              {/* <span>⚠️</span> */}
            </div>
            <div className='boxheadertext'>
            Are you sure you want
                 to cancel?
            </div>
            <div className='boxfoootertext'>
            Also saved progress until now will be erased if you continue with this action
            </div>
           
            <div className="boxfooter">
              <button className="btn-resume" onClick={onClose}>No, resume</button>
              <button className="btn-cancel" onClick={onConfirm}>Yes, Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
}
