import React, {useState} from 'react';

function TodoForm(props) {

    const [text, setText] = useState("");

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }
    function addItem(event) {
        event.preventDefault();
        if (text.trim()) {
            //setItems([...items, text]);
            props.onAddItem(text);
        }
        setText("");
    }

    return (
        <form>
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={addItem}>Adicionar</button>
        </form>
    );
}

export default TodoForm;