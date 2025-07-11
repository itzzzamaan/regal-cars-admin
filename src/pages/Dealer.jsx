import React, { useState } from "react";
import {
  Star,
  Car,
  Calendar,
  LayoutGrid,
  List,
  User,
  MapPin,
  Phone,
  Mail,
  Search,
  CheckCircle,
  XCircle,
  PlusIcon,
} from "lucide-react";

const dealers = [
  {
    id: 1,
    name: "Premium Auto Group",
    location: "Los Angeles, CA",
    phone: "(213) 555-1234",
    email: "sales@premiumauto.com",
    inventory: 127,
    established: 2005,
    rating: 4.8,
    certified: true,
    specialties: ["Luxury", "Import", "Electric"],
  },
  {
    id: 2,
    name: "City Motors",
    location: "Chicago, IL",
    phone: "(312) 555-6789",
    email: "info@citymotors.com",
    inventory: 95,
    established: 1998,
    rating: 4.5,
    certified: true,
    specialties: ["Domestic", "SUV", "Trucks"],
  },
  {
    id: 3,
    name: "Sunshine Auto Sales",
    location: "Miami, FL",
    phone: "(305) 555-2468",
    email: "contact@sunshineauto.com",
    inventory: 64,
    established: 2012,
    rating: 4.2,
    certified: false,
    specialties: ["Pre-owned", "Family", "Budget"],
  },
  {
    id: 4,
    name: "Mountain View Dealership",
    location: "Denver, CO",
    phone: "(720) 555-3698",
    email: "sales@mountainview.com",
    inventory: 82,
    established: 2008,
    rating: 4.6,
    certified: true,
    specialties: ["SUV", "Off-road", "All-wheel drive"],
  },
  {
    id: 5,
    name: "Golden State Cars",
    location: "San Francisco, CA",
    phone: "(415) 555-7890",
    email: "info@goldenstateauto.com",
    inventory: 110,
    established: 2001,
    rating: 4.7,
    certified: true,
    specialties: ["Hybrid", "Electric", "Import"],
  },
  {
    id: 6,
    name: "Capital City Motors",
    location: "Washington, DC",
    phone: "(202) 555-1357",
    email: "sales@capitalcity.com",
    inventory: 76,
    established: 2010,
    rating: 4.3,
    certified: true,
    specialties: ["Luxury", "Sedans", "SUV"],
  },
];

const sortOptions = ["Recent", "Name A-Z", "Inventory"];
const statusOptions = ["Any", "Certified", "Non-Certified"];
const typeOptions = ["Any", "Luxury", "Import", "SUV", "Electric", "Budget"];
const dateOptions = ["All", "Established Recently", "Oldest First"];

const Dealer = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Recent");
  const [status, setStatus] = useState("Any");
  const [type, setType] = useState("Any");
  const [date, setDate] = useState("All");
  const [gridView, setGridView] = useState(true);

  const filteredDealers = dealers
    .filter((dealer) =>
      dealer.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((dealer) => {
      if (status === "Certified") return dealer.certified;
      if (status === "Non-Certified") return !dealer.certified;
      return true;
    })
    .filter((dealer) =>
      type === "Any"
        ? true
        : dealer.specialties.some((t) =>
            t.toLowerCase().includes(type.toLowerCase())
          )
    )
    .filter((dealer) => {
      const currentYear = new Date().getFullYear();
      if (date === "Established Recently")
        return currentYear - dealer.established <= 5;
      if (date === "Oldest First") return currentYear - dealer.established > 5;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Name A-Z":
          return a.name.localeCompare(b.name);
        case "Inventory":
          return b.inventory - a.inventory;
        default:
          return 0;
      }
    });

  return (
    <div className="p-4 sm:p-6 rounded-xl bg-gray-50 min-h-screen text-black">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-zinc-900">Dealerships</h1>
        <div className="flex items-center border rounded-md bg-white px-2 py-1 shadow-sm w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search dealer..."
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        {[["Sort by", sortBy, setSortBy, sortOptions],
          ["Status", status, setStatus, statusOptions],
          ["Type", type, setType, typeOptions],
          ["Date", date, setDate, dateOptions]].map(
          ([label, value, setter, options]) => (
            <div key={label} className="flex flex-col">
              <label className="text-sm text-zinc-900 mb-2 font-semibold">{label}</label>
              <select
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="border px-3 py-1.5 rounded-md bg-white shadow-sm"
              >
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          )
        )}

        <div className="ml-auto flex items-center gap-2 mt-5 sm:mt-0">
          <button
            onClick={() => setGridView(true)}
            className={`p-2 rounded-md ${gridView ? "bg-black text-white" : "bg-white border hover:bg-gray-100"}`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setGridView(false)}
            className={`p-2 rounded-md ${!gridView ? "bg-black text-white" : "bg-white border hover:bg-gray-100"}`}
          >
            <List size={18} />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-900 transition">
            <PlusIcon size={18} /> Create Dealer
          </button>
        </div>
      </div>

      {/* Dealer Display */}
      {gridView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDealers.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-row justify-between">
                <div className="font-semibold text-[15px] truncate">
                  {dealer.name}
                </div>
                <div className="flex font-normal text-gray-700 text-xs items-center gap-1">
                  <MapPin className="" size={14} />
                  {dealer.location}
                </div>
              </div>
              <div className="flex font-normal text-gray-500 text-xs items-center gap-2">
                <Mail size={12} />
                {dealer.email}
              </div>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <User size={14} />
                {dealer.certified ? "Certified" : "Uncertified"}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    dealer.certified
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {dealer.certified ? "Certified" : "Not Certified"}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                  {dealer.inventory > 100
                    ? "High Inventory"
                    : dealer.inventory > 70
                    ? "Medium Inventory"
                    : "Low Inventory"}
                </span>
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" />
                  {dealer.rating}
                </div>
                <div className="flex items-center gap-1">
                  <Car size={14} />
                  {dealer.inventory}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {dealer.established}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto bg-white border rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-xs uppercase text-gray-600">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Certified</th>
                <th className="px-4 py-3">Inventory</th>
                <th className="px-4 py-3">Rating</th>
                <th className="px-4 py-3">Established</th>
              </tr>
            </thead>
            <tbody>
              {filteredDealers.map((dealer, index) => (
                <tr
                  key={dealer.id}
                  className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                >
                  <td className="px-4 py-3 font-medium">{dealer.name}</td>
                  <td className="px-4 py-3">{dealer.location}</td>
                  <td className="px-4 py-3">{dealer.email}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full ${
                      dealer.certified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                    }`}>
                      {dealer.certified ? (
                        <>
                          <CheckCircle size={12} /> Yes
                        </>
                      ) : (
                        <>
                          <XCircle size={12} /> No
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-3">{dealer.inventory}</td>
                  <td className="px-4 py-3">{dealer.rating}</td>
                  <td className="px-4 py-3">{dealer.established}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dealer;
