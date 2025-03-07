import styled from 'styled-components';
import { useState } from 'react';
import { Search } from 'lucide-react';
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <Wrap>
      <div className="search">
        <div className="search-bar">
          <input type="text" placeholder="검색" />
          <Search />
        </div>
        <img
          src={addMode ? './minus.png' : './plus.png'}
          alt="plus"
          className="add"
          onClick={() => setAddMode(prev => !prev)}
        />
      </div>

      <div className="items">
        <div className="item">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <span>관리자,유저1,디자이너1,</span>
            <p>안녕하세요</p>
          </div>
        </div>
        <div className="item">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <span>관리자,유저2,디자이너2,</span>
            <p>안녕하세요</p>
          </div>
        </div>
        <div className="item">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <span>관리자,유저3,디자이너3,</span>
            <p>안녕하세요</p>
          </div>
        </div>
        <div className="item">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <span>관리자,유저4,디자이너4,</span>
            <p>안녕하세요</p>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default ChatList;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    &-bar {
      position: relative;
      display: flex;
      align-items: center;
      flex: 1;
      gap: 10px;

      input {
        flex: 1;
        padding: 10px 48px 10px 12px;
        background-color: transparent;
        outline: none;
        border: 1px solid #d9d9d9;
        border-radius: 10px;
        color: #030712;
      }
      svg {
        position: absolute;
        right: 12px;
        cursor: pointer;
        color: #030712;
      }
    }
    .add {
      width: 36px;
      height: 36px;
      background-color: rgba(17, 25, 40, 0.5);
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background-color: rgba(17, 25, 40, 0.7);
      }
    }
  }

  .items {
    overflow-y: auto;
    flex: 1;

    .item {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 20px;
      border-bottom: 1px solid #d9d9d9;
      cursor: pointer;
      color: #030712;
      &:last-child {
        border-bottom: none;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
      .texts {
        display: flex;
        flex-direction: column;
        gap: 10px;
        span {
          font-weight: 500;
        }
        p {
          font-size: 14px;
          font-weight: 300;
        }
      }
    }
  }
`;
