import Heading from './Heading';
function AboutArticle() {
  return (
    <div className="flex-40">
      <header className="sec-header">
        <h2 className="heading">Let us introduce</h2>
        <div className="dot-wrapper flex justify-start">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </header>

      <p className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ut
        sequi voluptatibus beatae corporis repellat asperiores fugit debitis
        corrupti nesciunt nam doloribus animi qui illum, recusandae nisi neque
        iusto culpa!
      </p>
      <p className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default AboutArticle;
