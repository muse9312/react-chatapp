import styled from 'styled-components';

const UserInfo = ({ setUser }) => {
  return (
    <Wrap>
      <div className="user">
        <img src={'./avatar.png'} alt="avatar" />
        <h2>오세원</h2>
      </div>
      <button type="button" onClick={() => setUser(false)}>
        로그아웃
      </button>
      {/* <div className="icons">
        <img src={'./more.png'} alt="more" />
        <img src={'./video.png'} alt="video" />
        <img src={'./edit.png'} alt="edit" />
      </div> */}
    </Wrap>
  );
};

export default UserInfo;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  padding: 20px;

  .user {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #030712;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  button {
    background-color: #ff681b;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .icons {
    display: flex;
    gap: 20px;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`;
