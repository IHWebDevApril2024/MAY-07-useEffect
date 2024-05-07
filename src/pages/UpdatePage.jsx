import { useState, useEffect } from "react";

const UpdatePage = () => {
  const [state1, setState1] = useState("Mica");
  const [state2, setState2] = useState(9999);
  const [state3, setState3] = useState("Marina");

  useEffect(() => {
    console.log("Mounting console log");
  }, []);
  
  useEffect(() => {
    console.log("This one runs with STATE 3");
  }, [state3]);

  useEffect(() => {
    console.log("This one runs with STATE 1");
  }, [state1]);

  return (
    <>
      <h4>First state: {state1}</h4>
      <button onClick={() => setState1("Oriol")}>Change first</button>
      <h4>Second state: {state2}</h4>
      <button onClick={() => setState2(7777)}>Change second</button>
      <h4>Third state: {state3}</h4>
      <button onClick={() => setState3("Valentina")}>Change third</button>
    </>
  );
};

export default UpdatePage;
