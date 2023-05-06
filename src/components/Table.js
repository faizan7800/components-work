import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import Editing from "./Editing";
import UserInput from "./UserInput";

function Table() {
  const [edit, setEdit] = useState(false);
  const [index, getIndex] = useState(0);
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");
  const [editingData, setEditingData] = useState([]);
  const [writingData, setWritingData] = useState([
    {
      id: 1,
      description: "Writing1",
      semester: "",
      prefix: "ENG",
      number: "368/371",
      grade: "",
    },
    {
      id: 2,
      description: "Writing2",
      semester: "",
      prefix: "",
      number: "",
      grade: "",
    },
    {
      id: 3,
      description: "Writing3",
      semester: "",
      prefix: "",
      number: "",
      grade: "",
    },
  ]);
  const [speakingData, setSpeaking] = useState([
    {
      id: 1,
      description: "Speaking1",
      semester: "",
      prefix: "SPK",
      number: "208/230",
      grade: "",
    },
    {
      id: 2,
      description: "Speaking2",
      semester: "",
      prefix: "",
      number: "",
      grade: "",
    },
    {
      id: 3,
      description: "Speaking3",
      semester: "",
      prefix: "",
      number: "",
      grade: "",
    },
  ]);
  const handleEdit = (
    event,
    id,
    description,
    semester,
    prefix,
    number,
    grade
  ) => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
    setEditingData({ id, description, semester, prefix, number, grade });
    getIndex(id - 1);
  };

  const handleSave = (id, description, semester, prefix, number, grade) => {
    // let removeIndex = writingData.filter((data) => data.id === id);
    // const index = writingData.indexOf(removeIndex);
    // console.log(index);
    // if (index > -1) {
    //   // only splice array when item is found
    //   writingData.splice(index, 1); // 2nd parameter means remove one item only
    // }
    if (
      description === "Writing1" ||
      description === "Writing2" ||
      description === "Writing3"
    ) {
      let newWritingArr = writingData.filter(
        (item) => item.description !== description
      );
      let finalWriting = [
        { id, description, semester, prefix, number, grade },
        ...newWritingArr,
      ];
      let newFinalWriting = finalWriting.sort(sort_by_id());
      setWritingData(newFinalWriting);
    } else {
      let newSpeakingArr = speakingData.filter(
        (item) => item.description !== description
      );
      let finalSpeaking = [
        { id, description, semester, prefix, number, grade },
        ...newSpeakingArr,
      ];
      let newFinalSpeaking = finalSpeaking.sort(sort_by_id());
      setSpeaking(newFinalSpeaking);
    }

    setEdit(false);
  };

  function sort_by_id() {
    return function (elem1, elem2) {
      if (elem1.id < elem2.id) {
        return -1;
      } else if (elem1.id > elem2.id) {
        return 1;
      } else {
        return 0;
      }
    };
  }
  const handleCredits = (e) => {
    let newCredits = e.target.value;
    setCredits(newCredits);
    if (newCredits > "40" && newCredits < "70") {
      let arr = writingData.filter((item) => 3 !== item.id);

      let speakArr = speakingData.filter((item) => 3 !== item.id);
      setWritingData(arr);
      setSpeaking(speakArr);
    } else if (newCredits > "70") {
      setWritingData([
        {
          id: 1,
          description: "Writing1",
          semester: "",
          prefix: "ENG",
          number: "368/371",
          grade: "",
        },
      ]);
      setSpeaking([
        {
          id: 1,
          description: "Speaking1",
          semester: "",
          prefix: "SPK",
          number: "208/230",
          grade: "",
        },
      ]);
    }
  };

  useEffect(() => {}, [credits]);

  return (
    <>
      <div className="d-flex flex-column my-2">
        <div className="my-1">
          <label htmlFor="name">Student Name</label>
          <input
            className="mx-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-1">
          <label htmlFor="credits">Total Credits to Transfer</label>
          <input
            className="mx-2"
            type="number"
            id="credits"
            value={credits}
            onChange={handleCredits}
          />
        </div>
      </div>
      {edit ? (
        <Editing
          id={editingData.id}
          description={editingData.description}
          semester={editingData.semester}
          prefix={editingData.prefix}
          number={editingData.number}
          grade={editingData.grade}
          handleEdit={handleEdit}
          handleSave={handleSave}
        />
      ) : (
        <>
          <div className="container my-4">
            <table className="table table-bordered">
              <thead className="table-borderless ">
                <tr className="bg-primary text-light">
                  <th colSpan="7">Writing Emphasis for {name}</th>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Semester</th>
                  <th>Prefix</th>
                  <th>Number</th>
                  <th>Grade</th>
                  <th>Editing</th>
                </tr>
              </thead>
              <tbody>
                {writingData.map(
                  ({
                    id,
                    description,
                    semester,
                    prefix,
                    number,
                    grade,
                    editing,
                  }) => (
                    <TableRow
                      id={id}
                      description={description}
                      semester={semester}
                      prefix={prefix}
                      number={number}
                      grade={grade}
                      editing="Edit"
                      handleEdit={handleEdit}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="container my-4">
            <table className="table table-bordered">
              <thead className="table-borderless ">
                <tr className="bg-primary text-light">
                  <th colSpan="7">Speaking Emphasis for {name}</th>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Semester</th>
                  <th>Prefix</th>
                  <th>Number</th>
                  <th>Grade</th>
                  <th>Editing</th>
                </tr>
              </thead>
              <tbody>
                {speakingData.map(
                  ({ id, description, semester, prefix, number, grade }) => (
                    <TableRow
                      id={id}
                      description={description}
                      semester={semester}
                      prefix={prefix}
                      number={number}
                      grade={grade}
                      editing="Edit"
                      handleEdit={handleEdit}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default Table;
