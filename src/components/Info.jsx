import React from "react";
import { StyledInfo } from "./styles/Info.styled";

const Info = ({ geoAPI }) => {
  return (
    <StyledInfo>
      <section>
        <div>
          <span>IP Address</span>
          <h3>{geoAPI ? geoAPI.ip : "barobaro"}</h3>
        </div>
        <div>
          <span>Location</span>
          <h3>
            {geoAPI ? geoAPI.location.region : "barobaro"},<br />{" "}
            {geoAPI ? geoAPI.location.city : "baro"}{" "}
            {geoAPI ? geoAPI.location.postalCode : "barobaro"}
          </h3>
        </div>
        <div>
          <span>timezone</span>
          <h3>UTC {geoAPI ? geoAPI.location.timezone : "barobaro"}</h3>
        </div>
        <div>
          <span>ISP</span>
          <h3>{geoAPI ? geoAPI.isp : "barobaro"}</h3>
        </div>
      </section>
    </StyledInfo>
  );
};

export default Info;
