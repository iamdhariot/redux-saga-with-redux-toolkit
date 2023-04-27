import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testRequest } from "../store/slices/test.slice";
function Test() {
  // to disptch actions
  const dispatch = useDispatch();
  //reducer state selector
  const test = useSelector((state) => state.test);

  const handleSubmit = () => {
    // alert("button clicked");
    const request = {
      userId: "Dhariot",
      password: "232242",
    };
    dispatch(testRequest(request));
  };

  const pStyle = {
    margin: 0,
    padding: 0,
  };
  const hStyle = {
    margin: 0,
    padding: 0,
    minHeight: "2vh",
  };
  const dataStyle = {
    margin: 0,
    padding: 0,
    fontSize: 10,
    width: "55vw",
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        style={{
          background: "dodgerblue",
          padding: 8,
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: 20,
        }}
      >
        DISPATCH
      </button>
      <div style={{ width: "20%", marginTop: 10 }}>
        <p style={pStyle}>loading:</p>
        <h5 style={hStyle}>{test.loading.toString()}</h5>
        <p style={pStyle}>message:</p>
        <p style={dataStyle}>{JSON.stringify(test.getAll)}</p>
        <p style={pStyle}>error:</p>
        <h5 style={hStyle}>{test.error}</h5>
      </div>
    </div>
  );
}

export default Test;
