// src/Pages/Header/Status/Status.tsx
import React from "react";
import "./Status.css";

interface StatusProps {
  employ: boolean;
}

const Status: React.FC<StatusProps> = ({ employ }) => {
  const statusText = employ ? "구직 중" : "구직 완료";
  const statusClass = employ ? "green" : "red";

  return <div className={`status ${statusClass}`}>{statusText}</div>;
};

export default Status;
