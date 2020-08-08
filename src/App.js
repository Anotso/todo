import React, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    let t = event.target.value;
    setText(t);
  }
  function addItem(event){
    event.preventDefault();
    let filterText = text.trim();
    console.log(`Tamanho do text: ${text.length}`);
    console.log(`Tamanho do filterText: ${filterText.length}`);
    if(filterText){
      setItems([...items, text]);
    }
    setText("");
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <form>
        <input type="text" onChange={handleChange} value={text}/>
        <button onClick={addItem}>Adicionar</button>
      </form>
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
