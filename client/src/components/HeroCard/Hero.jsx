import PropTypes from "prop-types";
import "./Hero.css";

function HeroCard({ hero }) {
  return (
    <div className="card">
      <div className="avatar">
        <img src={hero.images.sm} alt="avatar" />
      </div>
      <section>
        <h1>{hero.name}</h1>
      </section>
      <article>
        <div className="description">
          <p>{hero.biography.fullName}</p>
          <p>{hero.work.occupation}</p>
          <p>prix : {hero.price}€ par jour</p>
        </div>
      </article>
    </div>
  );
}
HeroCard.propTypes = {
  hero: PropTypes.shape({
    appearance: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    biography: PropTypes.shape.isRequired,
    connections: PropTypes.shape.isRequired,
    images: PropTypes.shape.isRequired,
    powerstats: PropTypes.shape.isRequired,
    work: PropTypes.shape.isRequired,
  }).isRequired,
};

export default HeroCard;
