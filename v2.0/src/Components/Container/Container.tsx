// src/Pages/Container/Container.tsx
import React, { useState, useEffect } from "react";
import { Log } from "../Interfaces/Interfaces";
import Growth from "./Growth/Growth";
import "./Container.css";

const Container: React.FC = () => {
  // 팝업의 활성화 상태를 나타내는 상태 및 업데이트 함수
  const [isPopupVisible, setPopupVisible] = useState(false);

  // 성장 로그 데이터를 담는 상태 및 업데이트 함수
  const [growthLogs, setGrowthLogs] = useState<Log[]>([]);

  // 버튼 클릭 시, 팝업 상태를 토글하고 서버로부터 데이터를 가져오는 함수
  const handleButtonClick = async () => {
    try {
      // 서버의 엔드포인트로 POST 요청
      const response = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      // 서버 응답이 성공적이면
      if (!response.ok) {
        throw new Error("서버 응답이 실패했습니다.");
      }

      // 서버로부터 받은 JSON 데이터를 상태에 업데이트
      const data = await response.json();
      setGrowthLogs(data);

      // 오류가 발생한 경우 콘솔에 오류 메시지 출력
    } catch (error) {
      console.error("데이터를 서버로 전송하거나 받아오는 중 오류 발생:", error);
    }

    // 팝업 상태를 토글
    setPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    // 초기 로딩 시에 팝업을 열지 않도록 수정
    setPopupVisible(false);
  }, []);

  return (
    <div id="container">
      <button onClick={handleButtonClick}>성장 로그</button>
      {isPopupVisible && <Growth growthLogs={growthLogs} />}
    </div>
  );
};

export default Container;
