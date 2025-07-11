import React from 'react';
import Sidebar from './SidebarNew'; // or your actual sidebar component
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 py-8 px-6">
        <Outlet />
      </main>
    </div>
  );
}
