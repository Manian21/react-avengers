import React from 'react';
function AvengersList(props) {
  return (
    <div className="avengers">
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
