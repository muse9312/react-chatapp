import React, { useState } from 'react';
import styled from 'styled-components';
const Login = ({ setUser }) => {
  // const [avatar, setAvatar] = useState({
  //   file: null,
  //   url: '',
  // });

  // const handleChange = e => {
  //   if (e.target.files[0]) {
  //     setAvatar({
  //       file: e.target.files[0],
  //       url: URL.createObjectURL(e.target.files[0]),
  //     });
  //   }
  // };

  const handleSubmit = () => {
    setUser(true);
  };

  return (
    <Wrap>
      <div className="logo-area">
        <img src={'./logo-black.png'} alt="logo" />
      </div>
      <div className="item">
        <form action="">
          <div className="input-area">
            <input type="text" placeholder="유저이름" />
            <input type="password" placeholder="패스워드" />
          </div>
          <button type="submit" onClick={handleSubmit}>
            로그인
          </button>
        </form>
      </div>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10rem;
  .logo-area {
    img {
      aspect-ratio: 100/22;
      width: 200px;
    }
  }
  .deparator {
    width: 1px;
    height: 80%;
    background-color: #d9d9d9;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h2 {
      font-size: 24px;
      font-weight: 600;
      color: #030712;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 100px;

      .input-area {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        min-width: 400px;
      }
      input {
        padding: 20px;
        border: 1px solid #d9d9d9;
        outline: none;
        border-radius: 5px;
        background-color: transparent;
        color: #030712;
        &:focus {
          border: 1px solid #030712;
          transition: all 0.3s ease;
        }
      }

      button {
        width: 100%;
        padding: 20px;
        border: 1px solid #030712;
        border-radius: 10px;
        color: #030712;
        &:hover {
          color: #ff681b;
          border: 1px solid #ff681b;
          transition: all 0.3s ease;
        }
      }
    }
  }
  .file {
    display: none;
  }
`;
