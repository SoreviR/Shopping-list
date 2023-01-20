import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Inputs from "./Inputs";
import Article from "./Article";

function App(){

    const [articles, setArticles] = useState([]);

    function addArticle(newArticle){
        setArticles(prevArticles =>{
            return [...prevArticles, newArticle]
        });
    };

    function deleteItem(id){
        setArticles(prevArticles => {
            return prevArticles.filter((articleItem, index) => {
                return index !== id
            })
        })
    }

    

    return (
        <div>
            <Header />
            <Inputs 
            addingArticle={addArticle}
            />
            {articles.map((articleItem, index) => {
                return <Article 
                key = {index}
                id = {index}
                article= {articleItem}
                onDelete = {deleteItem}
                />
            })}
            <Footer />
        </div>
    );
};

export default App;