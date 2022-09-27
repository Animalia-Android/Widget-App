import React from 'react';

// import Accordian from './components/Accordion';
// import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a Front End JavaScript framework',
  },
  {
    title: 'Why us React?',
    content: 'React is a favorite JS library amongst engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const App = () => {
  return (
    <div>
      <h1>Widget App</h1>
      {/* <Search /> */}
      {/* <Accordian items={items} /> */}
    </div>
  );
};

export default App;
