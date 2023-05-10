
import TopLevelMenu from './components/TopLevelMenu';
import './App.css'
import listOfMenuItems from './data.json'
import { useState } from 'react';

function App() {
  const [value, setState]  =  useState('')
  const selectedValue = (menuValue) => {
    setState(menuValue)
  }
  return (
    <div className='App'>
      <TopLevelMenu listOfMenuItems = {listOfMenuItems} selectedValue= {selectedValue}/>
      <TopLevelMenu listOfMenuItems = {listOfMenuItems} selectedValue= {selectedValue} checkbox ={true} minWidth={200} text='Custom Menu'/>
    </div>
  );
}

export default App;
