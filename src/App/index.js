import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testRequest } from "../store/slices/test.slice";
function App() {
  // to disptch actions
  const dispatch = useDispatch();
  //reducer state selector
  const test = useSelector((state) => state.test);
  console.log(test);

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
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Redux-saga-with-redux-toolkit</h1>
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
        <p style={pStyle}>
          loading:<h5 style={hStyle}>{test.loading.toString()}</h5>
        </p>
        <p style={pStyle}>
          message:<h5 style={hStyle}>{test.message}</h5>
        </p>
        <p style={pStyle}>
          error:<h5 style={hStyle}>{test.error}</h5>
        </p>
      </div>
    </div>
  );
}

export default App;
