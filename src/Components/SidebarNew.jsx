import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Plus,
  BarChart2,
  User,
  Folder,
  LogOut,
  CarFrontIcon,
  HeartHandshake,
  CarFront,
} from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useNavigate, useLocation } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
  { name: "Employee", icon: <Users size={20} />, path: "/employee" },
  { name: "Dealer", icon: <HeartHandshake size={20} />, path: "/dealer" },
  { name: "Cars", icon: <CarFront size={20} />, path: "/cars" }, // update if this route changes
  { name: "Auctions", icon: <BarChart2 size={20} />, path: "/auctions" },
  // { name: "Agents", icon: <User size={20} />, path: "/agents" },
  // { name: "Project", icon: <Folder size={20} />, path: "/project" },
  // { name: "Create Project", icon: <Folder size={20} />, path: "/create-project" },
  { name: "Logout", icon: <LogOut size={20} />, path: "/logout" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div
      className={`h-screen flex flex-col justify-between ${
        isOpen ? "w-54" : "w-12"
      } transition-all duration-300 bg-white shadow-lg`}
    >
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between px-4 py-4">
          {isOpen ? (
            <span className="text-xl font-bold text-black flex items-center gap-2">
              <CarFrontIcon className="text-zinc-900" />
              Regal Cars
            </span>
          ) : (
            <button onClick={handleToggle}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
          {isOpen && (
            <button onClick={handleToggle}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Menu */}
        <ul className="space-y-2 mt-4">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.name}
                className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`}
                onClick={() => navigate(item.path)}
                data-tooltip-id={isOpen ? "" : `tooltip-${idx}`}
                data-tooltip-content={item.name}
              >
                <span className="text-gray-700">{item.icon}</span>
                {isOpen && <span className="ml-3 text-gray-800">{item.name}</span>}
                {!isOpen && <Tooltip id={`tooltip-${idx}`} place="right" />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
