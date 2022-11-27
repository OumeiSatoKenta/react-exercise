/* eslint reack-hooks/exhaustive-deps: off */
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { ColorfulMessage } from "./components/ColorfulMessage";
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); // stateの変数名、その変数を変更する関数名
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    // 3の倍数の時だけ顔を出す
    if (num > 0) {
      if (num % 3 === 0) {
        //setFaceShowFlag(true); // このままだと何回も再レンダリングしてしまう再レンダリングしてしまう
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //setFaceShowFlag(false);
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]); // numだけ変更してみたい

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="blue">こんにちわ!</ColorfulMessage>
      <ColorfulMessage color="pink">はい、こんにちわ!</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

export default App;
