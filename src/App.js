import React, { useState } from 'react';

// import Accordian from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a Front End JavaScript framework',
//   },
//   {
//     title: 'Why us React?',
//     content: 'React is a favorite JS library amongst engineers',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components',
//   },
// ];

const options = [
  {
    label: 'The color of Red',
    value: 'Red',
  },
  {
    label: 'The color of Green',
    value: 'Green',
  },
  {
    label: 'A shade of Blue',
    value: 'Blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <h1>Widget App</h1>
      {/* <Search /> */}
      {/* <Accordian items={items} /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
