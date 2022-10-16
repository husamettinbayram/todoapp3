import React, { useState } from "react";

function ToDo(props) {
  const { obje, liste, setListe } = props;

  // let editValue;
  const [editValue, setEditValue] = useState(obje.text);
  const [isEdit, SetIsEdit] = useState(false);

  const handleDone = function () {
    let geciciDizi = [];
    let geciciObje = { ...obje, isDone: !obje.isDone };

    liste.map((item) => {
      if (item.id === obje.id) {
        geciciDizi = [...geciciDizi, geciciObje];
      } else {
        geciciDizi = [...geciciDizi, item];
      }
      return null;
    });

    setListe(geciciDizi);
  };

  const handleDelete = function () {
    let geciciDizi = [];
    liste.map((item) => {
      if (item.id !== obje.id) geciciDizi = [...geciciDizi, item];
      return null;
    });
    setListe(geciciDizi);
  };

  return (
    <div
      className={`alert ${
        obje.isDone === true ? "alert-secondary" : "alert-primary"
      } p-1`}
    >
      <div className="d-flex justify-content-between align-items-center">
        {isEdit === false ? (
          <div style={{ height: "100px" }}>
            <p
              className={`alert ${
                obje.isDone === true ? "text-decoration-line-through" : "none"
              }`}
            >
              {" "}
              {obje.text}
            </p>{" "}
          </div>
        ) : (
          <div style={{ height: "100px" }}>
            <input
              style={{ marginTop: "20px" }}
              value={editValue}
              onChange={(olay) => setEditValue(olay.target.value)}
            />
            <button
              onClick={() => {
                obje.text = editValue;
                // setEditValue(editValue);
                SetIsEdit(!isEdit);
              }}
            >
              OK
            </button>
          </div>
        )}

        <div className="btn-group" role="group">
          {/* {isEdit === false ?
                        <button type="button" className={`${obje.isDone === true ? "btn btn-sm btn-secondary" : "btn btn-sm btn-success"}`} style={{ height: "30px", width: "100px" }} onClick={handleDone}>{obje.isDone === true ? "Incomplete" : "Completed"}</button> :
                        <button type="button" className={`${obje.isDone === true ? "btn btn-sm btn-outline-secondary" : "btn btn-sm btn-outline-success"}`} style={{ height: "30px", width: "100px", color: "transparent" }} >{obje.isDone === true ? "Incomplete" : "Completed"}</button>
                    } */}
          <button
            type="button"
            className={`${isEdit ? "invisible" : "visible"} ${
              obje.isDone === true
                ? "btn btn-sm btn-secondary"
                : "btn btn-sm btn-success"
            }`}
            style={{ height: "30px", width: "100px" }}
            onClick={handleDone}
          >
            {obje.isDone === true ? "Incomplete" : "Completed"}
          </button>

          <button
            type="button"
            className={`${
              obje.isDone ? "invisible" : "visible"
            } btn btn-warning btn-sm`}
            style={{ height: "30px", width: "100px" }}
            onClick={() => {
              SetIsEdit(!isEdit);
              setEditValue(obje.text)
            //   isEdit ? setEditValue(obje.text) : setEditValue(obje.text);
            }}
          >
            {isEdit ? "Cancel" : "Edit"}
          </button>
          {/* <button type="button" className="btn btn-warning btn-sm" style={{ height: "30px", width: "100px" }} onClick={() => SetIsEdit(!isEdit)}>Edit</button> */}

          {/* {isEdit === false ?
                        <button type="button" className="btn btn-danger btn-sm" style={{ height: "30px", width: "100px" }} onClick={handleDelete}>Delete</button> :
                        <button type="button" className="btn btn-outline-danger btn-sm" style={{ height: "30px", width: "100px", color: "transparent" }} >Delete</button>
                    } */}
          <button
            type="button"
            className={`${
              isEdit ? "invisible" : "visible"
            } btn btn-danger btn-sm`}
            style={{ height: "30px", width: "100px" }}
            onClick={handleDelete}
          >
            Delete
          </button>
          {/* <button type="button" className={`${isEdit ? "d-none" : "d-inline"} ${obje.isDone === true ? "btn btn-sm btn-secondary" : "btn btn-sm btn-success"}`} style={{ height: "30px", width: "100px" }} onClick={handleDone}>{obje.isDone === true ? "Incomplete" : "Completed"}</button> */}
        </div>
      </div>
      <p
        style={{
          textAlign: "right",
          fontSize: "small",
          marginTop: "5px",
          marginBottom: "0px",
        }}
      >
        {obje.createdAt}
      </p>
    </div>
  );
}

export default ToDo;
