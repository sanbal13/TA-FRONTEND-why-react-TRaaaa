function Color(props) {
  return (
    <>
      <div className="grid-color">
        <div className="color" style={{backgroundColor: props.shade}} />
         <div className="code">{props.code}</div>
         <div className="hexcode">{props.shade}</div>
      </div>
    </>
  );
}

export default Color;
