import React, { useState, useRef, useEffect } from 'react';
import './EllipsisMenu.css';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
const EllipsisMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="ellipsis-menu-container" ref={menuRef}>
      <button className="ellipsis-button" onClick={toggleMenu}>
        &#x22EE; {/* Vertical ellipsis */}
      </button>
      {isOpen && (
        <div className="menu-popup">
          <div className="menu-item"> <div className="menu-icon"><CiEdit size={20} /> </div> Edit</div>
          <div className="menu-item"><div className="menu-icon"><MdOutlineDeleteForever size={22}/></div> Delete</div>
        </div>
      )}
    </div>
  );
};

export default EllipsisMenu;
