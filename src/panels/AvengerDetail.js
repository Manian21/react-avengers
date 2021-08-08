import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function AvengerDetail(props) {
  return (
    <React.Fragment>
      <div className="avengerContent">
        <div className="avengerProfileImgCont">
          <img className="avengerImg" src={props.avenger.imageUrl} />
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            transform="right-110 up-110"
            color={'#d10f00'}
          />
        </div>
        <div>
          <span className="avengerData">Name: {props.avenger.name}</span>
          <span className="avengerData">Power: {props.avenger.power}</span>
          <span className="avengerData">
            Strength: {props.avenger.strength}
          </span>
          <span className="avengerData">Weight: {props.avenger.weight}</span>
          <span className="avengerData">
            Weight: {props.avenger.movies.join(', ')}
          </span>
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            transform="right-250 up-100"
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
