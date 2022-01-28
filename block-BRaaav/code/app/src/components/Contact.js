import Form from './Form';
import Map from './Map';
import Heading from './Heading';

function Contact() {
  return (
    <>
      <section className="contact padding">
        <div className="container">
          <Heading title="Contact Us" />
          <div className="flex">
            <Form />
            <Map />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
