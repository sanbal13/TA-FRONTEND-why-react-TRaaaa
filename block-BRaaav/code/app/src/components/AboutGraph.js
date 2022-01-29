function AboutGraph() {
  return (
    <div className="flex-30 progress">
      <div className="progress-item">
        <div className="flex">
          <h3>Web Design</h3>
          <p>85%</p>
        </div>
        <progress value="85" max="100"></progress>
      </div>
      <div className="progress-item">
        <div className="flex">
          <h3>Photography</h3>
          <p>90%</p>
        </div>
        <progress value="90" max="100"></progress>
      </div>
      <div className="progress-item">
        <div className="flex">
          <h3>Content Marketing</h3>
          <p>75%</p>
        </div>
        <progress value="75" max="100"></progress>
      </div>
      <div className="progress-item">
        <div className="flex">
          <h3>CMS Admin</h3>
          <p>70%</p>
        </div>
        <progress value="70" max="100"></progress>
      </div>
    </div>
  );
}

export default AboutGraph;
