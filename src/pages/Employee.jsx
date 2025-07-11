import { IconLocation, IconLocationPin } from "@tabler/icons-react";
import {
  LayoutGrid,
  List,
  MailIcon,
  MapPin,
  PhoneCall,
  PlusIcon,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import { FaTh, FaList, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "James Wilson",
    position: "Senior Sales Broker",
    phone: "(503) 555-1234",
    email: "jwilson@autodealer.com",
    location: "Portland, OR",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    salesThisMonth: 12,
    totalSales: 342,
    revenue: 125000,
    experienceYears: 8,
    expertise: ["Luxury", "SUV", "Electric"],
    rating: 4.9,
    status: "active",
    hireDate: "2015-03-15",
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    position: "Finance Broker",
    phone: "(503) 555-2345",
    email: "srodriguez@autodealer.com",
    location: "Portland, OR",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    salesThisMonth: 9,
    totalSales: 248,
    revenue: 890000,
    experienceYears: 5,
    expertise: ["Financing", "Leasing", "First-time buyers"],
    rating: 4.7,
    status: "active",
    hireDate: "2018-07-22",
  },
  {
    id: 3,
    name: "Robert Chen",
    position: "Fleet Sales Broker",
    phone: "(503) 555-3456",
    email: "rchen@autodealer.com",
    location: "Beaverton, OR",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    salesThisMonth: 2,
    totalSales: 56,
    revenue: 175000,
    experienceYears: 6,
    expertise: ["Commercial", "Fleet", "B2B"],
    rating: 4.5,
    status: "active",
    hireDate: "2017-11-05",
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Pre-Owned Vehicle Broker",
    phone: "(503) 555-4567",
    email: "ejohnson@autodealer.com",
    location: "Portland, OR",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    salesThisMonth: 15,
    totalSales: 298,
    revenue: 675000,
    experienceYears: 4,
    expertise: ["Pre-owned", "Classic", "Trade-ins"],
    rating: 4.8,
    status: "active",
    hireDate: "2019-06-10",
  },
  {
    id: 5,
    name: "Mark William",
    position: "Performance Vehicle Broker",
    phone: "(503) 555-5678",
    email: "mwilliams@autodealer.com",
    location: "Oswego, OR",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    salesThisMonth: 6,
    totalSales: 173,
    revenue: 210000,
    experienceYears: 7,
    expertise: ["Performance", "Exotic", "Sports cars"],
    rating: 4.6,
    status: "on leave",
    hireDate: "2016-09-18",
  },
  {
    id: 6,
    name: "Priyanka Jain",
    position: "EV Specialist Broker",
    phone: "(503) 555-6789",
    email: "ppatel@autodealer.com",
    location: "Portland, OR",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    salesThisMonth: 11,
    totalSales: 187,
    revenue: 985000,
    experienceYears: 3,
    expertise: ["Electric", "Hybrid", "Sustainable"],
    rating: 4.9,
    status: "active",
    hireDate: "2020-02-15",
  },
];

