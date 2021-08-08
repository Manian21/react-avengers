import React from 'react';
import AvengerDetail from './AvengerDetail';
function AvengersList(props) {
  return (
    <div className="avengers">
      {props.state.selectedAvenger && (
        <div className="avengerDetail">
          <AvengerDetail
            avenger={props.state.selectedAvenger}
            dispatches={props.dispatches}
          />
        </div>
      )}

      {props.state.avengersList.map(avenger => {
        return (
          <a href="#search">
            <div
              id={avenger.id}
              className="avenger"
              onClick={() => {
                props.dispatches.selectedAvenger(avenger);
              }}
            >
              <div>
                <img src={avenger.imageUrl} className="avengerImg" />
                <span>{avenger.name}</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
export default AvengersList;
