import React, {useState} from 'react';
import {addItem} from '../actions/ListAction'
import { useDispatch } from 'react-redux';

function TodoForm(props) {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }
    function addItemEvent(event) {
        event.preventDefault();
        if (text.trim()) {
            dispatch(addItem(text));
            props.onHideModal();
        }
        setText("");
    }

    return (
        <form>
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={addItemEvent}>Adicionar</button>
        </form>
    );
}

export default TodoForm;