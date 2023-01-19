import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Article(props){

    function handleClick(event){
        console.log(event)
    };


    return (
        <div className="article">
            <button onClick={handleClick}><MdDeleteForever /></button>   
            <span>{props.article}</span>
        </div>
    );
};

export default Article;