import {
  REACH_SMURFS_START,
  REACH_SMURFS_SUCCESS,
  REACH_SMURFS_ERROR,
  ADD_SMURF,
} from "../actions/smurfsActions";

const initialState = {
  smurfs: [],
  loading: false,
  error: "",
};

export function smurfsReducer(state = initialState, action) {
  switch (action.type) {
    case REACH_SMURFS_START:
      return {
        ...state,
        loading: true,
      };
    case REACH_SMURFS_SUCCESS:
      return {
        ...state,
        loading: false,
        smurfs: action.payload,
      };
    case REACH_SMURFS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        loading: false,
        smurfs: action.payload,
      };
    default:
      return state;
  }
}
