function ColorHeading(props) {
  return (
    <div>
      <h2 className="color-description">{props.color}</h2>
      <p className="link">{"colors." + props.color}</p>
    </div>
  );
}

export default ColorHeading;
