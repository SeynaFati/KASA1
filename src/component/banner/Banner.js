function Banner({ imageSource, title }) {
  return (
    <article className="main-card">
      <img src={imageSource} alt={title} />
      <div className="overlay"></div>
      <p> {title} </p>
    </article>
  );
}

export default Banner;
