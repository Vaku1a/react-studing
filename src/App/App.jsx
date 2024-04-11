// import { useState } from "react";
// import { useId } from "react";
// import ClickCounter from "../ClickCounter/ClickCounter";
// import Toggler from "../Toggler/Toggler";
// import Reader from "../Reader/Reader";
import css from "./App.module.css";
// import articles from "../articles.json";
import LoginForm from "../LoginForm/LoginForm";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
// import SearchBar from "../SearchBar/SearchBar";
// import CoffeeSelection from "../CoffeeSelection/CoffeeSelection";

export default function App() {
  // const [clicks, setClicks] = useState(0);

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
  // };

  // const handleClicks = () => {
  //   setClicks(clicks + 1);
  // };

  //---------------------------------------------

  // const [lang, setLang] = useState("uk");
  // const handleLogin = (userData) => {
  //   // Виконуємо необхідні операції з даними
  //   console.log(userData);
  // };
  // const [coffeeSize, setCoffeeSize] = useState("sm");
  // const handleSizeChange = (evt) => {
  //   setCoffeeSize(evt.target.value);
  // };

  // const [hasAccepted, setHasAccepted] = useState(false);

  // const handleChange = (evt) => {
  //   console.log("evt.target.checked", evt.target.checked);
  //   setHasAccepted(evt.target.checked);
  // };
  return (
    <div className={css.container}>
      {/* <h1>State in React</h1>
      <hr />
      <Reader data={articles}></Reader>
      <button onClick={handleChangeObj}>Change obj state </button>
      <ClickCounter value={clicks} onUpdate={handleClicks} />
      <ClickCounter value={clicks} onUpdate={handleClicks} />
      <ClickCounter value={clicks} onUpdate={handleClicks} />
      <hr />
      <Toggler></Toggler>
      <Toggler></Toggler>
      <Toggler></Toggler> */}
      <h1>Module 3 Forms</h1>
      <hr />
      {/* <p>Selected language: {lang}</p> */}
      {/* <LangSwitcher value={lang} onSelect={setLang} />
      <SearchBar /> */}
      <LoginForm></LoginForm>
      <hr />
      {/* 
      <h2>Radio Button</h2>
      <h3>Select coffee size</h3>
      <div className="options">
        <CoffeeSelection
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
          label="Small"
        />
        <CoffeeSelection
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
          label="Medium"
        />
        <CoffeeSelection
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
          label="Large"
        />
      </div> */}
      {/* <h2>Check Boxes</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={hasAccepted}
            onChange={handleChange}
          />
          I accept terms and conditions
        </label>
        <button type="button" disabled={!hasAccepted}>
          Proceed
        </button>
      </div> */}
    </div>
  );
}
