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

    return (
        <div>
            <Header />
            <Inputs 
            addingArticle={addArticle}
            />
            {articles.map((articleItem, index) => {
                return <Article 
                key = {index}
                article= {articleItem}/>
            })}
            <Footer />
        </div>
    );
};

export default App;