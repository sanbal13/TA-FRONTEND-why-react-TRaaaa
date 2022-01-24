import PropTypes from "prop-types";
function Article(props) {
    function getDate(date) {
      const dd = date.slice(8, 10);
      const mm = date.slice(5, 7);
      const yyyy = date.slice(0, 4);
      return dd + "/" + mm + "/" + yyyy;
    }
    function getTime(date) {
      let time = date.slice(11, 19);
      const hours = Number(time.slice(0,2))
      const post_fix =  hours > 12 ? "PM" :"AM";
      time = hours > 12 ? String(hours-12).padStart(2, '0')+':'+time.slice(3,8) : time
      return time + " " + post_fix;
    }
    return (
      <div className="wrapper">
        <img src={props.urlToImage} alt={props.title} width="100%" />
        <h2>{props.title}</h2>         
        <a href={props.url}><p className="content">{props.content}</p></a>
        <div>Created by <h4>{props.author}</h4> on <h4>{getDate(props.publishedAt)}</h4> at <h4>{getTime(props.publishedAt)}</h4> 
        </div>      
      </div>
    );
  }

  Article.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
  }
  
  export default Article;