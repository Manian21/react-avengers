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
          <FontAwesomeIcon
            icon={props.avenger.liked ? fasHeart : farHeart}
            size="lg"
            transform="left-20 up-90"
            color={'#d10f00'}
            onClick={() => {
              console.log('clicked');
              props.dispatches.likedAvenger(props.avenger);
            }}
          />
          <FontAwesomeIcon
            onClick={() => {
              props.dispatches.closeSelectedAvenger();
            }}
            icon={faTimes}
            size="lg"
            transform="right-60 up-100"
            color={'#d10f00'}
          />
        </div>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tCuRbIInrOo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </React.Fragment>
  );
}

export default AvengerDetail;
