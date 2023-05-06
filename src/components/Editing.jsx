import React, { useState } from "react";

const Editing = ({
  id,
  description,
  semester,
  prefix,
  number,
  grade,
  handleEdit,
  handleSave,
}) => {
  const [formDescription, setFormDescription] = useState(description);
  const [formSemester, setFormSemester] = useState(semester);
  const [formPrefix, setFormPrefix] = useState(prefix);
  const [formNumber, setFormNumber] = useState(number);
  const [formGrade, setFormGrade] = useState(grade);

  return (
    <div className="px-2 py-4">
      <div className="d-flex flex-column py-2">
        <label htmlFor="id" className="text-start">
          ID
        </label>
        <input
          type="text"
          id="_id"
          className="bg-secondary"
          value={id}
          readOnly
        />
      </div>
      <div className="py-2 d-flex flex-column">
        <label htmlFor="description" className="text-start">
          Description
        </label>
        <input
          type="text"
          id="description"
          onChange={(e) => setFormDescription(e.target.value)}
          value={formDescription}
          readOnly
        />
      </div>
      <div className="py-2 d-flex flex-column">
        <label htmlFor="semester" className="text-start">
          Semester
        </label>
        <input
          type="text"
          id="semester"
          onChange={(e) => setFormSemester(e.target.value)}
          value={formSemester}
        />
      </div>
      <div className="py-2 d-flex flex-column">
        <label htmlFor="prefix" className="text-start">
          Prefix
        </label>
        <input
          type="text"
          id="prefix"
          onChange={(e) => setFormPrefix(e.target.value)}
          value={formPrefix}
        />
      </div>
      <div className="py-2 d-flex flex-column">
        <label htmlFor="number" className="text-start">
          Number
        </label>
        <input
          type="text"
          id="number"
          onChange={(e) => setFormNumber(e.target.value)}
          value={formNumber}
        />
      </div>
      <div className="py-2 d-flex flex-column">
        <label htmlFor="id" className="text-start">
          Grade
        </label>
        <input
          type="text"
          id="grade"
          onChange={(e) => setFormGrade(e.target.value)}
          value={formGrade}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-rounded btn-primary mx-2"
          onClick={(e) =>
            handleSave(
              id,
              formDescription,
              formSemester,
              formPrefix,
              formNumber,
              formGrade
            )
          }
        >
          Save
        </button>
        <button
          className="btn btn-rounded btn-secondary mx-2"
          onClick={handleEdit}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Editing;
