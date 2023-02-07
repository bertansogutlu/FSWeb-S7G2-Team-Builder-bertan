import './App.css';
import Form from './Form';
import { useState } from "react";
import { datalar } from "./datalar";

function App() {

  const [data, setData] = useState(datalar);
  const [person, setPerson] = useState({});

  function datasaver(event) {
    setPerson({...person,[event.target.name]: event.target.value})
    console.log(person)
  }

  function submit(event) {
  event.preventDefault();
  setData([...data, person])
  console.log(data)
  }

  return (
    <div className="App">
    <Form datasaver={datasaver} submit={submit}/>
    </div>
  );
}

export default App;
