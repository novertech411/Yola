"use client";
import SearchIcon from "@/components/icons/SearchIcon";
import DashboardIcon from "../icons/DashboardIcon";
import Farmer from "@/components/icons/FamerIcon";
import Extention from "@/components/icons/ExtentionIcon";
import Campaing from "@/components/icons/CampaingIcon";
import Report from "@/components/icons/ReportIcon";
import "@/components/icons/ReportIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import LoginIcon from "../icons/LoginIcon";
import { FaUsers, FaCog, FaFileAlt, FaUserFriends, FaMapMarkedAlt, FaTools } from 'react-icons/fa';


const menus = [
  {
    id: 1,
    url: "/dashboard",
    icon: DashboardIcon,
    label: "Dashboard",
    isActive: false,
  },
  {
    id: 2,
    url: "/dashboard/farmers",
    icon: Farmer,
    label: "Farmers",
    isActive: false,
  },
  {
    id: 3,
    url: "/dashboard/extentionworkers",
    icon: Extention,
    label: "Extensionworkers",
    isActive: false,
  },
  {
    id: 4,
    url: "/dashboard/campaigns",
    icon: Campaing,
    label: "Campaigns",
    isActive: false,
  },
  {
    id: 5,
    url: "/dashboard/reports",
    icon: Report,
    label: "Reports",
    isActive: false,
  },
  {
    id: 6,
    url: "/dashboard/cooperatives",
    icon: FaUsers,
    label: "Cooperatives",
    isActive: false,
  },
  {
    id: 7,
    url: "/dashboard/visits",
    icon: FaMapMarkedAlt,
    label: "Visits",
    isActive: false,
  },
  {
    id: 8,
    url: "/dashboard/interventions",
    icon: FaUserFriends,
    label: "Interventions",
    isActive: false,
  },
  {
    id: 9,
    url: "/dashboard/users",
    icon: FaUsers,
    label: "Users",
    isActive: false,
  },
  {
    id: 10,
    url: "/dashboard/reports",
    icon: FaFileAlt,
    label: "Reports",
    isActive: false,
  },
  {
    id: 11,
    url: "/dashboard/settings",
    icon: FaCog,
    label: "Settings",
    isActive: false,
  },
];
export default function Sidebar() {
  const path = usePathname();
  const isDashboardActive = path === '/dashboard'; 

  const isMenuActive = (url:any) => {
    if (url === '/dashboard') {
      return isDashboardActive;
    } else {
      return path.startsWith(url); // Check if the path starts with the URL
    }
  };

  return (
    <div className="w-[240px] bg-white h-full pt-[5rem] px-[10px] flex flex-col justify-between text-[#717171] ">
      <div>
        <div className="p-[8px] border-2 rounded-lg border-[#E7E7E7] flex gap-2 items-center text-[#717171]">
          <SearchIcon />
          <input
            className="w-full placeholder:text-[#717171] outline-none "
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="w-full mt-5">
          {menus.map((item) => {
            const isActive = isMenuActive(item.url);
            return (
              <Link href={item.url} key={item.id}>
                <div
                  className={clsx(
                    "group flex py-[.6rem] items-center px-4 text-xs cursor-pointer mb-1 hover:bg-secondary rounded-lg",
                    isActive ? "rounded-r-lg bg-secondary" : ""
                  )}
                >
                  <div className="mr-4">
                    <item.icon
                      color={
                        isActive
                          ? "text-white "
                          : "text-[#788B9A] group-hover:text-white"
                      }
                    />
                  </div>
                  <div
                    className={clsx(
                      "text-xs not-italic font-normal group-hover:!text-white",
                      isActive ? "text-white" : "text-[#788B9A]"
                    )}
                  >
                    {item.label}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex gap-3 text-red-600 px-4 items-center cursor-pointer">
          <LoginIcon />
          <p className="text-red-600">Logout</p>
        </div>
      </div>
    </div>
  );
}
