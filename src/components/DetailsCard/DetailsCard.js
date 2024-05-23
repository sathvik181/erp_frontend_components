import React, { useState } from 'react'
import '../DetailsCard/DetailsCard.css'
import { CiSearch } from "react-icons/ci";
import { TbSortDescending } from "react-icons/tb";
import { BsFilter } from "react-icons/bs";
import EllipsisMenu from '../CTA(3 Dots)/EllipsisMenu';

const initialData = [
    { id: 1, name: 'James Brown', email: 'james@alignui.com', title: 'Marketing Manager', project: 'Monday.com', document: 'brown-james.pdf', documentSize: '2.4 MB', status: 'Active', memberSince: 'Since Aug, 2021' },
    { id: 2, name: 'Sophia Williams', email: 'sophia@alignui.com', title: 'HR Assistant', project: 'Notion', document: 'williams-sophia.pdf', documentSize: '2.4 MB', status: 'Active', memberSince: 'Since Aug, 2021' },
    { id: 3, name: 'Arthur Taylor', email: 'arthur@alignui.com', title: 'Entrepreneur / CEO', project: 'Spotify', document: 'taylor-arthur.pdf', documentSize: '2.4 MB', status: 'Absent', memberSince: 'Since Aug, 2021' },
    { id: 4, name: 'Emma Wright', email: 'emma@alignui.com', title: 'Front-end Developer', project: 'Formcarry', document: 'wright-emma.pdf', documentSize: '1.9 MB', status: 'Active', memberSince: 'Since Sep, 2022' },
    { id: 5, name: 'Matthew Johnson', email: 'matthew@alignui.com', title: 'Data Software Engineer', project: 'Loom', document: 'johnson-matthew.pdf', documentSize: '2.9 MB', status: 'Absent', memberSince: 'Since Feb, 2022' },
    { id: 6, name: 'Laura Perez', email: 'laura@alignui.com', title: 'Fashion Designer', project: 'Tidal', document: 'perez-laura.pdf', documentSize: '2.5 MB', status: 'Absent', memberSince: 'Since Mar, 2022' },
    { id: 7, name: 'Wei Chen', email: 'wei@alignui.com', title: 'Operations Manager', project: 'Dropbox', document: 'chen-wei.pdf', documentSize: '2.6 MB', status: 'Active', memberSince: 'Since July, 2021' },
  ];

export const DetailsCard = () => {
    // eslint-disable-next-line
    const [data, setData] = useState(initialData);
    const [active, setActive] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [storefilterdata,setstorefilterdata] = useState(data);
 const [toggleSort,settoggleSort]=useState(false);

const handleData=(key)=>{
    if(key==="All"){setFilteredData(initialData);
        setstorefilterdata(initialData);
    }
    else if(key==="Absent"){
        const filtered = data.filter((item) =>
            item.status.includes("Absent")
          );
      
          setFilteredData(filtered);
          setstorefilterdata(filtered);
        //   setstorefilterdata(filtered);
        //   setData(filtered);
    }
    else {
        const filtered = data.filter((item) =>
            item.status.includes("Active")
          );
      
          setFilteredData(filtered);
        //   setData(filtered);
        setstorefilterdata(filtered);
    }
    // console.log(storefilterdata);
}
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
//    console.log(storefilterdata);
    const filtered = storefilterdata.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  }; 
const handleSort=(key)=>{
    console.log(key);
    const sortedData = [...storefilterdata].sort((a, b) => {
        console.log(a[key]);
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
    // console.log(sortedData)
    setFilteredData(sortedData);
    settoggleSort(!toggleSort);
}
    return (
        <div className="Card" >
        <div className="header">
        <div className="toggle-switch">
        <div
        key="All"
        className={`toggle-option ${active === 'All' ? 'active' : ''}`}
        onClick={() => { setActive('All'); handleData("All"); }}
      >
        All({initialData.length})
      </div>
      <div
        key="Active"
        className={`toggle-option ${active === 'Active' ? 'active' : ''}`}
        onClick={() => {setActive('Active');handleData("Active");}}
      >
        Active({data.filter((item) =>
            item.status.includes("Active")
          ).length})
      </div>
      <div
        key="Absent"
        className={`toggle-option ${active === 'Absent' ? 'active' : ''}`}
        onClick={() => {setActive('Absent');handleData("Absent");}}
      >
        Absent({data.filter((item) =>
            item.status.includes("Absent")
          ).length})
      </div>
    </div>
    <div className="search-filter-sort">
      <div className="search-bar">
      <div className="search-icon"><CiSearch size={19}/></div>
      <input type="text"  style={{color: "#99A0AE"}}placeholder="Search..." value={searchQuery} onChange={handleSearch}/>
      {/* <div className="shortcut-icon">⌘ 1</div> */}
    </div>
      <button className="filter-btn" >
      <div className="filter-icon"><BsFilter size={19} /></div>
        Filter</button>
        <div className="sortdropdown">
    
      <button className="sort-btn" onClick={()=>settoggleSort(!toggleSort)}>
      <div className="sort-icon"><TbSortDescending size={19}/></div>
       Sort by
        </button>
        
        <div className="menu-popup1">
          {toggleSort && initialData.length!==0 &&
            Object.keys(initialData[0]).map((item)=><div className="menu-item" onClick={()=>handleSort(item)}>{item}</div>)
          }
        </div>
        </div>
       
      
    </div>

        </div>
        <div className="BodyCard" >
          <table className="table">
            <thead>
              <tr>
              <th > <div className="member-info">
                      <input type="checkbox" />
                      <div className="member-details">
                      Member Name
                      </div>
                    </div>
                    </th>
                <th>Title</th>
                <th>Project</th>
                <th>Member Documents</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {filteredData.length === 0 ? (
            <tr>
              <td colSpan="7" className="no-items">No items found</td>
            </tr>
          ) : (
              filteredData.map((member) => (
                <tr key={member.id}>
                  <td>
                    <div className="member-info">
                      <input type="checkbox" />
                      <div className="member-details">
                        <div className="member-name">{member.name}</div>
                        <div className="member-email">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{member.title}<br/><span className="member-since">{member.memberSince}</span></td>
                  <td>{member.project}</td>
                  <td>
                   {member.document}<br/>
                    <span className="document-size">{member.documentSize}</span>
                  </td>
                  <td>
                    <span className="status">{member.status}</span>
                  </td>
                  <td className='dots'><EllipsisMenu /></td>
                </tr>
              )) ) }
            </tbody>
          </table>
        </div>
        </div>
        
      );
}
