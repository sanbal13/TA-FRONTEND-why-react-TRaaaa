import Heading from './Heading';
function Work() {
  return (
    <>
      <section className="work padding">
        <div className="container">
          <Heading title="Our Work" />
          <div className="flex">
            <div className="flex-23">
              <img
                className="flexible-img"
                src="../media/work-image1.jpg"
                alt="Work_Image 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src="../media/work-image2.jpg"
                alt="Work_Image 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src="../media/work-image3.jpg"
                alt="Work_Image 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src="../media/work-image4.jpg"
                alt="Work_Image 1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
