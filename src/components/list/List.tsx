import ChatList from './chatList/ChatList';
import UserInfo from './userInfo/UserInfo';
import styled from 'styled-components';
export const List = ({ setUser }) => {
  return (
    <Wrap>
      <UserInfo setUser={setUser} />
      <ChatList />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
`;
