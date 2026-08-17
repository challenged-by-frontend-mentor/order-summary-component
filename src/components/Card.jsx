import card_banner from "../assets/illustration-hero.svg";
import plan_icon from "../assets/icon-music.svg";

const Card = () => {
  return (
    <main className="card">
      <img
        src={card_banner}
        alt=""
        aria-hidden="true"
        className="card__banner"
      />
      <div className="card__hero">
        <h1 className="card__title">Order Summary</h1>
        <p className="card__description">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <Plan />
      <button type="button" className="card__cta-btn">
        Proceed to Payment
      </button>
      <button type="button" className="card__cancel-btn">
        Cancel Order
      </button>
    </main>
  );
};

export default Card;

const Plan = () => {
  return (
    <div className="plan">
      <img src={plan_icon} alt="Music note icon" className="plan__icon" />
      <div className="plan__detail">
        <h2 className="plan__title">Annual Plan</h2>
        <p className="plan__price">$59.99/year</p>
      </div>
      <button className="plan__change-btn" aria-label="Change annual plan">
        Change
      </button>
    </div>
  );
};
