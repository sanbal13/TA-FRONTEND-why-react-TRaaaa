function Form() {
  return (
    <>
      <form className="flex-60" action="index.html" method="post">
        <fieldset>
          <div className="flex">
            <input
              className="form-control flex-48"
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              className="form-control flex-48"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="flex">
            <input
              className="form-control flex-48"
              name="number"
              type="tel"
              placeholder="Your Phone"
            />
            <select className="form-control flex-48" name="budget">
              <option value="Budget Level">Budget Level</option>
              <option value="Budget Level1">Budget Level1</option>
              <option value="Budget Level2">Budget Level2</option>
              <option value="Budget Level3">Budget Level3</option>
            </select>
          </div>
          <textarea
            className="form-control"
            name="requirements"
            placeholder="Your Requirements"
            id=""
            rows="6"
          ></textarea>
        </fieldset>
        <input type="submit" value="Send Message" className="btn btn-primary" />
      </form>
    </>
  );
}

export default Form;
