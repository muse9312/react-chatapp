import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { ImagePlus } from 'lucide-react';
import { SmilePlus } from 'lucide-react';

export const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState('');
  const handleEmoji = e => {
    setText(prev => prev + e.emoji);
    setOpenEmoji(false);
  };

  return (
    <Wrap>
      <div className="top">
        <div className="user">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <span>오세원</span>
            <p>안녕하세요</p>
          </div>
        </div>
        <div className="icons">
          {/* <img src={'./phone.png'} alt="phone" />
          <img src={'./video.png'} alt="video" />
          <img src={'./info.png'} alt="info" /> */}
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src={'./bg.png'} alt="img" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
        </div>
        <div className="message">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src={'./avatar.png'} alt="avatar" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <input type="text" placeholder="Type a message..." value={text} onChange={e => setText(e.target.value)} />
        <button className="img-btn">
          <ImagePlus />
        </button>
        <div className="emoji">
          <SmilePlus onClick={() => setOpenEmoji(prev => !prev)} />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button type="submit" className="send">
          send
        </button>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  flex: 2;
  color: #030712;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  height: 100%;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    padding: 20px;
    .user {
      display: flex;
      align-items: center;
      gap: 20px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      .texts {
        display: flex;
        flex-direction: column;
        span {
          font-size: 18px;
          font-weight: bold;
        }
        p {
          font-size: 14px;
          font-weight: 300;
          color: #a5a5a5;
        }
      }
    }
    .icons {
      display: flex;
      align-items: center;
      gap: 20px;
      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 20px;
    padding: 20px;
    overflow-y: auto;

    .message {
      display: flex;
      max-width: 70%;
      gap: 20px;

      &.own {
        align-self: flex-end;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: cover;
        }

        .texts {
          p {
            background-color: #ff681b;
          }
        }
      }
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
      }
      .texts {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 5px;
        p {
          padding: 20px;
          border-radius: 10px;
          background-color: #d9d9d9;
          color: #000;
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 24px;
    border-top: 1px solid #d9d9d9;
    padding: 20px;
    margin-top: auto;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .img-btn {
      cursor: pointer;
      background-color: transparent;
      border: none;
      padding: 0;
    }

    .emoji {
      position: relative;
      .picker {
        position: absolute;
        left: 0;
        bottom: 50px;
        transform: translateX(-80%);
      }
    }

    input {
      position: relative;
      flex: 1;
      background-color: transparent;
      outline: none;
      padding: 10px 20px;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      color: #030712;
      ::placeholder {
        color: #d9d9d9;
      }
    }

    .send {
      background-color: #ff681b;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
