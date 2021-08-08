import React from 'react';
import AvengerDetail from './AvengerDetail';
function AvengersList(props) {
  return (
    <div className="avengers">
      <div className="avengerDetail">
        <AvengerDetail avenger={props.state[0]} />
      </div>
      {props.state.map(avenger => {
        return (
          <div className="avenger">
            <div>
              <img src={avenger.imageUrl} className="avengerImg" />
              <span>{avenger.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default AvengersList;