const Employee = () => {
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Recent");
  const [statusFilter, setStatusFilter] = useState("Any");
  const [typeFilter, setTypeFilter] = useState("Any");
  const [dateFilter, setDateFilter] = useState("All");

   const navigate = useNavigate();

  const filteredEmployees = employees.filter((emp) => {
    const nameMatch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const emailMatch = emp.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const statusMatch =
      statusFilter === "Any" ||
      emp.status.toLowerCase() === statusFilter.toLowerCase();
    return (nameMatch || emailMatch) && statusMatch;
  });

  return (
    <div className="p-4 sm:p-6 rounded-xl bg-gray-50 min-h-screen text-black">
      {/* First Row - Heading + Search */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
        <h2 className="text-2xl font-bold">Employees</h2>
        <div className=" flex items-center border rounded-md bg-white px-2 py-1 shadow-sm w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search employee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* Second Row - Filters on Left, Toggle + Create Button on Right */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col text-sm">
            <label className="mb-1 font-medium">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 border rounded text-sm"
            >
              <option>Recent</option>
              <option>Oldest</option>
            </select>
          </div>
          <div className="flex flex-col text-sm">
            <label className="mb-1 font-medium">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 border rounded text-sm"
            >
              <option>Any</option>
              <option>Active</option>
              <option>On Leave</option>
            </select>
          </div>
          <div className="flex flex-col text-sm">
            <label className="mb-1 font-medium">Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-1.5 border rounded text-sm"
            >
              <option>Any</option>
              <option>Sales</option>
              <option>Finance</option>
              <option>EV</option>
            </select>
          </div>
          <div className="flex flex-col text-sm">
            <label className="mb-1 font-medium">Date</label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-3 py-1.5 border rounded text-sm"
            >
              <option>All</option>
              <option>2020+</option>
              <option>Before 2020</option>
            </select>
          </div>
        </div>

        {/* View Toggle + Create Button */}
        <div className="flex items-center gap-3">
          <div className="ml-auto flex items-center gap-2 ">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-md ${
                view === "grid"
                  ? "bg-black text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-md ${
                view === "list"
                  ? "bg-black text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              <List size={18} />
            </button>
          </div>
          <button
      onClick={() => navigate("/create-employee")}
      className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-900 transition"
    >
      <PlusIcon size={18} /> Create Employee
    </button>
        </div>
      </div>

      {/* Grid View */}
      {view === "grid" ? (
        <div className="grid bg-white  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className="bg-white border rounded-xl shadow-md shadow-black/30 p-5 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={emp.avatar}
                  alt={emp.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-400"
                />
                <div>
                  <div className="flex flex-row justify-between gap-2.5 md:gap-11">
                    <div className="md:text-[15px] text-xs font-semibold text-black">
                      {emp.name}
                    </div>
                    <div className="flex font-normal text-gray-700 text-xs items-center gap-0 md:gap-1">
                      <MapPin size={14} />
                      <p>{emp.location}</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#9E9E9E]">{emp.position}</p>
                </div>
              </div>

              <div className="text-xs text-gray-700 space-y-0.5 border-t border-gray-400 pt-3">
                <div className="flex items-center gap-2">
                  <PhoneCall size={13} />
                  <p>{emp.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon size={13} />
                  <p>{emp.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-gray-400 pt-2 text-xs gap-2 text-white">
                <div className="flex flex-row py-2 px-3 w-fit bg-zinc-700 rounded-3xl gap-1">
                  <p className="text-gray-100">Monthly Sales :</p>
                  <p className="text-xs">{emp.salesThisMonth}</p>
                </div>
                <div className="flex flex-row py-2 px-3 w-fit bg-zinc-700 rounded-3xl gap-1">
                  <p className="text-gray-100">Total Sales :</p>
                  <p className="text-xs">{emp.totalSales}</p>
                </div>
                <div className="flex flex-row py-2 px-3  w-fit bg-zinc-700 rounded-3xl gap-1">
                  <p className="text-gray-100">Revenue :</p>
                  <p className="text-xs">{emp.revenue.toLocaleString()}</p>
                </div>
                <div className="flex flex-row py-2 px-3 w-fit bg-zinc-700 rounded-3xl gap-1">
                  <p className="text-gray-100">Experience :</p>
                  <p className="text-xs">{emp.experienceYears} yrs</p>
                </div>
              </div>

              {/* <div className="flex flex-wrap gap-2 mt-2">
                {emp.expertise.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-zinc-900/80 text-white px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-black text-white text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Position</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Email</th>
                <th className="p-2">Location</th>
                <th className="p-2">Sales</th>
                <th className="p-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="border-b hover:bg-gray-100">
                  <td className="p-2 flex items-center gap-2">
                    <img src={emp.avatar} className="w-8 h-8 rounded-full" />
                    {emp.name}
                  </td>
                  <td className="p-2">{emp.position}</td>
                  <td className="p-2">{emp.phone}</td>
                  <td className="p-2">{emp.email}</td>
                  <td className="p-2">{emp.location}</td>
                  <td className="p-2">
                    {emp.salesThisMonth} / {emp.totalSales}
                  </td>
                  <td className="p-2">${emp.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Employee;
