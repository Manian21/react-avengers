import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faHeart as fasHeart
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

function AvengerDetail(props) {
  return (
    <React.Fragment>
      <div className="avengerContent">
        <div className="avengerProfileData">
          <span className="avengerData">Name: {props.avenger.name}</span>
          <span className="avengerData">Power: {props.avenger.power}</span>
          <span className="avengerData">
            Strength: {props.avenger.strength}
          </span>
          <span className="avengerData">Weight: {props.avenger.weight}</span>
          <span className="avengerData">
            Weight: {props.avenger.movies && props.avenger.movies.join(', ')}
          </span>
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
