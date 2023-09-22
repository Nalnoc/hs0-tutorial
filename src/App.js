import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import InputFormat from "./InputFormat";
import Output from "./Output"
import {useState} from 'react';


export default function App() {
    // input field values
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [fact, setFact] = useState("");
  const[showOutput, setShowOutput] = useState(false);
  return(
    <div>
      <Header />
      <InputFormat 
                photo={photo} setPhoto={setPhoto}
                name={name} setName={setName}
                title={title} setTitle={setTitle}
                fact={fact} setFact={setFact}
                showOutput={showOutput} setShowOutput={setShowOutput}    
      />
      <Output 
        photo={photo} name={name} title={title} fact={fact}
      />
    </div>
  )

}