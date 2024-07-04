import "./features.scss";

function Features({ feature }) {
  return (
    <>
      <div className="feature">
        <img
          className="feature-image"
          src={feature.image}
          alt="features icons"
        />
        <div className="feature-container">
          <h3 className="feature-container-title">{feature.title}</h3>
          <p className="feature-container-content">{feature.content}</p>
        </div>
      </div>
    </>
  );
}

export default Features;
