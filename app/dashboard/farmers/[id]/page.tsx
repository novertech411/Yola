"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiGreaterThanThin } from "react-icons/pi";
import EditIcon from "@/components/icons/EditIcon";

const Details = () => {
  const router = useRouter();

  const [filterStatus, setFilterStatus] = useState("all");

  const data = [
    {
      id: 2,
      farmerId: "F1002",
      farmerName: "Jane Smith",
      gender: "Female",
      dob: "1985-08-20",
      lga: "Lagos",
      phoneNumber: "234-567-8901",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Project 1",
      type: "Crop",
      status: "ongoing",
    },
    {
      id: 2,
      name: "Project 2",
      type: "Livestock",
      status: "completed",
    },
    {
      id: 3,
      name: "Project 3",
      type: "Aquaculture",
      status: "completed",
    },
    {
      id: 4,
      name: "Project 4",
      type: "Agroforestry",
      status: "ongoing",
    },
  ];

  const renderKeyValuePairs = () => {
    type KeyMapping = {
      [key: string]: string; // This allows any string key to be used to access a string value
    };

    const keyMapping: KeyMapping = {
      farmerId: "ID",
      farmerName: "Name",
      gender: "Gender",
      dob: "Date of Birth",
      lga: "Local Government Area",
      phoneNumber: "Phone Number",
      // Other mappings...
    };

    return Object.entries(data[0]).map(([key, value], index) => {
      const formattedKey = keyMapping[key] || key;
      return (
        <>
          <div className="flex justify-between my-2">
            <p key={key}>{formattedKey}:</p>
            <span className="text-left font-bold "> {value} </span>
          </div>
          <hr />
        </>
      );
    });
  };

  const renderProjects = () => {
    let filteredProjects = projects;
    if (filterStatus !== "all") {
      filteredProjects = projects.filter(
        (project) => project.status === filterStatus
      );
    }

    return filteredProjects.map((project) => (
      <div
        key={project.id}
        className="flex justify-between items-center cursor-pointer hover:bg-slate-100 border rounded-lg border-slate-200 m-2"
      >
        <div className="p-2 font-semibold">
          <p>{project.name}</p>
          <p className="text-slate-300">Farming Type: {project.type}</p>
        </div>
        <div className="border border-slate-200 rounded-md mr-3">
          <PiGreaterThanThin className="text-xl" />
        </div>
      </div>
    ));
  };

  return (
    <div className="text-black">
      <div className="flex items-center justify-between mr-10">
        <h2 className="text-[32px] text-black font-semibold inline">
          {" "}
          Farmers
          <br />
          <span className="text-lg -mb-4 text-slate-400  flex items-center gap-3 font-semibold">
            Farmer <PiGreaterThanThin />
            <span className="text-black">Farmer Information</span>
          </span>
        </h2>
        <div className="flex ">
          <span className="flex bg-white items-center cursor-pointer mr-5 border p-2 rounded-2xl hover:opacity-40 transition-all ease-in-out duration-500">
            <RiDeleteBin6Line />
            Delete
          </span>
          <span className="cursor-pointer bg-white  mr-5 border p-2 rounded-2xl hover:opacity-40 transition-all ease-in-out duration-500">
            <EditIcon />
          </span>
        </div>
      </div>
      <div className="flex w-[74vw] h-[65vh] gap-3 mt-5 ">
        <div className="w-[90%] mx-2 rounded-3xl p-5  bg-white">
          <div className="bg-[#FFF7F0] p-3 ">
            <h2 className="font-bold text-2xl">Farmer Information </h2>
          </div>
          {renderKeyValuePairs()}
        </div>
        <div className="w-[90%] mx-2 rounded-3xl p-5  bg-white">
          <div className="w-[90%] mx-2 rounded-3xl  bg-white">
            <div className="">
              <h2 className="font-bold text-2xl">Project </h2>
            </div>
          </div>
          <hr />
          <div className="w-full flex justify-around bg-[#FFF7F0] my-1 text-white text-xs font-semibold">
            <div className="p-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={` p-2 rounded-lg mx-1 ${
                  filterStatus === "all"
                    ? "text-white bg-secondary"
                    : "text-slate-400"
                }`}
              >
                All Projects ({projects.length})
              </button>
              <button
                onClick={() => setFilterStatus("ongoing")}
                className={`p-2 rounded-lg mx-1 ${
                  filterStatus === "ongoing"
                    ? "text-white bg-secondary"
                    : "text-slate-400 hover:bg-secondary hover:text-white transition-all ease-in-out duration-300 delay-200"
                }`}
              >
                Ongoing Projects (
                {
                  projects.filter((project) => project.status === "ongoing")
                    .length
                }
                )
              </button>
              <button
                onClick={() => setFilterStatus("completed")}
                className={`p-2 rounded-lg mx-1 ${
                  filterStatus === "completed"
                    ? "text-white bg-secondary"
                    : "text-slate-400 hover:bg-secondary hover:text-white transition-all ease-in-out duration-300 delay-200"
                }`}
              >
                Completed Projects (
                {
                  projects.filter((project) => project.status === "completed")
                    .length
                }
                )
              </button>
            </div>
          </div>
          {renderProjects()}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Details;
