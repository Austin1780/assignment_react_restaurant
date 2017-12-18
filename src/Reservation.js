import React from "react";

const Reservation = ({ formFields }) => {
  const formField = formFields.map(formField => {
    const { type, name, label } = formField;

    return (
      <div className="form-group">
        <label>
          {formField.label}
          <input
            type={formField.type}
            name={formField.name}
            placeholder={formField.placeholder}
            className="form-control"
          />
        </label>
      </div>
    );
  });

  return (
    <div className="col-sm-4 col-sm-offset-4">
      <div className="panel panel-default">
        <div className="panel-heading">Reservation</div>
        <div className="panel-body">
          <form>
            {formField}
            <button className="btn btn-default">Book a Table</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
