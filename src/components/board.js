import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Draggable from "react-draggable";
import "../css/board.css"
var randomColor = require("randomcolor");


function Board () {
    // value of input string
    const [item, setItem] = useState("");
    // array contains all notes generated saved to localStorage
    // initalize empty array if localStorage has no saved items
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("items")) || []
    )
    // handle press enter to create new item
    const handleKeyPress = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13){
            newitem();
        }
    }
    // handle creating new items and adding it to set items
    const newitem = () => {
        if (item.trim() !== "") {
            const newitem = {
                id: uuidv4(),
                item: item,
                color: randomColor({luminosity: "light",}),
                defaultPos: { x: 100, y: 0}
            };
            setItems((items) => [...items, newitem]);
            setItem("");
        } else {
            alert("Enter an item");
            setItem("");
        }
    };
    // update position every time note is dragged so sticky notes stay in one place
    const updatePos = (data, index) => {
        let newArray = [...items];
        newArray[index].defaultPos = {x: data.x, y: data.y};
        setItems(newArray);
    };
    // delete note
    const deleteNote = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    // rendering
    return (
        <div >
        <input
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            placeholder="Type note..."
            onKeyPress={(e)=> handleKeyPress(e)}
        />
        <button onClick={newitem}>CREATE</button>
        {/*displays all notes*/}
        {items.map((item, index) => {
        return (
            <Draggable
                key={item.id}
                defaultPosition={item.defaultPos}
                onStop={(e, data) => {
                updatePos(data, index);
            }}
            bounds=".container"
            >
            <div style={{ backgroundColor: item.color }} className="box">
                {`${item.item}`}
                <button id="delete" onClick={(e) => deleteNote(item.id)}>
                    X
                </button>
            </div>
          </Draggable>
        );
      })}
        </div>
    )
}

export default Board;