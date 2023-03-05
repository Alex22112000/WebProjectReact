import React from "react";

function ctElementTemplate({ name, src, cost, prodId, desc }) {
  return (
    <>
      <style>
        {`
          .container {
            border: solid;
            border-color: #dca632;
            border-width: 2px;
            width: 30vw;
            height: 16vw;
            margin: 15px 30% 15px;
            background-color: #3281dc;
            border-radius: 6px;
            font-family: "Inter UI", "SF Pro Display", -apple-system,
              BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
              "Open Sans", "Helvetica Neue", sans-serif;
          }

          .name {
            position: relative;
            font-size: 3vw;
            top: 0vw;
            left: 1vw;
          }

          .cost {
            position: relative;
            font-size: 2vw;
            left: 1vw;
            top: -10.1vw;
          }

          img {
            position: relative;
            left: 16vw;
            bottom: 8.5vw;
            border: solid;
            border-color: #7cabf2;
            border-width: 1px;
            border-radius: 10px;
            width: 40%;
            height: 60%;
            top: 0vw;
          }

          .desc {
            position: relative;
            font-size: 2vw;
            left: 1vw;
            bottom: 5vw;
            width: 25vw;
            top: -13vw;
          }

          c-button {
            position: relative;
            left: 1vw;
            top: -3.5vw;
            width: 9vw;
            height: 4vw;
          }
        `}
      </style>

      <div className="container">
        <div className="name">{name}</div>
        <img src={src} width="200" height="100" />
        <div className="cost">{cost} руб</div>
        <c-button className="buyBt" value="Купить" id={prodId}></c-button>
        <div className="desc">{desc} штук</div>
      </div>
    </>
  );
}

export default ctElementTemplate;