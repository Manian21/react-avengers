import React from 'react';
import classNames from 'classnames/bind';
const styles = {
  fa: 'fa',
  fastaro: 'fa-star-o',
  fastar: 'fa-star'
};

const cx = classNames.bind(styles);
function createStar(key, value, id, ratingAvenger) {
  console.log(value);
  let ratingStars = new Array(5);
  return ratingStars.fill(null).map((temp, index) => {
    let selectedClass = cx({
      fa: true,
      fastaro: index > value - 1,
      fastar: index < value
    });
    return (
      <a
        href="#"
        onClick={() => {
          ratingAvenger({ id: id, key: key, value: index + 1 });
        }}
      >
        <span className={selectedClass} />
      </a>
    );
  });
}

function AvengerDetail(props) {
  let strengthStar = createStar(
    'strength',
    props.avenger.strength,
    props.avenger.id,
    props.dispatches.ratingAvenger
  );
  let smartStar = createStar(
    'smart',
    props.avenger.smart,
    props.avenger.id,
    props.dispatches.ratingAvenger
  );
  let styleStar = createStar(
    'style',
    props.avenger.style,
    props.avenger.id,
    props.dispatches.ratingAvenge
  );

  return (
    <React.Fragment>
      <div id="avengerProfile" className="avengerContent">
        <div className="avengerProfileData">
          <span className="avengerData">Name: {props.avenger.name}</span>
          <span className="avengerData">Power: {props.avenger.power}</span>
          <span className="avengerData">Weight: {props.avenger.weight}</span>
          <span className="avengerData">Strength :{strengthStar}</span>
          <span className="avengerData">Smart :{smartStar}</span>
          <span className="avengerData">Style :{styleStar}</span>
        </div>
        <div className="avengerProfileImgCont">
          <img className="avengerImg" src={props.avenger.imageUrl} />
          <a
            href="#"
            className="default-color avenger-like-button"
            onClick={event => {
              props.dispatches.likedAvenger(props.avenger);
              event.preventDefault();
            }}
          >
            {!props.avenger.liked ? (
              <i class="fa fa-heart-o" />
            ) : (
              <i class="fa fa-heart" />
            )}
          </a>
          <a
            href="#"
            className="default-color avenger-close-button"
            onClick={event => {
              props.dispatches.closeSelectedAvenger();
              event.preventDefault();
            }}
          >
            <i class="fa fa-close" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AvengerDetail;
