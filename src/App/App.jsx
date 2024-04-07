import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import Toggler from "../Toggler/Toggler";
import Reader from "../Reader/Reader";
import css from "./App.module.css";
import articles from "../articles.json";

export default function App() {
  const [clicks, setClicks] = useState(0);

  // const [obj, setObj] = useState({
  //   a: 0,
  //   b: 0,
  //   c: {
  //     x: 5,
  //     y: 10,
  //   },
  // });

  // const handleChangeObj = () => {
  //   setObj({
  //     ...obj,
  //     c: {
  //       ...obj.c,
  //       x: 100,
  //     },
  //   });
  //   console.log("obj", obj);
  // };

  const handleClicks = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className={css.container}>
      <h1>State in React</h1>
      <hr />
      <Reader data={articles}></Reader>
      {/* <button onClick={handleChangeObj}>Change obj state </button> */}
      {/* <ClickCounter value={clicks} onUpdate={handleClicks} />
      <ClickCounter value={clicks} onUpdate={handleClicks} />
      <ClickCounter value={clicks} onUpdate={handleClicks} /> */}
      <hr />
      {/* <Toggler></Toggler>
      <Toggler></Toggler>
      <Toggler></Toggler> */}
    </div>
  );
}
