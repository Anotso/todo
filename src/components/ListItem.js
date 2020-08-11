import React from 'react';

import Card from './Card';

function ListItem(props){

    function DoneImg(props) {
        if (props.done) {
          return ("Feito");
        } else {
          return ("Pendente");
        }
      }

    return(
        <li >
          <Card className={props.item.done ? "done item" : " item"} >
            {props.item.text}
            <div className="">
              <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
              <button onClick={() => { props.onItemDeleted(props.item) }}>Excluir</button>
            </div>
          </Card>
        </li>
    );
}

export default ListItem