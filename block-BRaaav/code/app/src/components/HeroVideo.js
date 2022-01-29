function HeroVideo() {
  return (
    <figure className="flex-48">
      <iframe
        title="hero"
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/AqcjdkPMPJA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </figure>
  );
}

export default HeroVideo;
