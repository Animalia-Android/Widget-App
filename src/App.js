import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a Front End JavaScript framework",
  },
  {
    title: "Why us React?",
    content: "React is a favorite JS library amongst engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color of Red",
    value: "Red",
  },
  {
    label: "The color of Green",
    value: "Green",
  },
  {
    label: "A shade of Blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  // const showAccordion = () => {
  //   if (window.location.pathname === "/") {
  //     return <Accordion items={items} />;
  //   }
  // };

  // const showList = () => {
  //   if (window.location.pathname === "/list") {
  //     return <Search />;
  //   }
  // };

  // const showDropdown = () => {
  //   if (window.location.pathname === "/dropdown") {
  //     return <Dropdown />;
  //   }
  // };

  // const showTranslate = () => {
  //   if (window.location.pathname === "/translate") {
  //     return <Translate />;
  //   }
  // };

  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
      <Header />
      <h1>Widget App</h1>
      {/* <Search /> */}
      {/* <Accordian items={items} /> */}
      {/* {showDropdown ? 
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> : null
      } */}
      {/* <Translate /> */}
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
