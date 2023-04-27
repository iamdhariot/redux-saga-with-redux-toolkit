import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testRequest } from "../store/slices/test.slice";
function Test() {
  // to disptch actions
  const dispatch = useDispatch();
  //reducer state selector
  const test = useSelector((state) => state.test);

  const handleForSuccessSubmit = () => {
    // alert("button clicked");
    const request = {
      loginId: "Dhariot",
      password: "232242",
      isSuccess: true,
    };
    dispatch(testRequest(request));
  };
  const handleForFailureSubmit = () => {
    // alert("button clicked");
    const request = {
      loginId: "Dhariot",
      password: "232242",
      isSuccess: false,
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
    width: "40vw",
  };
  return (
    <div>
      <button
        onClick={handleForSuccessSubmit}
        style={{
          background: "dodgerblue",
          padding: 8,
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: 20,
          marginRight: 10,
        }}
      >
        DISPATCH FOR SUCCESS
      </button>
      <button
        onClick={handleForFailureSubmit}
        style={{
          background: "red",
          padding: 8,
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: 20,
        }}
      >
        DISPATCH FOR ERROR
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
