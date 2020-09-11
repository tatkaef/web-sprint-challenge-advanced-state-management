import axios from "axios";

export const REACH_SMURFS_START = "REACH_SMURFS_START";
export const REACH_SMURFS_SUCCESS = "REACH_SMURFS_SUCCESS";
export const REACH_SMURFS_ERROR = "REACH_SMURFS_ERROR";
export const ADD_SMURF = "ADD_SMURF";

export const reachSmurfs = () => (dispatch) => {
  dispatch({ type: REACH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("Smurfs data:", res.data);
      dispatch({ type: REACH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REACH_SMURFS_ERROR, payload: err.message });
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch((err) => {
      console.log("Error add:", err);
    });
};
