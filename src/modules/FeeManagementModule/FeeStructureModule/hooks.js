import { useState } from 'react';

export const useFilled = (initialValue = 0) => {
    const [filled, setFilled] = useState(initialValue);
    return [filled, setFilled];
  };
  
  export const usePopup = (initialValue = false) => {
    const [isPopupOpen, setIsPopupOpen] = useState(initialValue);
    return [isPopupOpen, setIsPopupOpen];
  };
  
  export const useClasses = (initialClasses = ['Tution fee', 'Fee 2', 'Fee 3', 'Fee 5', 'Fee 6']) => {
    const [classes, setClasses] = useState(initialClasses);
    return [classes, setClasses];
  };
  
  export const useDropdown = (initialValue = false) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(initialValue);
    return [isDropdownOpen, setIsDropdownOpen];
  };
  
  export const useCheckedItems = (initialClasses) => {
    const [checkedItems, setCheckedItems] = useState(new Array(initialClasses.length).fill(false));
    return [checkedItems, setCheckedItems];
  };
  
  export const useConcessionBox = (initialValue = false) => {
    const [concessionBox, setConcessionBox] = useState(initialValue);
    return [concessionBox, setConcessionBox];
  };
  
  export const useMoreInfo = (initialClasses) => {
    const [moreInfo, setMoreInfo] = useState(new Array(initialClasses.length + 1).fill(false));
    return [moreInfo, setMoreInfo];
  };
  
  export const useNewFeeType = (initialValue = '') => {
    const [newFeeType, setNewFeeType] = useState(initialValue);
    return [newFeeType, setNewFeeType];
  };

  export const useName = (initialValue = '') => {
    const [name, setName] = useState(initialValue);
    return [name, setName];
  };
  
  export const useId = (initialValue = '') => {
    const [id, setId] = useState(initialValue);
    return [id, setId];
  };
  
  export const useSelectedClasses = (initialValue = ['Class VI', 'Class VII']) => {
    const [selectedClasses, setSelectedClasses] = useState(initialValue);
    return [selectedClasses, setSelectedClasses];
  };
  
//   export const useDropdown = (initialValue = false) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(initialValue);
//     return [isDropdownOpen, setIsDropdownOpen];
//   };
  
  export const useDropdown2 = (initialValue = false) => {
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(initialValue);
    return [isDropdownOpen2, setIsDropdownOpen2];
  };
  
  export const useChecked = (initialValue = false) => {
    const [checked, setChecked] = useState(initialValue);
    return [checked, setChecked];
  };
  
  export const useOption = (initialValue = 'Select an option') => {
    const [option, setOption] = useState(initialValue);
    return [option, setOption];
  };
  
  export const useSubclasses = (initialValue = {
    VI: {
      A: true,
      B: true,
      C: true,
    },
    VII: {
      A: false,
      B: false,
      C: false,
    }
  }) => {
    const [subclasses, setSubclasses] = useState(initialValue);
    return [subclasses, setSubclasses];
  };

export const useStartDate = (initialValue = null) => {
    const [startDate, setStartDate] = useState(initialValue);
    return [startDate, setStartDate];
  };
  
  export const useApplyDate = (initialValue = false) => {
    const [applydate, setApplyDate] = useState(initialValue);
    return [applydate, setApplyDate];
  };
  
  export const useOpenCalendar = (initialValue = false) => {
    const [opencalendar, setOpenCalendar] = useState(initialValue);
    return [opencalendar, setOpenCalendar];
  };
  
  export const useStartDate2 = (initialValue = null) => {
    const [startDate2, setStartDate2] = useState(initialValue);
    return [startDate2, setStartDate2];
  };
  
  export const useApplyDate2 = (initialValue = false) => {
    const [applydate2, setApplyDate2] = useState(initialValue);
    return [applydate2, setApplyDate2];
  };
  
  export const useOpenCalendar2 = (initialValue = false) => {
    const [opencalendar2, setOpenCalendar2] = useState(initialValue);
    return [opencalendar2, setOpenCalendar2];
  };
  
  export const useMoreOptionDropdown = (initialValue = false) => {
    const [moreoptiondropdown, setMoreOptionDropdown] = useState(initialValue);
    return [moreoptiondropdown, setMoreOptionDropdown];
  };