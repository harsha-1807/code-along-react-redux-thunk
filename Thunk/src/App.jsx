import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./Components/utils/action";
// import { FetchData } from "./Components/store.js";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((storeData) => storeData.user);

  return (
    <>
      <button style={{marginLeft:"750px",width:"70px",backgroundColor:"green",color:"white"}}
        onClick={() => {
          dispatch(FetchData());
        }}
      >
        GET DATA
      </button>
      {users.map((e, i) => (
        <fieldset key={i}>
          <legend>{e.username}</legend>
          <h1>{e.name}</h1>
          <h1>{e.email}</h1>
        </fieldset>
      ))}
    </>
  );
}

export default App;