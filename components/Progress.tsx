import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface ProgressItem {
  id: number;
  activity: string;
  completed: number;
  color: string;
}

interface ProgressProp {
  progressData: ProgressItem[];
}

const LinearProgressBarDemo: React.FC<ProgressProp> = ({ progressData }) => {
  return (
    <div className="bg-white w-[50%] p-3 rounded-2xl border-2 border-slate-300">
      <div className="flex justify-between">
        <p className="font-bold">Sales Person Activity</p>
        <button className="text-xs border border-slate-200 rounded-full p-2">
          View Report
        </button>
      </div>
      {progressData.map((item) => (
        <div className="my-3 flex items-center w-full" key={item.id}>
          <p className="mr-2 flex font-bold">{item.activity}</p>
          <ProgressBar
            completed={item.completed}
            bgColor={item.color}
            className="flex-1"
          />
        </div>
      ))}
    </div>
  );
};

export default LinearProgressBarDemo;
