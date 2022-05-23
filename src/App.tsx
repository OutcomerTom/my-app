import React, {useState, useEffect} from 'react';
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
      <header className="App-header">
        <div>{`Alert was shown: ${counter} times`}</div>
        <button onClick={() => handleShowAlert(22)}>Show Alert</button>
        <td onClick={()=> window.open("https://github.com/OutcomerTom/my-app/", "_blank")}>Go to repo</td>
      <InputForm defaultValue={'Hello form'}
      />
      </header>
    </div>
  )
}

export default App;