function Articles() {
  return (
    <>
      <article className="flex article flex-48">
        <div className="flex-40 font-0">
          <img
            className="flexible-img"
            src="../media/blog-image1.jpg"
            alt="Blog_image 1"
          />
        </div>

        <div className="flex-60 article-content">
          <time dateTime="">
            <i className="far fa-clock"></i>
            December 22, 2017
          </time>
          <h3>How to find beautiful workspace?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a className="btn btn-tertiary" href="#a">
            Read Article
          </a>
        </div>
      </article>
      <article className="flex article flex-48">
        <div className="flex-40 font-0">
          <img
            className="flexible-img"
            src="../media/blog-image2.jpg"
            alt="Blog_image 1"
          />
        </div>

        <div className="flex-60 article-content">
          <time dateTime="">
            <i className="far fa-clock"></i>
            December 18, 2017
          </time>
          <h3>Woman sportwear</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a className="btn btn-tertiary" href="#a">
            Read More
          </a>
        </div>
      </article>
      <article className="flex article flex-48">
        <div className="flex-40 font-0">
          <img
            className="flexible-img"
            src="../media/blog-image3.jpg"
            alt="Blog_image 1"
          />
        </div>

        <div className="flex-60 article-content">
          <time dateTime="">
            <i className="far fa-clock"></i>
            December 14, 2017
          </time>
          <h3>New creative fashion</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a className="btn btn-tertiary" href="#a">
            Read Article
          </a>
        </div>
      </article>
      <article className="flex article flex-48">
        <div className="flex-40 font-0">
          <img
            className="flexible-img"
            src="../media/blog-image4.jpg"
            alt="Blog_image 1"
          />
        </div>

        <div className="flex-60 article-content">
          <time dateTime="">
            <i className="far fa-clock"></i>
            December 10, 2017
          </time>
          <h3>Minimalist design trend in 2018</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a className="btn btn-tertiary" href="#a">
            View Detail
          </a>
        </div>
      </article>
    </>
  );
}

export default Articles;
