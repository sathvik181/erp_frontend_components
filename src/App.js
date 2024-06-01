// import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { AddFeeDetails } from './components/AddFeeStructure/AddFeeDetails';
// import { DetailsCard } from './components/DetailsCard/DetailsCard';

import { CreateFeeStructure } from './components/AddFeeStructure/CreateFeeStructure';
function App() {
  return (
    <div className="App">

    <CreateFeeStructure />
     
    </div>
  );
}

export default App;
