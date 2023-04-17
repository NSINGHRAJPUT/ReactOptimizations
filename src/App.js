import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [btnTitle,setBtnTitle] = useState(false)

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);
  const changeBtnHandler = () =>{
    setBtnTitle((preBtnTitle)=>!preBtnTitle)
  }

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} btnTitle={btnTitle}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      
      <Button onClick={changeBtnHandler}>{ btnTitle ? 'Change to ascending order' : 'Change to Descending order'}</Button>
    </div>
  );
}

export default App;
