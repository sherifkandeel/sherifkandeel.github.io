import React, {useState, useEffect} from 'react';
import './App.css';

const item = localStorage.getItem('data');
function App() {
    const [data, setData] = useState(localStorage.getItem('data'));

    useEffect(() => {
 localStorage.setItem('data', data)
    }, [data])

  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'/>
      <textarea cols="100" rows="50" value={data} class="textarea-css" placeholder="add some data" onChange={e =>  setData(e.target.value)} />
    </div>
  );
}

export default App;
