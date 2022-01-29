import ColorsCard from './ColorsCard';
import ColorHeading from './ColorHeading';

function MainCard(props) {
  return (
    <>
      <div className="mainCardGrid">    
      <ColorHeading color={props.color} />
      <ColorsCard shades ={props.shades} />   
      </div> 
    </>
  );
}

export default MainCard;
