import Articles from './Articles';
import Heading from './Heading';

function Blog() {
  return (
    <>
      <section className="blog padding">
        <div className="container">
          <Heading title="Our Blog" />
          <div className="flex wrap">
            <Articles />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
