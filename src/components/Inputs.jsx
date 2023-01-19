import React, { useState } from "react";

function Inputs(props){

    const [articulo, setArticulo] = useState("");

    function handleChange(event){
        const newArticle = event.target.value;

        setArticulo(newArticle);
        console.log(setArticulo);
    }

    function submitArticulo(event){
        props.addingArticle(articulo);
        setArticulo("");

        event.preventDefault();
    }


    return (
        <form className="add-item">
            <input
                name="Articulo"
                onChange={handleChange}
                value={articulo}
                placeholder="Articulo"
            />
            <button onClick={submitArticulo}>Add</button>
        </form>
    );
};


export default Inputs;