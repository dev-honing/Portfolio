// src/Pages/Container/Container.tsx
import React, { useState } from "react";
import Growth from "./Growth/Growth";

const Container: React.FC = () => {
  // 팝업의 활성화 상태를 나타내는 변수
  const [isPopupVisible, setPopupVisible] = useState(false);

  // 버튼 클릭 시, 팝업 상태를 토글하는 함수
  const handleButtonClick = () => {
    // setPopupVisible 함수를 호출해 isPopupVisible 상태를 반전
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div id="container">
      <button onClick={handleButtonClick}>성장 로그</button>
      {isPopupVisible && <Growth />}
    </div>
  );
};

export default Container;
