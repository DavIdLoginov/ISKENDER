import React from "react";
import AddressCard from "../molecules/AddressCard";

const Address = () => {
  const data = [
    {
      link: "https://2gis.kg/bishkek/geo/15763234351106795",
      address: "Кыргызстан, г. Бишкекул. Турусбекова A167",
      time: "08:00 - 22:00",
      number: "+996 500 345 345",
    },
    {
      link: "https://2gis.kg/bishkek/search/%D0%9B%D0%B5%D1%80%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%206/geo/15763234351167904/74.657414%2C42.878066?m=74.657427%2C42.878057%2F17.57",
      address: "Кыргызстан, г. Бишкекул. Лермонтова 6",
      time: "08:00 - 22:00",
      number: "+996 500 345 345",
    },
    {
      link: "https://2gis.kg/bishkek/firm/70000001019348256?m=74.568455%2C42.866125%2F17.57",
      address: "Кыргызстан, г. Бишкекул. Льва-Толстого 19",
      time: "08:00 - 22:00",
      number: "+996 500 345 345",
    },
  ];
  return (
    <div className="flex gap-5">
      {data.map((item, index) => (
        <AddressCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Address;
