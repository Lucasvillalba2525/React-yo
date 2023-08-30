import React from "react";
import Card from "./Card";


const Cards = ({mascotas}) => {

  const carsList = mascotas.map((m) =>  <Card mascota = {m} key={m.id} />);

  return (  
      <div className="row">
        {carsList}
      </div>
  );
};

export default Cards;
