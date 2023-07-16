
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
function App() {

    const [userName, setUsername] = useState('');

    useEffect(() => {
      getName();
    }, []);

    const getName = async () => {
      const response = await axios.get("/names");
      console.log(response);
      setUsername(response.data);
    }

    return(
      <h1>My website name is {userName}</h1>
    );
  }

export default App;
