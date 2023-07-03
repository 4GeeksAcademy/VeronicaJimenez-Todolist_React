import React from "react";
import { useState, useEffect} from "react";

//create your first component
const Container = (props) => {
    const [inputItem, setInputItem] = useState('')
	const [newItems, setNewItems] = useState ([])


	const inputOnList = (e) => {
		setInputItem(e.target.value);
	};

	
	const whenEnter = e => {
		if (e.key === "Enter"){
			setNewItems(newItems.concat([inputItem]));
			setInputItem(" ")
		} else {null}
	};
	
	const deleteItem = (e) => {
		
	}

	return (
	
		<div className="text-center">
			
				<h1 className="text-center mt-5">Todos</h1>
				<input type="text" placeholder="What needs to be done?" onChange={inputOnList} value={inputItem} onKeyDown={whenEnter}></input>
				<button onClick={whenEnter}>Add to list</button>
				<ul>
					
					{newItems.map((task, i) => (
					<li key={i}> {task} <button onClick={()=> setNewItems(newItems.filter())}> x </button></li>)
					)}	
					
				</ul>
				<div># Items Left</div>
			
		</div>
	);
	
	/*const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);
  
	function addItem() {
	    
	  const item = {
		id: Math.floor(Math.random() * 1000),
		value: newItem
	  };
  
	  setItems(oldList => [...oldList, item]);
	  setNewItem("");
	}
  
	function deleteItem(id) {
	  const newArray = items.filter(item => item.id !== id);
	  setItems(newArray);
	}
  
	return (
	  <div className="TodoList">
		<h1>To Do List!</h1>
		<input
		  type="text"
		  placeholder="Add your task"
		  value={newItem}
		  onChange={e => setNewItem(e.target.value)}
		  onKeyDown={event => {
			if (event.key === "Enter") {
			  addItem();
			}
		  }}
		/>
		<button onClick={addItem}>Add</button>
		<ul>
		  {items.map(item => (
			<li key={item.id}>
			  {item.value}{" "}
			  <button
				className="delete-button"
				onClick={() => deleteItem(item.id)}
			  >
				X
			  </button>
			</li>
		  ))}
		</ul>
		<p>Usted tiene {items.length} tarea(s) pendiente(s).</p>
	  </div>
	);*/

};

export default Container;
