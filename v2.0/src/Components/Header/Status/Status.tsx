// src/Pages/Header/Status/Status.tsx
import React from "react";

interface StatusProps {
  employ: boolean;
}

const Status: React.FC<StatusProps> = ({ employ }) => {
  const statusText = employ ? "구직 중" : "구직 완료";
  const statusColor = employ ? "#4caf50" : "#f44336";

  return (
    <div className="employ-status" style={{ backgroundColor: statusColor, color: "#ffffff", fontWeight:"bold", fontSize: "25px", borderRadius: "4px" }}>
      {statusText}
    </div>
  );
};

export default Status;
