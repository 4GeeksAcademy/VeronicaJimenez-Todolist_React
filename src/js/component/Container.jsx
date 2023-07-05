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
			setInputItem("")
		} else {null}
	};
	function whenclick () {
		setNewItems(newItems.concat([inputItem]));
		setInputItem("")
	}


	const deleteItem = (id) => {
		let eliminados = []
		eliminados = newItems.filter((item, index) => {
			if (index !== id){
				return item
			}
		})
		setNewItems(eliminados)
	}

	return (
	
		<div className="text-center">
			
				<h1 className="text-center mt-5">Todos</h1>
				<input type="text" placeholder="What needs to be done?" onChange={inputOnList} value={inputItem} onKeyDown={whenEnter}></input>
				<button onClick={whenclick}>Add to list</button>
				<ul>
					
					{newItems.map((task, i) => (
						<li key={i}> {task} 
						<button onClick={()=> deleteItem(i)}> x 
						</button>
						</li>)
  					)}
					
				</ul>
				<div> {newItems.length} Items Left</div>
			
		</div>
	);
	
	

};

export default Container;
