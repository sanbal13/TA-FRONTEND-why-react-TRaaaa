import Article from "./Article";
import data from "../data.json";

function Articles() {
    return <div className="flex articles">
       {          
           data.map((article, i) => <Article key={i} {...article}/>)           
       }
    </div> 
}

export default Articles;