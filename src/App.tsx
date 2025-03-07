import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Chat, Detail, List } from './components';
import Login from './components/login/Login';

function App() {
  const [user, setUser] = useState(false);

  return (
    <Wrap>
      {user ? (
        <>
          <List setUser={setUser} />
          <Chat />
          {/* <Detail /> */}
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
