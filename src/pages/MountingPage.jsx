import { useState } from "react";

function MountingPage() {
  const [count, setCount] = useState(0);
  console.log("Component mounted");

  /* setTimeout(()=>{ 
    setCount(count + 1)
}, 1000) */

  setInterval(() => {
    // this creates an infinite interval over other intervals
    setCount(count + 1); // every time this is updated we update the component so we create another interval over the previous interval
  }, 1000);

  return <h2>Mounting {count}</h2>;
}

export default MountingPage;
