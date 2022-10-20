import React, { useState } from "react";

function Form({getData}) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [alert, setAlert] = useState(false);

  const getHeight = (e) => {
    console.log(e.target.value);
    setHeight(e.target.value);
  };

  const getWeight = (e) => {
    console.log(e.target.value);
    setWeight(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("Not valid number");
      setAlert(true);
    } else {
      getData(weight,height);
      setAlert(false);
      console.log(weight);
      console.log(height);
    }
  };

  return (
   
      <div class="col-sm-6   shadow rounded px-5">
        <h1 class="text-center pt-3 text-secondary h2"> BMI CALCULATION</h1>
        <form onSubmit={onSubmit}>
          <div class="row">
            <div class="col col-sm-6">
              <div class="my-3">
                <label class="form-label">Height</label>
                <input
                  class="form-control"
                  type="text"
                  value={height}
                  onChange={getHeight}
                  required
                />
              </div>
            </div>
            <div class="col col-sm-6">
              <div class="my-3">
                <label class="form-label">Weight</label>
                <input
                  class="form-control"
                  type="text"
                  value={weight}
                  onChange={getWeight}
                  required
                />
              </div>
            </div>
            <div>
              <input class="btn btn-primary my-3" type="submit" value="Submit" />
            </div>
          </div>
        </form>
        {alert === true ? 
          <div class="alert alert-danger" role="alert">
            Please enter valid data
          </div>  : null }
      </div>

  );
}

export default Form;
