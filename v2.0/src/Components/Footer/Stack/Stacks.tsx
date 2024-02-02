// src/Components/Footer/Stack/Stacks.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./Stacks.css";

// 각 기술 스택의 props를 정의하는 인터페이스 정의
interface StackItemProps {
  stackName: string;
}

// 기술 스택을 나타내는 함수 컴포넌트 정의
const StackItem: React.FC<StackItemProps> = ({ stackName }) => (
  <Link to={`/${stackName.toLowerCase()}`}> {/* 라우팅 경로는 toLowerCase()를 이용해 소문자로 변경 */}
    {/* 각 스택의 이미지 */}
    <img
      src={`https://s3.ap-northeast-2.amazonaws.com/my-icons-svg/SVG/${stackName}.svg`} // s3 버킷에 업로드한 파일명이 stackName과 동일하므로 바로 렌더링에도 반영됨(stackName.svg)
      alt={stackName}
      style={{ width: "5rem", height: "5rem", cursor: "pointer" }}
    />
  </Link>
);

// 기술 스택을 렌더링하는 함수 컴포넌트 정의
const Stacks: React.FC = () => {
  // 각 스택의 데이터
  const stacksData: StackItemProps[] = [
    { stackName: "AWS" },
    { stackName: "HTML" },
    { stackName: "CSS" },
    { stackName: "JavaScript" },
  ];

  return (
    <div className="stacks">
      {/* 스택 데이터를 매핑하여 각 항목을 렌더링 */}
      {stacksData.map((stack, index) => (
        <StackItem key={index} {...stack} />
      ))}
    </div>
  );
};

export default Stacks;
