import '../App.css';
import Parent from '../components/Parent';
import ParentHooks from '../components/ParentHooks';
import Square from '../components/Square';

import ParentContext from '../components/ParentContext';


function App() {
  return (
    <div className="App">
        <Parent/>
        <ParentHooks/>
        <Square a={4} title={'Square title'}/>
        <ParentContext/>

        <a href="./about"></a>
    </div>
  );
}

export default App;
