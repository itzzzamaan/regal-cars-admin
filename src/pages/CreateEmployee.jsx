import React, { useState } from "react";

const initialEmployees = [
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
    revenue: 1250000,
    experienceYears: 8,
    expertise: ["Luxury", "SUV", "Electric"],
    status: "active",
    hireDate: "2015-03-15",
  },
    {
    id: 2,
    name: "James Wilson",
    position: "Senior Sales Broker",
    phone: "(503) 555-1234",
    email: "jwilson@autodealer.com",
    location: "Portland, OR",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    salesThisMonth: 12,
    totalSales: 342,
    revenue: 1250000,
    experienceYears: 8,
    expertise: ["Luxury", "SUV", "Electric"],
    status: "active",
    hireDate: "2015-03-15",
  },
    {
    id: 3,
    name: "James Wilson",
    position: "Senior Sales Broker",
    phone: "(503) 555-1234",
    email: "jwilson@autodealer.com",
    location: "Portland, OR",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    salesThisMonth: 12,
    totalSales: 342,
    revenue: 1250000,
    experienceYears: 8,
    expertise: ["Luxury", "SUV", "Electric"],
    status: "active",
    hireDate: "2015-03-15",
  },
];

const CreateEmployee = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
    location: "",
    avatar: "",
    salesThisMonth: 0,
    totalSales: 0,
    revenue: 0,
    experienceYears: 0,
    expertise: "",
    status: "active",
    hireDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newEmployee = {
      ...formData,
      id: employees.length + 1,
      expertise: formData.expertise.split(",").map((item) => item.trim()),
    };
    setEmployees([newEmployee, ...employees]);
    setFormData({
      name: "",
      position: "",
      phone: "",
      email: "",
      location: "",
      avatar: "",
      salesThisMonth: 0,
      totalSales: 0,
      revenue: 0,
      experienceYears: 0,
      expertise: "",
      status: "active",
      hireDate: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Form */}
      <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Create New Employee</h2>

        {[
          { label: "Name", name: "name" },
          { label: "Position", name: "position" },
          { label: "Phone", name: "phone" },
          { label: "Email", name: "email" },
          { label: "Location", name: "location" },
          { label: "Avatar URL", name: "avatar" },
          { label: "Sales This Month", name: "salesThisMonth", type: "number" },
          { label: "Total Sales", name: "totalSales", type: "number" },
          { label: "Revenue", name: "revenue", type: "number" },
          { label: "Experience (Years)", name: "experienceYears", type: "number" },
          { label: "Expertise (comma separated)", name: "expertise" },
          { label: "Hire Date", name: "hireDate", type: "date" },
        ].map((field, idx) => (
          <div className="mb-4" key={idx}>
            <label className="block text-sm font-medium mb-1">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="active">Active</option>
            <option value="on leave">On Leave</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Create Employee
          </button>
          <button
            onClick={() =>
              setFormData({
                name: "",
                position: "",
                phone: "",
                email: "",
                location: "",
                avatar: "",
                salesThisMonth: 0,
                totalSales: 0,
                revenue: 0,
                experienceYears: 0,
                expertise: "",
                status: "active",
                hireDate: "",
              })
            }
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="w-full h-screen shadow bg-white p-6 rounded-xl md:w-1/2 space-y-4">
      <h1 className="text-2xl text-black"> All Employees List</h1>
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded-xl p-4 shadow flex justify-between items-start"
          >
            <div className="flex gap-4">
              <img
                src={emp.avatar}
                alt={emp.name}
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h3 className="font-semibold text-lg">{emp.name}</h3>
                <p className="text-sm text-gray-500">{emp.position}</p>
                <div className="mt-2 text-xs text-gray-700">
                  <p>📍 {emp.location}</p>
                  <p>📞 {emp.phone}</p>
                  <p>📧 {emp.email}</p>
                </div>
              </div>
            </div>

            <div className="text-right text-sm text-gray-500">
              <p className="text-xs">{new Date(emp.hireDate).toDateString()}</p>
              <div className="flex gap-1 mt-2 flex-wrap justify-end">
                {emp.expertise.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-800 text-white px-2 py-1 text-[10px] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateEmployee;
