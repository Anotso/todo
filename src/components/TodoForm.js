import React, {useState} from 'react';
import {addItem} from '../actions/ListAction'
import { useDispatch } from 'react-redux';

function TodoForm(props) {

    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const [firstExe, setFirstExe] = useState(true);

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function validatedId(){
        let lastIdItems = 0;
        if (props.isItems && firstExe) {
            let sizeIsItems = props.isItems.length;
            if(sizeIsItems>0){
                lastIdItems = props.isItems[sizeIsItems-1].id + 1;
                setFirstExe(false);
            }
        }
        return lastIdItems;
    }

    function addItemEvent(event) {
        event.preventDefault();
        let id = 0;
        if (text.trim()) {
            id = validatedId();
            dispatch(addItem(text, id));
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