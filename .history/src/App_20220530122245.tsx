import React, {useState, useEffect} from 'react';
import {Rotes, Route, Link} from 'react-router-dom';
import { InputForm } from './InputForm';
import './App.css';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleShowAlert = (value: number):void => {
    alert("Helllo react")
    setCounter( counter + 1)
  }
    useEffect( () => {
      setCounter( 22 )
    }, [])

  return (
    <div className="App">
      <div className="App-header">
        <div>logo</div>
        <div>
          <link className="App-link" to={'/'}>Home</link>
          <link className="App-link" to={'/about'}>About</link>
          <link className="App-link" to={'/form'}>Form</link>
          <link className="App-link" to={'/${routesPath.CounterPage}'}>CounterPage</link>
        </div>
        <div>{`Alert was shown: ${counter} times`}</div>
        <button onClick={() => handleShowAlert(22)}>Show Alert</button>
        <hr/>
        <td onClick={()=> window.open("https://github.com/OutcomerTom/my-app/", "_blank")}>Go to repo</td>
        <hr/>
      <InputForm defaultValue={'Hello form'}
      />
      </div>
      <Routes>
        <Route path={'/${routesPath.CounterPage}'} element={<div>CounterPage</div>}
      </Routes>
    </div>
  )
}

export default App;