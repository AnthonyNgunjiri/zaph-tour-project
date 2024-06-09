const Testimonials = ({ image, name, description }) => {
  return (
    <section className="monial">
      <div className="client">
        <button id="clien">{image}</button>
        <p>&#9733;&#9733;&#9733;{name}&#9733;&#9733;&#9733;</p>
      </div>
      <div className="tooltip">{description}</div>
    </section>
  );
};

export default Testimonials;
