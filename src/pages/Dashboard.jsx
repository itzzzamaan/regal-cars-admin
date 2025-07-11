import { IconBrandTabler } from "@tabler/icons-react";
import React from "react";
import {
  BarChart,
  PieChart,
  Bar,
  Pie,
  XAxis,
  Cell,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const Dashboard = () => {
 const jobOrderData = [
  { name: "Pending", value: 30 },
  { name: "In Progress", value: 45 },
  { name: "Completed", value: 25 },
];

const COLORS = ["#facc15", "#60a5fa", "#34d399"];


  const insuranceData = [
    { name: "Insurance A", value: 300 },
    { name: "Insurance B", value: 280 },
    { name: "Insurance C", value: 200 },
    { name: "Insurance D", value: 180 },
    { name: "Insurance E", value: 90 },
    { name: "Insurance F", value: 78 },
  ];

  const compareData = [
    { day: "9", Insurance: 10, Individual: 5 },
    { day: "10", Insurance: 15, Individual: 7 },
    { day: "11", Insurance: 12, Individual: 6 },
    { day: "12", Insurance: 12, Individual: 20 },
    { day: "13", Insurance: 10, Individual: 8 },
    { day: "14", Insurance: 14, Individual: 9 },
    { day: "15", Insurance: 18, Individual: 10 },
    { day: "16", Insurance: 22, Individual: 14 },
    { day: "17", Insurance: 20, Individual: 13 },
    { day: "18", Insurance: 28, Individual: 18 },
    { day: "19", Insurance: 32, Individual: 20 },
    { day: "20", Insurance: 26, Individual: 18 },
    { day: "21", Insurance: 24, Individual: 14 },
    { day: "22", Insurance: 12, Individual: 6 },
  ];

  const incomeExpenseData = compareData.map((item) => ({
    day: item.day,
    Income: item.Individual * 1000,
    Expense: item.Insurance * 1000,
    NetIncome: item.Individual * 1000 - item.Insurance * 1000,
  }));

  return (
    <div className="bg-gray-50 rounded-lg px-4 py-6 lg:px-6 text-[#151D48]">
     <div className="flex flex-row mb-6 items-center gap-2">
        <IconBrandTabler className="h-7 w-7 dark:text-neutral-200" />
         <h1 className="text-2xl font-bold"> 
            Summary</h1>
     </div>
      {/* <p className="text-gray-500 mt-4 mb-6">Summary</p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
       <div className="bg-white rounded-lg p-4 shadow-sm col-span-1">
  <h4 className="text-base font-semibold text-gray-900 mb-4">Car Order</h4>
  <ResponsiveContainer width="100%" height={220}>
    <PieChart>
      <Pie
        data={jobOrderData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={70}
        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
      >
        {jobOrderData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        formatter={(value, name) => [`${value}`, `${name}`]}
        contentStyle={{ fontSize: "14px", borderRadius: "6px" }}
      />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  </ResponsiveContainer>
</div>


        <div className="bg-white rounded-lg p-4 shadow-sm col-span-1">
          <h4 className="text-base font-semibold text-gray-900 mb-2">Insurance</h4>
    <BarChart width={450} height={200} data={insuranceData}>
      <XAxis dataKey="name" tick={{ fontSize: 10 }} />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#1e77a4" />
    </BarChart>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={compareData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Insurance" stackId="a" fill="#1e77a4" />
            <Bar dataKey="Individual" stackId="a" fill="#93C5FD" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-4">Money</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={compareData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Insurance" fill="#1e77a4" />
              <Bar dataKey="Individual" fill="#93C5FD" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-4">Income vs Expense</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={incomeExpenseData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Income" stroke="#1e77a4" />
              <Line type="monotone" dataKey="Expense" stroke="#9E9E9E" />
              {/* <Line type="monotone" dataKey="NetIncome" stroke="#FACC15" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
