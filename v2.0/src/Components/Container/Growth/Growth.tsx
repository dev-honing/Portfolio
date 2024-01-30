// src/Pages/Container/Growth/Growth.tsx
import { GrowthProps } from "../../Interfaces/Interfaces";
import "./Growth.css";

const Growth: React.FC<GrowthProps> = ({ growthLogs }) => {
  return (
    <div className="growth active">
      <ul>
        <h2>주차별 학습 로그</h2>
        {growthLogs.map((log, index) => (
          <li key={index}>
            {/* 주차별 학습 로그 */}
            <span>{log.week}</span>: {log.log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Growth;
