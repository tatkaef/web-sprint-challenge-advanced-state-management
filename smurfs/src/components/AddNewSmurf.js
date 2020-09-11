import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/smurfsActions";

function AddNewSmurf(props) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.addSmurf(form);
    setForm();
  };

  return (
    <form
      className="form container"
      style={{ color: "red" }}
      onSubmit={onSubmit}
    >
      <h4>Add a New Smurf</h4>
      <label>
        Name&nbsp;
        <input
          value={props.name}
          onChange={handleChange}
          name="name"
          type="text"
        />
      </label>

      <label>
        Age
        <input
          value={props.age}
          onChange={handleChange}
          name="age"
          type="text"
        />
      </label>

      <label>
        Height
        <input
          value={props.height}
          onChange={handleChange}
          name="height"
          type="text"
        />
      </label>
      <button type="submit">Add Smurf</button>
    </form>
  );
}

export default connect(null, { addSmurf })(AddNewSmurf);
