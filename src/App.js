
import TopLevelMenu from './components/TopLevelMenu';
import './App.css'
import listOfMenuItems from './data.json'


function App() {
  return (
    <div className='App'>
      <TopLevelMenu listOfMenuItems = {listOfMenuItems}/>
    </div>
  );
}

export default App;
