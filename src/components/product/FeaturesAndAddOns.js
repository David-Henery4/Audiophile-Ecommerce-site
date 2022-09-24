import React from "react";

const FeaturesAndAddOns = () => {
  return (
    <div className="feats-add-ons">
      <div className="features">
        <h3 className="features__title">FEATURES</h3>
        <article className="features-desc body-text">
          <p className="features-desc__para">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p className="features-desc__para">
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </article>
      </div>
      <div className="add-ons">
        <h3 className="add-ons__title">IN THE BOX</h3>
        <ul className="add-ons-list body-text">
          <li className="add-ons-list__item">
            <p>
              <span> 1x </span> Headphone Unit
            </p>
          </li>
          <li className="add-ons-list__item">
            <p>
              <span> 2x </span> Replacement Earcups
            </p>
          </li>
          <li className="add-ons-list__item">
            <p>
              <span> 1x </span> User Manual
            </p>
          </li>
          <li className="add-ons-list__item">
            <p>
              <span> 1x </span> 3.5mm 5m Audio Cable
            </p>
          </li>
          <li className="add-ons-list__item">
            <p>
              <span> 1x </span> Travel Bag
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesAndAddOns;
