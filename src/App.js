import React from "react";
import Test from "./pages/Test";
function App() {
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
      <Test />
    </div>
  );
}

export default App;
