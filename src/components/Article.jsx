import React from "react";
import { MdDeleteForever, MdDoneOutline } from "react-icons/md";

function Article(props){

    function handleClick(event){
        props.onDelete(props.id)
    };

    function handleDone(event) {

        var selection = props.id;
        var textElement = document.getElementById(selection);
        if (textElement.style.textDecoration === "line-through") {
            textElement.style.textDecoration = "none";
        } else {
        textElement.style.textDecoration = "line-through";        
        }
    }   


    return (
        <div className="article">
            <button className="item-delete" onClick={handleClick}><MdDeleteForever /></button>   
            <span id={props.id}>{props.article}</span>
            <span className="item-quantity">4</span>
            <button className="item-done" onClick={handleDone}><MdDoneOutline/></button>
        </div>
    );
};

export default Article;