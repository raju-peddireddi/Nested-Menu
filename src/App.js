
import TopLevelMenu from './components/TopLevelMenu';
import './App.css'
const listOfMenuItems = [{course: 'React',versions: ['verion 1', 'version2', 'version3', 'version4']},{course: 'javaScript',versions: []},{course: 'Html',versions: []},{course: 'Css',versions: ['version 1', 'version 2', 'version 3']},
  {
    course: 'Material Ui',
    versions: ['no versions versions available']
  },
  {
    course: 'Bootstrap',
    versions: []
  },
  {
    course: 'Figma',
    versions: ['no versions versions available']
  },
  {
    course: 'Figma',
    versions: []
  },
  {
    course: 'React',
    versions: ['verion 1', 'version2']
  },
  {
    course: 'javaScript',
    versions: []
  },
  {
    course: 'Html',
    versions: []
  }
  
]

function App() {
  return (
    <div className='App'>
      <TopLevelMenu data = {listOfMenuItems}/>
    </div>
  );
}

export default App;
