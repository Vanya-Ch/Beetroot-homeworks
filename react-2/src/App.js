import logo from './logo.svg';

//import './assets/css/App.css';
import './assets/scss/App.scss';

//import NewsItemFunc from './components/NewsItemFunc.js';
import NewsItemClass from './components/NewsItemClass.js';
import ApplicationChecker from './components/ApplicationChecker.js';
import moment from 'moment'
import Garage from './components/Garage.js';
import Car from './components/Car.js';

/* let stylingObject = {
  header: {
    color: "red",
    backgroundColor: "white",
  },
  p:{
    color: "red"
  }
} */

const cars = [
  {
    name: 'Ford',
    speed : 70,
  },
  {
    name: 'Audi',
    speed : 150,
  },
  {
    name: 'Toyota',
    speed : 120,
  },
  {
    name: 'Opel',
    speed : 50,
  },
]

function App() {
  return (
    <div>
      {/* <NewsItemFunc title="SEE THE UNMATCHED BEAUTY OF THE GREAT." text="Free directories: directories are perfect for customers that are searching for..."/>
      <NewsItemFunc title="Heading 2" text="Text 2"/>
      <NewsItemFunc title="Heading 3" text="Text 3"/> */}

      <NewsItemClass title="SEE THE UNMATCHED BEAUTY OF THE GREAT." text="Free directories: directories are perfect for customers that are searching for..."/>
      <NewsItemClass title="Heading 2" text="Text 2"/>
      <NewsItemClass title="Heading 3" text="Text 3"/>
      <ApplicationChecker date={moment()}/>
      <ApplicationChecker date={moment().add(1, 'days')}/>
      <ApplicationChecker date={moment().subtract(1, 'days')}/>
      <ApplicationChecker/>

      <Garage cars={cars}/>
      <Garage cars={[]}/>
      {/* <NewsItemClass/>
      <NewsItemClass/>
      <NewsItemClass/> */}

    </div>

    
  );
}

export default App;



/* <div className="App">
      <header className="App-header" style={stylingObject.header}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={stylingObject.p}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */