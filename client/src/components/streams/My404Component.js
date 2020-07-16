import React from "react";

const My404Component = () => {
  return (
    <div
      className="ui grid middle aligned segment red inverted"
      style={{ height: "100%", margin: "0" }}
    >
      <div className="ui column center aligned">
        <div className="ui inverted statistic">
          <div className="value">
            404{" "}
            <span role="img" aria-labelledby="emoji">
              😢
            </span>
          </div>
          <div className="label">Error</div>
        </div>

        <div className="ui message red inverted">
          <div className="header">Description</div>
          <p>Not found</p>
        </div>
      </div>
    </div>
  );
};

export default My404Component;
