import { useEffect, useState } from "react";

const UseEffectPage = () => {
  const [count, setCount] = useState(0);
  const [intervalCount, setintervalCount] = useState(100);
  console.log("The component has been updated");

  useEffect(() => {
    console.log("Hello the component is mounted"); // this runs only at the beginning, not every time the component is updated
    // WE ADD HERE THE CODE WE WANT TO RUN ONLY ONCE
    setInterval(() => {
      console.log("This is the set interval");
      setintervalCount((prevValue) => prevValue + 100);
    }, 1000);
  }, []); // don't forget this part!

  return (
    <>
      <h1>New counter: {count}</h1>
      <h1>interval counter: {intervalCount}</h1>
      <button onClick={() => setCount(count + 1)}>➕</button>
    </>
  );
};

export default UseEffectPage;
