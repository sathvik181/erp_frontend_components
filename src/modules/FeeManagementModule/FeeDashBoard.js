import React from 'react'
import "./FeeDashBoard.css"
export const FeeDashBoard = () => {
  return (
    <div >FeeDashBoard
<div className="headercards" style={{display:'flex',gap:'2px',marginTop:'20px'
    }}>


<div className="fee-container" >
    <div className="header">
       Overall Fee Collected
       <div className="icon">

       <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25ZM8.11584 10.2086L8.21565 9.8006C8.16399 9.82486 8.0807 9.85258 7.96649 9.88414C7.85197 9.9157 7.7489 9.93177 7.65831 9.93177C7.46536 9.93177 7.32952 9.90014 7.25065 9.83657C7.17236 9.773 7.13331 9.65342 7.13331 9.47827C7.13331 9.40887 7.14509 9.30542 7.16973 9.17003C7.19361 9.03373 7.22108 8.91261 7.25161 8.80666L7.62419 7.48759C7.66068 7.36653 7.68571 7.23344 7.69916 7.08818C7.71292 6.94325 7.71932 6.84185 7.71932 6.78429C7.71932 6.50614 7.62182 6.28041 7.42676 6.10629C7.2317 5.93229 6.95393 5.84529 6.59396 5.84529C6.39365 5.84529 6.18188 5.88088 5.95776 5.952C5.73363 6.02294 5.49933 6.1084 5.25421 6.2082L5.15415 6.6165C5.22719 6.58949 5.31419 6.56043 5.41598 6.53034C5.51732 6.50038 5.61674 6.48489 5.71347 6.48489C5.91096 6.48489 6.04399 6.51856 6.1137 6.58488C6.18342 6.65139 6.21844 6.7697 6.21844 6.93883C6.21844 7.03236 6.20736 7.13626 6.18438 7.24919C6.16172 7.36282 6.13342 7.48298 6.10013 7.6098L5.72595 8.93419C5.69266 9.07336 5.66834 9.19787 5.65304 9.30843C5.63786 9.41886 5.63057 9.52724 5.63057 9.63262C5.63057 9.90482 5.73114 10.1292 5.93222 10.3063C6.13329 10.4826 6.41523 10.5714 6.77769 10.5714C7.01372 10.5714 7.22088 10.5406 7.39917 10.4785C7.57727 10.4167 7.81644 10.3268 8.11584 10.2086ZM8.04946 4.8502C8.22352 4.68882 8.31014 4.49254 8.31014 4.26272C8.31014 4.03341 8.22365 3.83675 8.04946 3.67331C7.87584 3.51032 7.66657 3.42857 7.4219 3.42857C7.17646 3.42857 6.96635 3.51013 6.79107 3.67331C6.61579 3.83675 6.52796 4.03334 6.52796 4.26272C6.52796 4.49254 6.61579 4.68875 6.79107 4.8502C6.96667 5.01217 7.17639 5.09321 7.4219 5.09321C7.66664 5.09321 7.87584 5.01217 8.04946 4.8502Z" fill="#CACFD8"/>
</svg>
       </div>

    </div>
        <div className="amount-collected">
            Rs.2.3L
            <div className="total">
            of 3L collected
                </div> 
        </div>
        <div className="progress-bar-container">
            <div className="progress-bar" ></div>
        </div>
        <div className="status">
            <div>
                <div className="circle paid"></div>
                <span>26% amount paid</span>
            </div>
            <div>
                <div className="circle outstanding"></div>
                <span>74% amount outstanding</span>
            </div>
        </div>
        <div className="due-date">
            DUE BY 02 JUNE, 24
        </div>
    </div>
    <div className="fee-container" >
    <div className="header">
    Overall Fee Status by students
       <div className="icon">

       <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25ZM8.11584 10.2086L8.21565 9.8006C8.16399 9.82486 8.0807 9.85258 7.96649 9.88414C7.85197 9.9157 7.7489 9.93177 7.65831 9.93177C7.46536 9.93177 7.32952 9.90014 7.25065 9.83657C7.17236 9.773 7.13331 9.65342 7.13331 9.47827C7.13331 9.40887 7.14509 9.30542 7.16973 9.17003C7.19361 9.03373 7.22108 8.91261 7.25161 8.80666L7.62419 7.48759C7.66068 7.36653 7.68571 7.23344 7.69916 7.08818C7.71292 6.94325 7.71932 6.84185 7.71932 6.78429C7.71932 6.50614 7.62182 6.28041 7.42676 6.10629C7.2317 5.93229 6.95393 5.84529 6.59396 5.84529C6.39365 5.84529 6.18188 5.88088 5.95776 5.952C5.73363 6.02294 5.49933 6.1084 5.25421 6.2082L5.15415 6.6165C5.22719 6.58949 5.31419 6.56043 5.41598 6.53034C5.51732 6.50038 5.61674 6.48489 5.71347 6.48489C5.91096 6.48489 6.04399 6.51856 6.1137 6.58488C6.18342 6.65139 6.21844 6.7697 6.21844 6.93883C6.21844 7.03236 6.20736 7.13626 6.18438 7.24919C6.16172 7.36282 6.13342 7.48298 6.10013 7.6098L5.72595 8.93419C5.69266 9.07336 5.66834 9.19787 5.65304 9.30843C5.63786 9.41886 5.63057 9.52724 5.63057 9.63262C5.63057 9.90482 5.73114 10.1292 5.93222 10.3063C6.13329 10.4826 6.41523 10.5714 6.77769 10.5714C7.01372 10.5714 7.22088 10.5406 7.39917 10.4785C7.57727 10.4167 7.81644 10.3268 8.11584 10.2086ZM8.04946 4.8502C8.22352 4.68882 8.31014 4.49254 8.31014 4.26272C8.31014 4.03341 8.22365 3.83675 8.04946 3.67331C7.87584 3.51032 7.66657 3.42857 7.4219 3.42857C7.17646 3.42857 6.96635 3.51013 6.79107 3.67331C6.61579 3.83675 6.52796 4.03334 6.52796 4.26272C6.52796 4.49254 6.61579 4.68875 6.79107 4.8502C6.96667 5.01217 7.17639 5.09321 7.4219 5.09321C7.66664 5.09321 7.87584 5.01217 8.04946 4.8502Z" fill="#CACFD8"/>
</svg>
       </div>

    </div>
        <div className="amount-collected">
        76% 

            <div className="total">
            students fee pending
                </div> 
        </div>
        <div className="line"></div>
        <div className="status">
            <div>
                <div className="circle paid"></div>
                <span>23 paid</span>
            </div>
            <div>
                <div className="circle pending"></div>
                <span>140 pending</span>
            </div>
            <div>
                <div className="circle overdue"></div>
                <span>20 overdue</span>
            </div>
        </div>
        <div className="due-date">
        280 Total Students
        </div>
    </div>
    <div className="fee-container" >
    <div className="header">
      Fee level actions
       <div className="icon">

       <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25ZM8.11584 10.2086L8.21565 9.8006C8.16399 9.82486 8.0807 9.85258 7.96649 9.88414C7.85197 9.9157 7.7489 9.93177 7.65831 9.93177C7.46536 9.93177 7.32952 9.90014 7.25065 9.83657C7.17236 9.773 7.13331 9.65342 7.13331 9.47827C7.13331 9.40887 7.14509 9.30542 7.16973 9.17003C7.19361 9.03373 7.22108 8.91261 7.25161 8.80666L7.62419 7.48759C7.66068 7.36653 7.68571 7.23344 7.69916 7.08818C7.71292 6.94325 7.71932 6.84185 7.71932 6.78429C7.71932 6.50614 7.62182 6.28041 7.42676 6.10629C7.2317 5.93229 6.95393 5.84529 6.59396 5.84529C6.39365 5.84529 6.18188 5.88088 5.95776 5.952C5.73363 6.02294 5.49933 6.1084 5.25421 6.2082L5.15415 6.6165C5.22719 6.58949 5.31419 6.56043 5.41598 6.53034C5.51732 6.50038 5.61674 6.48489 5.71347 6.48489C5.91096 6.48489 6.04399 6.51856 6.1137 6.58488C6.18342 6.65139 6.21844 6.7697 6.21844 6.93883C6.21844 7.03236 6.20736 7.13626 6.18438 7.24919C6.16172 7.36282 6.13342 7.48298 6.10013 7.6098L5.72595 8.93419C5.69266 9.07336 5.66834 9.19787 5.65304 9.30843C5.63786 9.41886 5.63057 9.52724 5.63057 9.63262C5.63057 9.90482 5.73114 10.1292 5.93222 10.3063C6.13329 10.4826 6.41523 10.5714 6.77769 10.5714C7.01372 10.5714 7.22088 10.5406 7.39917 10.4785C7.57727 10.4167 7.81644 10.3268 8.11584 10.2086ZM8.04946 4.8502C8.22352 4.68882 8.31014 4.49254 8.31014 4.26272C8.31014 4.03341 8.22365 3.83675 8.04946 3.67331C7.87584 3.51032 7.66657 3.42857 7.4219 3.42857C7.17646 3.42857 6.96635 3.51013 6.79107 3.67331C6.61579 3.83675 6.52796 4.03334 6.52796 4.26272C6.52796 4.49254 6.61579 4.68875 6.79107 4.8502C6.96667 5.01217 7.17639 5.09321 7.4219 5.09321C7.66664 5.09321 7.87584 5.01217 8.04946 4.8502Z" fill="#CACFD8"/>
</svg>
       </div>

    </div>
    <div className='pendingdetails'>

        <div className="amount-collected">
            40
            <div className="total">
          students pending
                </div> 
        </div>
        <div className="bultremindfee">
            Bulk Remind Fee
        </div>
    </div>
    <div className="line"></div>
        
        <div className='pendingdetails'>

    <div className="amount-collected">
        40
        <div className="total">
    students overdue
            </div> 
    </div>
    <div className="bultremindfee">
        Bulk Request Fee
    </div>
    </div>
        <div className="due-date" style={{marginTop:'5px',width:'105px'}}>
        2 Actions
        </div>
    </div>
    </div>
    <div className="middlebody">
        <div className="header">
        Overall dues by Grades
       
        <div className="status">
            <div>
                <div className="circle paid"></div>
                <span>Paid</span>
            </div>
            <div>
                <div className="circle pending"></div>
                <span>Pending</span>
            </div>
            <div>
                <div className="circle overdue"></div>
                <span>Overdue</span>
            </div>
        </div>
        </div>
        <div className="classes">
            <div className="item">
                Class1 
                <div className="highest">
                    Highest
                </div>
            </div>
            <div className="item">
                Class2
                <div className="highest">
                    Highest
                </div>
            </div>
        </div>
        <div className="barsbody">
            <div className="percentages">
            <div className="item">60%</div>
            <div className="item">60%</div>
            <div className="item">60%</div>
            <div className="item">60%</div>
            </div>
            <div className="bars">
                <div className="item">

                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
                <div className="bottomclassname">
                Class123
                </div>
                </div>
                <div className="item">

                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
                <div className="bottomclassname">
                Class123
                </div>
                </div>
                <div className="item">

                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
                <div className="bottomclassname">
                Class123
                </div>
                </div>
                <div className="item">

                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
                <div className="bottomclassname">
                Class123
                </div>
                </div>
                <div className="item">

                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
                <div className="bottomclassname">
                Class123
                </div>
                </div>
                <div className="item">

                
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
                <div className="bottomclassname">
                Class123
                </div>
                </div>
                <div className="item">

                
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
                <div className="bottomclassname">
                Class123
                </div>
                </div>
            </div>

        </div>

    </div>
    
    </div>
  )
}
