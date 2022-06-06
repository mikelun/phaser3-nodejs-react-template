import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Chat } from './components/Chat';
import { Loader } from './components/Loader';


const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`
function Button() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}

function App() {
  return (
    <Backdrop>
      <Loader/>
    </Backdrop>
  )
}

export default App;
