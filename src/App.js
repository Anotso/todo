import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Modal from './components/Modal';

const SAVED_ITEMS = "savedItems";

function App() {

  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  //DESSA FORMA SE PEGA OS DADOS DO LOCALSTORAGE, E QUANDO SE PASSA O ARRAY VAZIO ELE EXECUTA SOMENTE NA INICIALIZAÇÃO
  //getItem => É UM METODO DO LOCALSTORAGE. NÃO POSSUI RELAÇÃO COM O CÓDIGO JÁ ESCRITO

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  function onAddItem(text) {
    let item = new Item(text);
    setItems([...items, item]);
    onHideModal();
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter(it => it.id !== item.id);
    setItems(filteredItems);
  }

  function onDone(item) {
    let updateItems = items.map(it => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(updateItems);
  }

  function onHideModal(e) {
    setShowModal(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Todo</h1>
        <button className="addButton" onClick={()=>{setShowModal(true)}}>+</button>
      </header>
      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}></TodoForm>
      </Modal>
    </div>
  );
}

export default App;
