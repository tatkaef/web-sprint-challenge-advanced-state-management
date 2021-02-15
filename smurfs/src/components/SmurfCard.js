import React from "react";

export default function SmurfCard(props) {
  // console.log("Smurf Card:", props);
  const { name, age, height } = props.smurf;
  return (
    <>
      <div>
        <h2>{name}</h2>
        <h3>Age: {age}</h3>
        <h3>Height: {height}</h3>
      </div>
    </>
  );
}
