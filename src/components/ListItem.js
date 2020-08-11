import React from 'react';

import { useDispatch } from 'react-redux';

import Card from './Card';
import {deleteItem, changeDone} from '../actions/ListAction'

function ListItem(props){

    function DoneImg(props) {
        if (props.done) {
          return ("Feito");
        } else {
          return ("Pendente");
        }
      }

      const dispatch = useDispatch()

    return(
        <li >
          <Card className={props.item.done ? "done item" : " item"} >
            {props.item.text}
            <div className="">
              <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done}></DoneImg></button>
              <button onClick={() => { dispatch(deleteItem(props.item.id)) }}>Excluir</button>
            </div>
          </Card>
        </li>
    );
}

export default ListItem