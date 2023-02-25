
import './App.css';
import Person from './components/Person'
import Counter from './components/Buttons'

//converted this to an arrow function in es6
const App = () => {




  var name = 'eddy';
  return (
    <div className="App">

      <header className='intro'>
        {/* <Person firstName={'eddy'} lastName={'vittini'} age={26}/> */}
        <h1> Hello {name} welcome to using react</h1>
        <Counter/>

      </header>

      {/* react fragment */}
      {/* <>
        test
      </> */}
    </div>
  );
}

export default App;
