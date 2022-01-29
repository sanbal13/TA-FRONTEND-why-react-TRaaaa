import Color from './Color';

let code = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
function ColorsCard(props) {
    return <div className ="colorsCard">
      {
        props.shades.map((shade, i) => {  
        return <Color key={i} shade={shade} code={code[i]}/>;
      })}
    </div>
}

export default ColorsCard;