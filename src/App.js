import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="contianer">
      <button onClick={() => setShow((show) => !show)}> Show/Hide</button>
      {show ? <h1 className="text">Welcome To React Challege</h1> : null}
    </div>
  );
}
