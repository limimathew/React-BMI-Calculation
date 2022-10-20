function BmiList({ range, bmi }) {

  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group ">
        <li className="list-group-item ">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">WEIGHT</div>
          </div>
        </li>
        <li
          className={
            bmi < 18.5
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Underweight</div>
            <div className="col-4 ">&lt; 18.5</div>
            <div className="col-4 ">&lt; {range.underWeight.low} kg</div>
          </div>
        </li>
        <li
          className={
            18.5 < bmi && bmi < 24.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Normal</div>
            <div className="col-4 ">18.5-24.9</div>
            <div className="col-4 ">
              {range.normal.low + " kg -" + range.normal.high + " kg"}{" "}
            </div>
          </div>
        </li>
        <li
          className={
            24.9 < bmi && bmi < 90.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4 ">Over Weight</div>
            <div className="col-4 ">25-29.9</div>
            <div className="col-4 ">
              {range.overWeight.low + " kg -" + range.overWeight.high + " kg"}
            </div>
          </div>
        </li>
      
       
      
      </ul>
    </div>
  );
}

export default BmiList;