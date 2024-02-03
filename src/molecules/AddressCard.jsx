import React from "react";
import LogoImage from "../assets/addressLogog.png";
import LocationImage from "../assets/Location.png";
import TimeImage from "../assets/Clock-Square.png";
import NumberImage from "../assets/Phone.png";

const AddressCard = ({ link, address, time, number }) => {
  return (
    <div className="address">
      <div className="address__group">
        <div className="logo">
          <img src={LogoImage} alt="LOGO" />
        </div>
        <div>
          <p className="title">Iskender home</p>
          <a href={link}>открыть в карте</a>
        </div>
      </div>
      <div className="line"></div>
      <div className="address__body gap-5">
        <div className="address__add flex">
          <img src={LocationImage} alt="Location" />
          {address}
        </div>
        <div className="flex justify-between ">
          <div className="flex">
            <img src={TimeImage} alt="Time" />
            {time}
          </div>
          <div className="flex">
            <img src={NumberImage} alt="Number" />
            {number}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
