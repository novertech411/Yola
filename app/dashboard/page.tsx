"use client";
import React from "react";
import DashTop from "@/components/DashboardTop";
import Calendar from "@/components/Calender";
import { Bar } from "react-chartjs-2";
import LinearProgressBarDemo from "@/components/Progress";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Page() {
  const data = {
    labels: [
      "Label 1",
      "Label 2",
      "Label 3",
      "Label 4",
      "Label 5",
      "Label 6",
      "Label 7",
      "Label 8",
      "Label 9",
      "Label 10",
    ],
    datasets: [
      {
        label: "Dataset Label",
        data: [5, 10, 15, 20, 50, 30, 18, 3, 45, 8],
        backgroundColor: "#EFADF3",
        hoverBackgroundColor: "#837DFB",
        borderColor: "#1E1E2C",
        borderWidth: 0,
        borderRadius: 8,
      },
    ],
  };

  const progressData = [
    {
      id: 1,
      activity: "Reading",
      completed: 75,
      color: "#EFADF3", // Tomato color
    },
    {
      id: 2,
      activity: "Writing",
      completed: 50,
      color: "#00B7E9", // Steel Blue color
    },
    {
      id: 3,
      activity: "Exercise",
      completed: 90,
      color: "#3EC99E", // Lime Green color
    },
    {
      id: 4,
      activity: "Coding",
      completed: 65,
      color: "#837DFB", // Royal Blue color
    },
    {
      id: 5,
      activity: "Drawing",
      completed: 30,
      color: "#338BBD", // Hot Pink color
    },
  ];

  return (
    <div className="text-black w-[95%]">
      <h2 className="font-bold text-2xl p-3">Home</h2>
      <DashTop />
      <div className="flex items-center justify-between my-5 ">
        <div className="w-[600px] bg-white rounded-lg h-fit ">
          <div className="flex justify-between p-3 items-center">
            <p className="font-bold text-2xl">Leads by Source</p>
            <p className="text-xs">View reports</p>
          </div>
          <Bar data={data} className="p-3" />
        </div>
        <div className="bg-white rounded-lg w-[24rem] ml-4">
          <div className="p-5">
            <Calendar />
          </div>
        </div>
      </div>
      <LinearProgressBarDemo progressData={progressData} />
    </div>
  );
}

export default Page;
