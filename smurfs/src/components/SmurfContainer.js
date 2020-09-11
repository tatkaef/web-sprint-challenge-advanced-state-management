import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";

function SmurfContainer(props) {
  console.log("SmurfCont-r:", props);

  return (
    <>
      <div>
        {smurfs.map((item) => {
          return <SmurfCard smurf={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};
export default connect(mapStateToProps, {})(SmurfContainer);
