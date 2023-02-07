import './App.css';
import Form from './Form';
import { useState } from "react";
import { datalar } from "./datalar";

function App() {

  const [data, setData] = useState([...datalar])

  function datasaver(event) {
    setData( [...data, {[event.target.name]: event.target.value }])
    console.log(data)
  }

  return (
    <div className="App">
    <Form datasaver={datasaver}/>
    </div>
  );
}

export default App;
