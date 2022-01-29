function Heading(props) {
  return (
    <>
      <header className="sec-header text-center">
        <h2 className="heading">{props.title}</h2>
        <div className="dot-wrapper">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </header>
    </>
  );
}

export default Heading;
