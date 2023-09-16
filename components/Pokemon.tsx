import React from "react";

export const Pokemon = ({
  height,
  weight,
  name,
  img,
}: {
  height: number;
  weight: number;
  name: string;
  img: string;
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  );
};
